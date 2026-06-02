import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "default" | "white";
  markOnly?: boolean;
  decorative?: boolean;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "default",
  markOnly = false,
  decorative = false,
  alt = "ALL'IN DENIM",
  className,
  priority = false
}: BrandLogoProps) {
  const suffix = variant === "white" ? "-white" : "";
  const src = markOnly
    ? `/assets/logo/svg/allindenim-monogram${suffix}.svg`
    : `/assets/logo/svg/allindenim-secondary${suffix}.svg`;

  return (
    <Image
      src={src}
      alt={decorative ? "" : alt}
      width={markOnly ? 48 : 220}
      height={markOnly ? 48 : 52}
      priority={priority}
      aria-hidden={decorative ? "true" : undefined}
      className={cn(markOnly ? "h-9 w-9" : "h-auto w-[138px] sm:w-[164px]", className)}
    />
  );
}
