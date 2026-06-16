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
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-ocean-700">
            Momentos reales
          </p>
          <h2 className="mt-2 text-3xl font-black text-ink sm:text-4xl">
            Galeria de experiencias
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-ink/65">
          Fotos y videos de rutas, playas y escapadas con el estilo tropical de
          D&apos; Liam Tours.
        </p>
      </div>

      <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {media.map((item, index) =>
          item.type === "video" ? (
            <video
              key={index}
              src={getPublicAssetPath(item.src)}
              controls
              className="h-64 w-[20rem] flex-none snap-center rounded-[1.5rem] object-cover shadow-lg shadow-ocean-900/10 sm:w-[28rem]"
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
              width={300}
              height={200}
              className="h-64 w-[20rem] flex-none snap-center rounded-[1.5rem] object-cover shadow-lg shadow-ocean-900/10 sm:w-[28rem]"
            />
          )
        )}
      </div>
    </div>
  );
}
