"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const consentKey = "allin-denim-cookie-consent";

function writeConsentCookie() {
  const maxAge = 60 * 60 * 24 * 180;
  document.cookie = `${consentKey}=accepted; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function hasConsentCookie() {
  return document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${consentKey}=`));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = window.localStorage.getItem(consentKey);
      setVisible(!storedConsent && !hasConsentCookie());
    } catch {
      setVisible(!hasConsentCookie());
    }
  }, []);

  function acceptCookies() {
    try {
      window.localStorage.setItem(consentKey, "accepted");
    } catch {
      // Cookie storage below still remembers the preference when localStorage is unavailable.
    }
    writeConsentCookie();
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6" role="region" aria-label="Cookie notice">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-panel border border-stone-200 bg-white/95 p-4 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-ink-900">Cookie preferences</p>
          <p className="mt-1 text-sm leading-6 text-stone-600">
            We use essential cookies and local preference storage to keep the site working
            smoothly, remember this choice, and improve the browsing experience. Inquiry
            form delivery remains disabled until a secure integration is connected.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-panel border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100"
          >
            Contact us
          </Link>
          <button
            type="button"
            onClick={acceptCookies}
            className="inline-flex min-h-11 items-center justify-center rounded-panel bg-ink-900 px-5 py-2 text-sm font-semibold text-white shadow-line transition-colors hover:bg-denim-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
