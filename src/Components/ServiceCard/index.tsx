import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-white/70 bg-white p-5 text-left shadow-lg shadow-ocean-900/10 transition hover:-translate-y-1 hover:shadow-tropical">
      {Icon ? (
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
          <Icon className="h-6 w-6" strokeWidth={2.4} />
        </span>
      ) : null}
      <h2 className="text-xl font-black text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-ink/65">{description}</p>
    </article>
  );
}
