"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

const introKey = "allin-denim-intro-seen";

export function FirstVisitLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let alreadySeen = false;

    try {
      alreadySeen = window.localStorage.getItem(introKey) === "true";
    } catch {
      alreadySeen = true;
    }

    if (alreadySeen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        window.localStorage.setItem(introKey, "true");
      } catch {
        // The intro is optional; skip persistence if browser storage is unavailable.
      }
      return;
    }

    setVisible(true);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        window.localStorage.setItem(introKey, "true");
      } catch {
        // The intro remains non-blocking if browser storage is unavailable.
      }
    }, 950);

    return () => window.clearTimeout(hideTimer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[70] grid place-items-center bg-cotton text-ink-900"
      aria-label="Loading Allin Denim"
      role="status"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="grid h-20 w-20 place-items-center rounded-panel bg-ink-900 shadow-soft">
          <BrandLogo variant="white" markOnly decorative priority className="h-14 w-14 animate-[loader-mark_900ms_ease-out_both]" />
        </div>
        <div className="h-px w-44 overflow-hidden bg-stone-200">
          <div className="h-full w-full origin-left animate-[loader-line_900ms_ease-out_both] bg-denim-700" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-stone-500">
          Allin Denim
        </p>
      </div>
    </div>
  );
}
