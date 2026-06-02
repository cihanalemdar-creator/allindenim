import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  showIcon?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink-900 text-white shadow-line hover:bg-denim-800 focus-visible:outline-denim-600",
  secondary:
    "border border-stone-300 bg-white text-ink-900 hover:border-denim-700 hover:text-denim-800",
  ghost: "text-ink-900 hover:text-denim-700"
};

export function Button({
  href,
  children,
  variant = "primary",
  showIcon = true,
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-panel px-5 py-3 text-sm font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showIcon ? <ArrowRight aria-hidden="true" className="h-4 w-4" /> : null}
    </Link>
  );
}

export const CTAButton = Button;
