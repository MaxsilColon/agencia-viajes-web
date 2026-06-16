"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPublicAssetPath } from "../../utils/assets";

const slides = [
  {
    src: "/caption.jpg",
    alt: "Excursion tropical con D' Liam Tours",
  },
  {
    src: "/republica-dominicana-praia-pedernales-bahia-de-las-aguilas-vista-da-torre.jpg",
    alt: "Bahia de las Aguilas",
  },
  {
    src: "/image.png",
    alt: "Destino turistico en Republica Dominicana",
  },
  {
    src: "/83239c0a-50e5-44c5-bbb2-bea8292543e4.webp",
    alt: "Paisaje de viaje tropical",
  },
];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative h-[24rem] overflow-hidden rounded-[2rem] bg-ocean-900 shadow-tropical sm:h-[32rem] lg:h-[36rem]">
      <Image
        src={getPublicAssetPath(currentSlide.src)}
        alt={currentSlide.alt}
        fill
        priority={currentIndex === 0}
        sizes="(max-width: 1024px) 100vw, 1200px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

      <button
        type="button"
        className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-ocean-900 shadow-lg transition hover:bg-white sm:left-5"
        onClick={goPrev}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.8} />
      </button>

      <button
        type="button"
        className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-ocean-900 shadow-lg transition hover:bg-white sm:right-5"
        onClick={goNext}
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.8} />
      </button>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-sun-300" : "w-2.5 bg-white/70"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
