import Image from "next/image";
import Link from "next/link";
import Carrousel from "../../Components/Carrousel";
import { viajes, GalleryData } from "../../data/viajes";
import TravelCard from "../../Components/TravelCard";
import Service from "../../Components/Services";
import Gallery from "../../Components/Gallery";
import WhatsAppButton from "../../Components/ButtonWhatsapp";
import { Clock, ShieldCheck, Star } from "lucide-react";

export default function PrincipalPage() {
  const hoy = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Santo_Domingo",
  });
  const fechaHoy = new Date(hoy);

  const parseDate = (str: string) => {
    const [day, month, year] = str.split("-");
    return new Date(`${year}-${month}-${day}`);
  };
  const upcomingTrips = viajes.filter((item) => parseDate(item.date) > fechaHoy);
  const pastTrips = viajes.filter((item) => parseDate(item.date) < fechaHoy);

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-gradient-to-b from-sun-100 via-ocean-50 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-sun-300/70 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ocean-900 shadow-sm">
              <Star className="h-4 w-4 fill-sun-300 text-sun-500" strokeWidth={2.5} />
              Transporte turistico privado
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-24 w-24 flex-none overflow-hidden rounded-full bg-white shadow-tropical ring-4 ring-white sm:h-28 sm:w-28">
                <Image
                  src="/logo-dliam-tours.png"
                  alt="Logo de D' Liam Tours"
                  fill
                  sizes="112px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-palm-700">
                  Republica Dominicana
                </p>
                <h1 className="mt-1 text-4xl font-black leading-[0.95] text-ink sm:text-6xl">
                  {"D' Liam Tours"}
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-ink/72">
              Excursiones, traslados y paseos privados para moverte comodo,
              seguro y con energia tropical por los destinos mas lindos del pais.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-palm-700 to-ocean-700 px-6 py-4 text-base font-black text-white shadow-lg shadow-ocean-900/20 transition hover:-translate-y-0.5" />
              <Link
                href="#viajes"
                className="inline-flex items-center justify-center rounded-full border border-ocean-200 bg-white px-6 py-4 text-base font-black text-ocean-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-ocean-50"
              >
                Ver viajes
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["Puntualidad", Clock],
                ["Seguridad", ShieldCheck],
                ["Buen trato", Star],
              ].map(([label, Icon]) => (
                <div
                  key={label as string}
                  className="rounded-2xl border border-white/70 bg-white/75 p-3 text-center shadow-sm"
                >
                  <Icon className="mx-auto h-6 w-6 text-ocean-700" strokeWidth={2.4} />
                  <p className="mt-2 text-xs font-black text-ink sm:text-sm">{label as string}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Carrousel />
          </div>
        </div>
      </section>

      <section id="servicios">
        <Service />
      </section>

      <section id="viajes" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-ocean-700">
              Salidas disponibles
            </p>
            <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">
              Proximos viajes
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-ink/65">
            Reserva tu cupo por WhatsApp y coordinamos los detalles de salida,
            horarios y recogida.
          </p>
        </div>

        {upcomingTrips.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {upcomingTrips.map((item) => (
              <TravelCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[2rem] border border-dashed border-ocean-300 bg-white/75 p-8 text-center shadow-sm">
            <h3 className="text-2xl font-black text-ink">
              Estamos preparando nuevas salidas
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-ink/65">
              Escribenos por WhatsApp y te avisamos cuando publiquemos el proximo
              viaje disponible.
            </p>
            <WhatsAppButton className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-palm-700 px-6 py-3 text-sm font-black text-white shadow-lg shadow-palm-900/20 transition hover:-translate-y-0.5" />
          </div>
        )}
      </section>

      <section
        id="experiencias"
        className="bg-gradient-to-b from-transparent via-ocean-50 to-transparent"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-ocean-700">
              Rutas realizadas
            </p>
            <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">
              Experiencias
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {pastTrips.map((item) => (
              <TravelCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="galeria">
        <Gallery media={GalleryData} />
      </section>
    </div>
  );
}
