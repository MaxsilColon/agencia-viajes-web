"use client";

import { useState } from "react";
import InformationCard from "../../Components/InformationCard";
import WhatsAppButton from "../../Components/ButtonWhatsapp";
import { viajes } from "../../data/viajes";
import Image from "next/image";
import { getPublicAssetPath } from "../../utils/assets";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ImageIcon,
  Info,
} from "lucide-react";

type TravelDetailsProps = {
  tripId?: string;
};

export default function TravelDetails({ tripId }: TravelDetailsProps) {
  const travelDetails = viajes.find((item) => item.id === tripId);
  const [image, setImage] = useState<string[]>(
    travelDetails ? [travelDetails.mainImage, ...travelDetails.gallery] : []
  );

  const handleImagePosition = (index: number) => {
    setImage((prevState) => {
      const newState = [...prevState];
      const temp = newState[0];
      newState[0] = newState[index];
      newState[index] = temp;
      return newState;
    });
  };

  if (!travelDetails) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
        <Info className="h-12 w-12 text-ocean-700" strokeWidth={2.4} />
        <h1 className="mt-4 text-3xl font-black text-ink">Viaje no encontrado</h1>
        <p className="mt-3 text-ink/65">
          El viaje que intentas abrir no esta disponible en este momento.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-ocean-900/15"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#experiencias"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ocean-900 shadow-sm transition hover:bg-ocean-50"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Volver
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section className="overflow-hidden rounded-[2rem] bg-white shadow-tropical">
            <div className="relative h-[22rem] bg-ocean-100 sm:h-[30rem]">
              <Image
                src={getPublicAssetPath(image[0])}
                alt={travelDetails.destination}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="rounded-full bg-sun-300 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink">
                  {travelDetails.category}
                </span>
                <h1 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
                  {travelDetails.destination}
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/82 sm:text-base">
                  {travelDetails.description}
                </p>
              </div>
            </div>

            <div className="flex gap-3 overflow-x-auto p-4 [scrollbar-width:thin]">
              {image.map((img, index) => (
                <button
                  key={`${img}-${index}`}
                  type="button"
                  onClick={() => handleImagePosition(index)}
                  className="relative h-24 w-36 flex-none overflow-hidden rounded-2xl border-2 border-white bg-ocean-100 shadow-sm transition hover:border-sun-300"
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <Image
                    src={getPublicAssetPath(img)}
                    alt={`Galeria ${index + 1}`}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </section>

          <aside className="grid gap-5 lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-tropical">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-ocean-700">
                Informacion del viaje
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <InformationCard
                  label="Salida"
                  text={travelDetails.departurePlace}
                />
                <InformationCard label="Fecha" text={travelDetails.date} />
                <InformationCard
                  label="Hora salida"
                  text={travelDetails.departureTime}
                />
                <InformationCard
                  label="Retorno"
                  text={travelDetails.returnTime}
                />
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-gradient-to-br from-sun-100 to-ocean-50 p-5">
                <span className="text-sm font-bold text-ink/65">Desde</span>
                <p className="text-4xl font-black text-ink">{travelDetails.price}</p>
                <WhatsAppButton
                  specificTrip={true}
                  destination={travelDetails.destination}
                  date={travelDetails.date}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-palm-700 to-ocean-700 px-5 py-4 text-base font-black text-white shadow-lg shadow-ocean-900/20 transition hover:-translate-y-0.5"
                />
              </div>
            </div>

            <section className="rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-lg shadow-ocean-900/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-palm-50 text-2xl text-palm-700">
                  <CheckCircle2 className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <div>
                  <h2 className="text-xl font-black text-ink">
                    Todo esto incluye
                  </h2>
                  <p className="text-sm text-ink/60">
                    Para que no te falte nada en la ruta.
                  </p>
                </div>
              </div>

              <ul className="mt-5 grid gap-3">
                {travelDetails.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-ocean-50 px-4 py-3 text-sm font-bold text-ink"
                  >
                    <CheckCircle2
                      className="h-4 w-4 flex-none text-palm-700"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="rounded-[1.5rem] border border-ocean-100 bg-white/70 p-4 text-sm leading-6 text-ink/65">
              <ImageIcon className="mb-2 h-6 w-6 text-ocean-700" strokeWidth={2.4} />
              Toca cualquier miniatura para cambiar la imagen principal del viaje.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
