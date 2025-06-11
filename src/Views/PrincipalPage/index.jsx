import Carrousel from "../../Components/Carrousel";
import "./index.css";
import { viajes } from "../../data/viajes";
import TravelCard from "../../Components/TravelCard";

export default function PrincipalPage() {
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
          {viajes.map((item, index) => (
            <TravelCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
