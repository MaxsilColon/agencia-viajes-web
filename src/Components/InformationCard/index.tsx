type InformationCardProps = {
  label: string;
  text?: string;
};

export default function InformationCard({ label, text }: InformationCardProps) {
  return (
    <div className="card-info">
      <span className="label">{label ?? ""}:</span>
      <span className="text">{text ?? ""}</span>
    </div>
  );
}
