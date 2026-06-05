import Image from "next/image";
import { cn } from "@/lib/utils";

export type AssetIconName =
  | "activewear-sportswear"
  | "babywear-children"
  | "compliance-certification"
  | "contact-inquiry"
  | "denim-jeans"
  | "embroidery-printing"
  | "eu-us-market"
  | "export-logistics"
  | "fabric-sourcing"
  | "fast-turnaround"
  | "factory-network"
  | "global-partner"
  | "knitwear"
  | "manufacturing"
  | "organic-recycled"
  | "packaging"
  | "pattern-development"
  | "private-label"
  | "quality-control"
  | "ready-to-wear"
  | "sampling"
  | "social-audit"
  | "testing-lab"
  | "timeline-planning"
  | "trims-accessories"
  | "underwear-loungewear"
  | "washing-finishing"
  | "woven-apparel";

type AssetIconProps = {
  name: AssetIconName;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: {
    wrapper: "h-11 w-11",
    image: 30,
    imageClass: "h-[30px] w-[30px]"
  },
  md: {
    wrapper: "h-14 w-14",
    image: 38,
    imageClass: "h-[38px] w-[38px]"
  },
  lg: {
    wrapper: "h-16 w-16",
    image: 46,
    imageClass: "h-[46px] w-[46px]"
  }
};

export function AssetIcon({ name, label = "", size = "md", className }: AssetIconProps) {
  const config = sizes[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-panel border border-denim-100 bg-denim-100/60",
        config.wrapper,
        className
      )}
      aria-hidden={label ? undefined : "true"}
    >
      <Image
        src={`/icons/allin-denim/${name}.png`}
        alt={label}
        width={config.image}
        height={config.image}
        unoptimized
        sizes={`${config.image}px`}
        className={cn("object-contain", config.imageClass)}
      />
    </span>
  );
}
