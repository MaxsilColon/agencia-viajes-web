import { useEffect, useState } from "react";
import "./styles.css";
import { useLocation } from "react-router";
import InformationCard from "../../Components/InformationCard";

export default function TravelDetails() {
  const [travelDetails, setTravelDetails] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    if (state?.objeto) {
      setTravelDetails(state?.objeto);
    }
  }, [state?.objeto]);

  return (
    <div className="fatherTravelDetails">
      <div className="titleTravelDetails">
        <span>{travelDetails?.destination}</span>
      </div>

      <div className="loadMainInfo">
        <InformationCard
          label="Lugar de salida"
          text={travelDetails?.departurePlace}
        />
        <InformationCard label="Fecha" text={travelDetails?.date} />
        <InformationCard
          label="Hora de salida"
          text={travelDetails?.departureTime}
        />
        <InformationCard
          label="Hora de retorno"
          text={travelDetails?.returnTime}
        />
      </div>

      <section className="includesSection">
        <h2>¡Mira todo lo que incluye!</h2>
        <p>Todo esto es para ti. No te faltará nada.</p>
        <ul className="includesList">
          {travelDetails?.includes?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="imageAndPrice">
        <div className="mainImageContainer">
          <img src={travelDetails?.mainImage} alt="Destino" />
        </div>

        <div className="gallerySection">
          {travelDetails?.gallery?.map((img, index) => (
            <img key={index} src={img} alt={`Galería ${index + 1}`} />
          ))}
        </div>

        <div className="priceAndAction">
          <span className="price">RD$ {travelDetails?.price}</span>
          <a
            className="whatsappButton"
            href={`https://wa.me/18096946393?text=Hola! Estoy interesado en el viaje a ${travelDetails?.destination}, Fecha: ${travelDetails?.date}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
