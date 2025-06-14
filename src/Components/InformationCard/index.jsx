import "./styles.css";

export default function InformationCard({ label, text }) {
  return (
    <div className="card-info">
      <span className="label">{label ?? ""}:</span>
      <span className="text">{text ?? ""}</span>
    </div>
  );
}
