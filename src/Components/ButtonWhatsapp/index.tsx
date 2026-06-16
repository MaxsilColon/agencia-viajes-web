import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  specificTrip?: boolean;
  destination?: string;
  date?: string;
  className?: string;
};

export default function WhatsAppButton({
  specificTrip,
  destination,
  date,
  className,
}: WhatsAppButtonProps) {
  const message = specificTrip
    ? `Hola! Estoy interesado en el viaje a ${destination}, Fecha: ${date}`
    : "Hola, D' Liam TOURS! Estoy interesado/a en sus servicios.";

  return (
    <a
      href={`https://wa.me/18096946393?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-full bg-palm-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-palm-900/20 transition hover:-translate-y-0.5 hover:bg-palm-900"
      }
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      {specificTrip ? "Reservar este viaje" : "Contáctanos por WhatsApp"}
    </a>
  );
}
