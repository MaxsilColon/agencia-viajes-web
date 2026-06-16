"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";

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
    <div
      onClick={handleMenu}
      className="fixed inset-0 z-40 bg-ink/55 px-4 pt-24 backdrop-blur-sm lg:hidden"
    >
      <div
        className="ml-auto w-full max-w-sm rounded-[2rem] border border-white/70 bg-white p-4 shadow-tropical"
        onClick={(event) => event.stopPropagation()}
      >
        <nav className="grid gap-2" aria-label="Menu movil">
          {[
            ["Inicio", "/"],
            ["Servicios", "/services"],
            ["Viajes", "/#viajes"],
            ["Experiencias", "/#experiencias"],
            ["Galeria", "/#galeria"],
          ].map(([label, href]) => (
            <button
              key={href}
              type="button"
              onClick={() => handleNavigation(href)}
              className="rounded-2xl px-4 py-4 text-left text-base font-black text-ink transition hover:bg-ocean-50"
            >
              {label}
            </button>
          ))}
        </nav>
        <Link
          href="https://wa.me/18096946393?text=Hola,%20D'%20Liam%20TOURS!%20Quiero%20informacion%20sobre%20sus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-palm-700 px-5 py-4 text-base font-black text-white shadow-lg shadow-palm-900/20"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
          Contactar por WhatsApp
        </Link>
      </div>
    </div>
  );
}
