import "./styles.css";

import { useRef } from "react";

export default function Gallery({ media = [] }) {
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video && !video.paused) {
        video.pause();
      }
    });
  };
  return (
    <div className="galleryContainer">
      <h2>Galeria de Momentos</h2>
      <div className="displayGallery">
        {media.map((item, index) =>
          item.type === "video" ? (
            <video
              key={index}
              src={item.src}
              controls
              className="galleryItem"
              ref={(el) => (videoRefs.current[index] = el)}
              onPlay={() => handlePlay(index)}
            />
          ) : (
            <img
              key={index}
              src={item.src}
              alt={`media-${index}`}
              className="galleryItem"
            />
          )
        )}
      </div>
    </div>
  );
}
