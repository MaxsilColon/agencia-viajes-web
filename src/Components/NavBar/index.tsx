"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Menu from "../Menu";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="nvbar">
      {menuIsOpen ? <Menu handleMenu={handleMenu} /> : null}
      <div className="logoAndName">
        <span>{"D' Liam Tours"}</span>
      </div>
      <button
        type="button"
        className="Menu"
        aria-label="Abrir menu"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <IoMdMenu />
      </button>
    </div>
  );
}
