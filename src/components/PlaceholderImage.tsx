import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  altText?: string;
  src?: string;
  ratio?: "wide" | "square" | "portrait";
  className?: string;
};

const ratios = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[4/5]"
};

export function PlaceholderImage({
  label,
  altText,
  src,
  ratio = "wide",
  className
}: PlaceholderImageProps) {
  const accessibleLabel = altText ?? `${label} placeholder visual for future photography`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-panel border border-stone-200 bg-cotton shadow-line",
        ratios[ratio],
        className
      )}
      role={src ? undefined : "img"}
      aria-label={src ? undefined : accessibleLabel}
    >
      {src ? (
        <Image
          src={src}
          alt={accessibleLabel}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
          priority={ratio === "portrait"}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,58,99,0.12),rgba(255,255,255,0)_45%),repeating-linear-gradient(90deg,rgba(16,27,45,0.06)_0,rgba(16,27,45,0.06)_1px,transparent_1px,transparent_18px)]" />
      )}
      <div className="absolute inset-x-0 bottom-0 border-t border-stone-200 bg-white/82 px-4 py-3 backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-700">
          {label}
        </p>
      </div>
    </div>
  );
}
