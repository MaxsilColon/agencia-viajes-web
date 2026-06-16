"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import Menu from "../Menu";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/services" },
  { label: "Viajes", href: "/#viajes" },
  { label: "Experiencias", href: "/#experiencias" },
  { label: "Galeria", href: "/#galeria" },
];

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => setMenuIsOpen((current) => !current);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 shadow-sm shadow-ocean-900/5 backdrop-blur-xl">
      {menuIsOpen ? <Menu handleMenu={handleMenu} /> : null}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="D' Liam Tours">
          <span className="relative h-14 w-14 overflow-hidden rounded-full bg-sand shadow-md ring-2 ring-sun-300 sm:h-16 sm:w-16">
            <Image
              src="/logo-dliam-tours.png"
              alt="D' Liam Tours"
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black text-ink sm:text-lg">
              {"D' Liam Tours"}
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-ocean-700">
              Travel & transport
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-ink/75 transition hover:bg-ocean-50 hover:text-ocean-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="https://wa.me/18096946393?text=Hola,%20D'%20Liam%20TOURS!%20Quiero%20informacion%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-palm-700 to-ocean-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-ocean-900/15 transition hover:-translate-y-0.5 hover:shadow-xl sm:inline-flex"
          >
            Cotizar viaje
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ocean-100 bg-white text-2xl text-ocean-900 shadow-sm transition hover:bg-ocean-50 lg:hidden"
            aria-label={menuIsOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuIsOpen}
            onClick={handleMenu}
          >
            {menuIsOpen ? (
              <X className="h-6 w-6" strokeWidth={2.6} />
            ) : (
              <MenuIcon className="h-6 w-6" strokeWidth={2.6} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
