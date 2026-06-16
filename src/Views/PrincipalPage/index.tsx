"use client";

import Carrousel from "../../Components/Carrousel";
import { viajes, GalleryData } from "../../data/viajes";
import TravelCard from "../../Components/TravelCard";
import Service from "../../Components/Services";
import Gallery from "../../Components/Gallery";

export default function PrincipalPage() {
  const hoy = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Santo_Domingo",
  });
  const fechaHoy = new Date(hoy);

  const parseDate = (str: string) => {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
  };
  return (
    <div className="fatherPrincipalPage">
      <div className="carrousel">
        <Carrousel />
      </div>
      <section className="services">
        <Service />
      </section>
      <section className="proximosViaje">
        <div className="tiltePv">
          <p>Proximos Viajes</p>
        </div>
        <div className="loadData">
          {viajes
            .filter((item) => parseDate(item.date) > fechaHoy)
            .map((item) => (
              <TravelCard key={item.id} item={item} />
            ))}
        </div>
      </section>
      <section className="experience">
        <div className="tiltePv">
          <p>Experiencias</p>
        </div>
        <div className="loadData">
          {viajes
            .filter((item) => parseDate(item.date) < fechaHoy)
            .map((item) => (
              <TravelCard key={item.id} item={item} />
            ))}
        </div>
      </section>
      <section className="sectionGallery">
        <Gallery media={GalleryData} />
      </section>
    </div>
  );
}
