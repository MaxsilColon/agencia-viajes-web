import "./styles.css";
import WhatsAppButton from "../../Components/ButtonWhatsapp";
import ServiceCard from "../../Components/ServiceCard";

export default function Services() {
  return (
    <div className="servicesPage">
      <h1 className="servicesTitle">Nuestros Servicios</h1>
      <p className="servicesIntro">
        En <strong>D' Liam TOURS</strong> ofrecemos transporte privado con
        comodidad, puntualidad y seguridad. Estos son algunos de los servicios
        que brindamos:
      </p>

      <div className="servicesList">
        <ServiceCard
          title="🚐 Excursiones"
          description="Viajes organizados a destinos turísticos. Ideal para grupos, familias y amigos."
        />
        <ServiceCard
          title="✈️ Traslados al aeropuerto"
          description="Recogida y traslado desde/hacia el aeropuerto con total puntualidad."
        />
        <ServiceCard
          title="👨‍👩‍👧‍👦 Paseos familiares"
          description="Salidas especiales para disfrutar en familia, con rutas seguras."
        />
        <ServiceCard
          title="🎉 Eventos"
          description="Ofrecemos transporte para bodas, cumpleaños, retiros, conferencias y más."
        />
        <ServiceCard
          title="🛻 Alquiler privado"
          description="¿Necesitas una guagua para un viaje personalizado? ¡La puedes alquilar con nosotros!"
        />
      </div>
      <div className="contactWhatsApp">
        <WhatsAppButton />
      </div>
    </div>
  );
}
