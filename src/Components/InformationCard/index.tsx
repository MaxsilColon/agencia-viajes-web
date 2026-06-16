type InformationCardProps = {
  label: string;
  text?: string;
};

export default function InformationCard({ label, text }: InformationCardProps) {
  return (
    <div className="rounded-2xl border border-ocean-100 bg-white/90 p-4 shadow-sm">
      <span className="block text-xs font-black uppercase tracking-[0.16em] text-ocean-700">
        {label ?? ""}
      </span>
      <span className="mt-2 block text-base font-black text-ink">{text ?? ""}</span>
    </div>
  );
}
