"use client";

import Link from "next/link";
import { BusFront, CalendarDays, Plane, UsersRound } from "lucide-react";

export default function Service() {
  const services = [
    {
      icon: BusFront,
      title: "Excursiones privadas",
      text: "Rutas para grupos con transporte comodo y coordinacion completa.",
    },
    {
      icon: Plane,
      title: "Traslados al aeropuerto",
      text: "Recogidas puntuales para que tu viaje empiece sin corredera.",
    },
    {
      icon: UsersRound,
      title: "Paseos familiares",
      text: "Salidas seguras para disfrutar con tu gente de principio a fin.",
    },
    {
      icon: CalendarDays,
      title: "Eventos y celebraciones",
      text: "Transporte para bodas, retiros, conferencias y actividades.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-ocean-700">
          Viaja con comodidad y seguridad
        </p>
        <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
          Transporte privado para cada plan
        </h2>
        <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg">
          Coordinamos tu experiencia desde Santo Domingo hacia playas, montanas,
          eventos y traslados especiales con trato cercano y rutas confiables.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 shadow-lg shadow-ocean-900/5 transition hover:-translate-y-1 hover:shadow-tropical"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sun-300 to-ocean-500 text-2xl text-white shadow-md">
                <Icon className="h-6 w-6" strokeWidth={2.4} />
              </span>
              <h3 className="mt-4 text-lg font-black text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{service.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-black text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-ocean-900"
        >
          Ver todos los servicios
        </Link>
      </div>
    </div>
  );
}
