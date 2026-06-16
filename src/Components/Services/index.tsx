"use client";

import Button from "../Button";
import { useRouter } from "next/navigation";

export default function Service() {
  const router = useRouter();

  return (
    <div className="fatherServices">
      <div className="titleName">
        <span className="text1">{"D' Liam ☀️😎"}</span>
        <span className="text2">TOURS</span>
      </div>

      <div className="eslogan">
        <span>¡Viaja con comodidad y seguridad!</span>
        <span className="subtitle">Transporte privado confiable para cada ocasión.</span>
      </div>

      <div className="serviceList">
        <div className="serviceItem">🚌 Excursiones privadas</div>
        <div className="serviceItem">✈️ Traslados al aeropuerto</div>
        <div className="serviceItem">👨‍👩‍👧‍👦 Paseos familiares</div>
        <div className="serviceItem">🎉 Eventos y celebraciones</div>
      </div>

      <Button
        onClick={() => router.push("/services")}
        className="viewMore"
        text="Ver todos los servicios"
      />
    </div>
  );
}
