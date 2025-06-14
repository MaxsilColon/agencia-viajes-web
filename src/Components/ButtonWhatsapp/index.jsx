import "./styles.css";

export default function WhatsAppButton({ specificTrip, destination, date }) {
  return (
    <a
      href={
        specificTrip
          ? `https://wa.me/18096946393?text=Hola! Estoy interesado en el viaje a ${destination}, Fecha: ${date}`
          : "https://wa.me/18096946393?text=Hola, D' Liam TOURS! Estoy interesado/a en sus servicios."
      }
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappButton"
    >
      {specificTrip ? "Reservar este viaje" : "Contáctanos por WhatsApp"}
    </a>
  );
}
