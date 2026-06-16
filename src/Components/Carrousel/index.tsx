"use client";

import Image from "next/image";
import { useState } from "react";
import { getPublicAssetPath } from "../../utils/assets";

const images = [
  "/caption.jpg",
  "/republica-dominicana-praia-pedernales-bahia-de-las-aguilas-vista-da-torre.jpg",
  "/image.png",
  "/83239c0a-50e5-44c5-bbb2-bea8292543e4.webp",
  "/Lake-Van-WEB-scaled.jpeg",
];

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel-container">
      <button className="nav-button left" onClick={goPrev}>
        ‹
      </button>

      <Image
        src={getPublicAssetPath(images[currentIndex])}
        alt={`Imagen ${currentIndex + 1}`}
        className="carrousel-image"
        fill
        priority={currentIndex === 0}
        sizes="(max-width: 600px) 100vw, 600px"
      />

      <button className="nav-button right" onClick={goNext}>
        ›
      </button>
    </div>
  );
}
