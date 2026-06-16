import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import type { Viaje } from "../../data/viajes";
import { getPublicAssetPath } from "../../utils/assets";

type TravelCardProps = {
  item: Viaje;
};

export default function TravelCard({ item }: TravelCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-lg shadow-ocean-900/10 transition hover:-translate-y-1 hover:shadow-tropical">
      <div className="relative h-56 overflow-hidden bg-ocean-100">
        <Image
          src={getPublicAssetPath(item.mainImage)}
          alt={item.destination}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-palm-700 shadow-sm">
          {item.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-ink">{item.destination}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-ink/65">
          {item.description}
        </p>

        <div className="mt-5 grid gap-3 text-sm font-bold text-ink/75">
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-ocean-600" strokeWidth={2.4} />
            {item.date}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-ocean-600" strokeWidth={2.4} />
            Sale desde {item.departurePlace}
          </span>
          <span className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-sun-600" strokeWidth={2.4} />
            Desde {item.price}
          </span>
        </div>

        <Link
          href={`/travelDetails?id=${item.id}`}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-ocean-700 to-palm-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-ocean-900/15 transition hover:-translate-y-0.5"
        >
          Ver mas detalles
        </Link>
      </div>
    </article>
  );
}
