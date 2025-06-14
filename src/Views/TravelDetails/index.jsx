import { useEffect, useState } from "react";
import "./styles.css";
import { useLocation } from "react-router";
import InformationCard from "../../Components/InformationCard";
import WhatsAppButton from "../../Components/ButtonWhatsapp";

export default function TravelDetails() {
  const [travelDetails, setTravelDetails] = useState({});
  const { state } = useLocation();
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (state?.objeto) {
      setTravelDetails(state?.objeto);
    }

    let array = [
      state?.objeto?.mainImage,
      ...(state?.objeto?.gallery?.flat() || []),
    ];
    setImage(array);
  }, [state?.objeto]);

  const handleImagePosition = (index) => {
    setImage((prevState) => {
      const newState = [...prevState];
      const temp = newState[0];
      newState[0] = newState[index];
      newState[index] = temp;
      return newState;
    });
  };

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
          <img src={image[0]} alt="Destino" />
        </div>

        <div className="gallerySection">
          {image?.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => handleImagePosition(index)}
              alt={`Galería ${index + 1}`}
            />
          ))}
        </div>

        <div className="priceAndAction">
          <span className="price">{travelDetails?.price}</span>
           <WhatsAppButton specificTrip={true} destination={travelDetails?.destination} date={travelDetails?.date}/>
        </div>
      </section>
    </div>
  );
}
