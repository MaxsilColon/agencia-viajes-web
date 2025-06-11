import Carrousel from "../../Components/Carrousel";
import "./index.css";
import { viajes } from "../../data/viajes";
import TravelCard from "../../Components/TravelCard";

export default function PrincipalPage() {
const hoy = new Date().toLocaleDateString("en-CA", {
  timeZone: "America/Santo_Domingo",
});
const fechaHoy = new Date(hoy);

  const parseDate = (str) => {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
  };
  return (
    <div className="fatherPrincipalPage">
      <div className="carrousel">
        <Carrousel />
      </div>
      <section className="proximosViaje">
        <div className="tiltePv">
          <p>Proximos Viajes</p>
        </div>
        <div className="loadData">
          {viajes.map((item, index) => {
           const fechaViaje = parseDate(item.date);
            if (fechaViaje > fechaHoy) {
              return <TravelCard key={index} item={item} />;
            }
          })}
        </div>
      </section>
      <section className="experience">
        <div className="tiltePv">
          <p>Experiencias</p>
        </div>
        <div className="loadData">
          {viajes.map((item, index) => {
            const fechaViaje = parseDate(item.date);
            if (fechaViaje < fechaHoy) {
              return <TravelCard key={index} item={item} />;
            }
          })}
        </div>
      </section>
    </div>
  );
}
