import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  tags?: string[];
  ctaLabel?: string;
  className?: string;
};

export function CapabilityCard({ title, description, href, icon, className }: CardProps) {
  const content = (
    <article
      className={cn(
        "rounded-panel border border-stone-200 bg-white p-6 shadow-line transition-shadow hover:shadow-soft",
        className
      )}
    >
      {icon ? <div className="mb-5 text-denim-700">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export function ProductCategoryCard({
  title,
  description,
  href = "#",
  icon,
  tags,
  ctaLabel = "View category",
  className
}: CardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-panel border border-stone-200 bg-white p-6 shadow-line transition hover:-translate-y-0.5 hover:border-denim-700 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-denim-700",
        className
      )}
    >
      <div className="flex items-start justify-between gap-5">
        {icon ? <div className="text-denim-700">{icon}</div> : null}
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-stone-500 transition group-hover:text-denim-700"
        />
      </div>
      <h3 className="mt-7 text-xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
      {tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-denim-800">
        <span>{ctaLabel}</span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}

type TrustBadgeProps = {
  label: string;
  value?: string;
};

export function TrustBadge({ label, value }: TrustBadgeProps) {
  return (
    <div className="rounded-panel border border-stone-200 bg-white px-5 py-4 shadow-line">
      {value ? <p className="text-2xl font-semibold text-ink-900">{value}</p> : null}
      <p className="text-sm font-medium text-stone-600">{label}</p>
    </div>
  );
}
