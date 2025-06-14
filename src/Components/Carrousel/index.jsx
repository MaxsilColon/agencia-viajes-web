import { useState } from "react";
import "./styles.css";

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

      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="carrousel-image"
      />

      <button className="nav-button right" onClick={goNext}>
        ›
      </button>
    </div>
  );
}
