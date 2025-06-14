import Button from "../Button";
import "./styles.css";
import { useNavigate } from "react-router";

export default function Service() {


      const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };


  return (
    <div className="fatherServices">
      <div className="titleName">
        <span className="text1">D' Liam ☀️😎</span>
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

      <Button onClick={()=> handleNavigation('/services')} className='viewMore' text='Ver todos los servicios'/>
    </div>
  );
}
