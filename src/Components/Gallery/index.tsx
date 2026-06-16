"use client";

import Image from "next/image";
import { useRef } from "react";
import type { GalleryItem } from "../../data/viajes";
import { getPublicAssetPath } from "../../utils/assets";

type GalleryProps = {
  media?: GalleryItem[];
};

export default function Gallery({ media = [] }: GalleryProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
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
              src={getPublicAssetPath(item.src)}
              controls
              className="galleryItem"
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              onPlay={() => handlePlay(index)}
            />
          ) : (
            <Image
              key={index}
              src={getPublicAssetPath(item.src)}
              alt={`media-${index}`}
              className="galleryItem"
              width={300}
              height={200}
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
          )
        )}
      </div>
    </div>
  );
}
