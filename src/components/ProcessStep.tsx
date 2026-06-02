type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <article className="relative border-l border-stone-300 pl-8">
      <div className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-denim-800 text-[11px] font-bold text-white">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
    </article>
  );
}
