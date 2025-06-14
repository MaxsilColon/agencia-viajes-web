import Button from "../Button";
import "./styles.css";
import { useNavigate } from "react-router";
export default function TravelCard({ item }) {
  const navigate = useNavigate();

  const handleNavigation = (path, item) => {
    navigate(path, { state: { objeto: item } });
  };

  return (
    <div className="travelCard">
      <div className="titleTravel">
        <span> {item.destination} </span>
      </div>
      <div className="imageTravel">
        <img src={item.mainImage} alt="" />
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
          onClick={() => handleNavigation("/travelDetails", item)}
          text="Ver mas detalles"
        />
      </div>
    </div>
  );
}
