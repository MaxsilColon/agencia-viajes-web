"use client";

import { useState } from "react";
import InformationCard from "../../Components/InformationCard";
import WhatsAppButton from "../../Components/ButtonWhatsapp";
import { viajes } from "../../data/viajes";
import Image from "next/image";
import { getPublicAssetPath } from "../../utils/assets";

type TravelDetailsProps = {
  tripId?: string;
};

export default function TravelDetails({ tripId }: TravelDetailsProps) {
  const travelDetails = viajes.find((item) => item.id === tripId);
  const [image, setImage] = useState<string[]>(
    travelDetails ? [travelDetails.mainImage, ...travelDetails.gallery] : []
  );

  const handleImagePosition = (index: number) => {
    setImage((prevState) => {
      const newState = [...prevState];
      const temp = newState[0];
      newState[0] = newState[index];
      newState[index] = temp;
      return newState;
    });
  };

  if (!travelDetails) {
    return (
      <div className="fatherTravelDetails">
        <div className="titleTravelDetails">
          <span>Viaje no encontrado</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fatherTravelDetails">
      <div className="titleTravelDetails">
        <span>{travelDetails.destination}</span>
      </div>

      <div className="loadMainInfo">
        <InformationCard
          label="Lugar de salida"
          text={travelDetails.departurePlace}
        />
        <InformationCard label="Fecha" text={travelDetails.date} />
        <InformationCard
          label="Hora de salida"
          text={travelDetails.departureTime}
        />
        <InformationCard
          label="Hora de retorno"
          text={travelDetails.returnTime}
        />
      </div>

      <section className="includesSection">
        <h2>¡Mira todo lo que incluye!</h2>
        <p>Todo esto es para ti. No te faltará nada.</p>
        <ul className="includesList">
          {travelDetails.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="imageAndPrice">
        <div className="mainImageContainer">
          <Image
            src={getPublicAssetPath(image[0])}
            alt={travelDetails.destination}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="gallerySection">
          {image.map((img, index) => (
            <Image
              key={index}
              src={getPublicAssetPath(img)}
              onClick={() => handleImagePosition(index)}
              alt={`Galería ${index + 1}`}
              width={150}
              height={100}
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
            />
          ))}
        </div>

        <div className="priceAndAction">
          <span className="price">{travelDetails.price}</span>
          <WhatsAppButton
            specificTrip={true}
            destination={travelDetails.destination}
            date={travelDetails.date}
          />
        </div>
      </section>
    </div>
  );
}
