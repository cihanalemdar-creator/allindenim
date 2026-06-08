import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { Client } from "basic-ftp";

const rootDir = process.cwd();
const envPath = path.join(rootDir, ".env.cpanel");
const outDir = path.join(rootDir, "out");

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value.replace(/^["']|["']$/g, "");
    }
  }
}

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}. Add it to .env.cpanel.`);
  }

  return value;
}

function runNpm(args) {
  if (process.env.npm_execpath) {
    execFileSync(process.execPath, [process.env.npm_execpath, ...args], {
      cwd: rootDir,
      stdio: "inherit"
    });
    return;
  }

  execFileSync(process.platform === "win32" ? "npm.cmd" : "npm", args, {
    cwd: rootDir,
    stdio: "inherit"
  });
}

async function uploadDirectory(client, localDir, remoteDir) {
  await client.ensureDir(remoteDir);
  await client.cd(remoteDir);

  for (const entry of readdirSync(localDir, { withFileTypes: true })) {
    const localPath = path.join(localDir, entry.name);
    const remotePath = `${remoteDir.replace(/\/$/, "")}/${entry.name}`;

    if (entry.isDirectory()) {
      await uploadDirectory(client, localPath, remotePath);
      await client.cd(remoteDir);
      continue;
    }

    if (entry.isFile()) {
      await client.uploadFrom(localPath, remotePath);
    }
  }
}

loadEnvFile(envPath);

const host = requireEnv("CPANEL_FTP_HOST");
const port = Number.parseInt(process.env.CPANEL_FTP_PORT || "21", 10);
const user = requireEnv("CPANEL_FTP_USER");
const password = requireEnv("CPANEL_FTP_PASSWORD");
const remoteDir = process.env.CPANEL_REMOTE_DIR || "/";
const secure = process.env.CPANEL_FTP_SECURE === "true";
const rejectUnauthorized = process.env.CPANEL_FTP_REJECT_UNAUTHORIZED !== "false";

console.log("Building static site...");
for (const buildDir of [".next", "out"]) {
  const buildPath = path.join(rootDir, buildDir);

  if (existsSync(buildPath)) {
    rmSync(buildPath, { recursive: true, force: true });
  }
}
runNpm(["run", "build"]);

if (!existsSync(outDir) || !statSync(outDir).isDirectory()) {
  throw new Error("Build did not create the out directory.");
}

const client = new Client(30_000);
client.ftp.verbose = process.env.CPANEL_FTP_VERBOSE === "true";

try {
  console.log(`Connecting to ${host}...`);
  await client.access({
    host,
    port,
    user,
    password,
    secure,
    secureOptions: {
      rejectUnauthorized
    }
  });

  console.log(`Uploading out/ to ${remoteDir}...`);
  await uploadDirectory(client, outDir, remoteDir);
  console.log("cPanel deploy completed.");
} finally {
  client.close();
}
