"use client";

import { useRouter } from "next/navigation";

type MenuProps = {
  handleMenu: () => void;
};

export default function Menu({ handleMenu }: MenuProps) {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    handleMenu();
  };

  return (
    <div onClick={handleMenu} className="fatherMenu">
      <div className="menu" onClick={(event) => event.stopPropagation()}>
        <div className="listOptions">
          <ul>
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li>Galeria</li>
            <li>Experiencias</li>
            <li>Viajes</li>
            <li onClick={() => handleNavigation("/services")}>Servicios</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
