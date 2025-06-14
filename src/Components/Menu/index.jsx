import "./styles.css";
import { useNavigate } from "react-router";

export default function Menu({ handleMenu }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => navigate(path);
  return (
    <div onClick={handleMenu} className="fatherMenu">
      <div className="menu">
        <div className="listOptions">
          <ul>
            <li onClick={()=>handleNavigate("/")}>Home</li>
            <li>Galeria</li>
            <li>Experiencias</li>
            <li>Viajes</li>
            <li>Servicios</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
