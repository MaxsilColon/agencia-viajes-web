import "./styles.css";

export default function Menu({ handleMenu }) {
  return (
    <div onClick={handleMenu} className="fatherMenu">
      <div className="menu">
        <div className="listOptions">
          <ul>
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
