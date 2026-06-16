import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 flex-none overflow-hidden rounded-full bg-white">
            <Image
              src="/logo-dliam-tours.png"
              alt="D' Liam Tours"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-black">{"D' Liam Tours"}</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              Excursiones, traslados y transporte privado con sabor tropical,
              puntualidad y trato cercano.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="https://wa.me/18096946393?text=Hola,%20D'%20Liam%20TOURS!%20Quiero%20informacion%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-palm-700 px-5 py-3 text-sm font-black text-white transition hover:bg-palm-500"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            WhatsApp
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
            Republica Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
}
