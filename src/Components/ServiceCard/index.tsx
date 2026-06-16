type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="serviceCard">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
