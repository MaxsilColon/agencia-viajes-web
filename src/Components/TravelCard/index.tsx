"use client";

import Image from "next/image";
import Button from "../Button";
import { useRouter } from "next/navigation";
import type { Viaje } from "../../data/viajes";
import { getPublicAssetPath } from "../../utils/assets";

type TravelCardProps = {
  item: Viaje;
};

export default function TravelCard({ item }: TravelCardProps) {
  const router = useRouter();

  return (
    <div className="travelCard">
      <div className="titleTravel">
        <span> {item.destination} </span>
      </div>
      <div className="imageTravel">
        <Image
          src={getPublicAssetPath(item.mainImage)}
          alt={item.destination}
          fill
          sizes="350px"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="travelDescription">
        <span> {item.description} </span>
      </div>
      <div className="dateAndPrice">
        <span>Fecha: {item.date}</span>
        <span>Desde: ${item.price}</span>
      </div>
      <div className="button">
        <Button
          className="buttonComp"
          onClick={() => router.push(`/travelDetails?id=${item.id}`)}
          text="Ver mas detalles"
        />
      </div>
    </div>
  );
}
