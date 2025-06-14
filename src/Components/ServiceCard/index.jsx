import './styles.css'
export default function ServiceCard({ title, description }) {
  return (
    <div className="serviceCard">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
