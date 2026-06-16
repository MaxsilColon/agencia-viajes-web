import WhatsAppButton from "../../Components/ButtonWhatsapp";
import ServiceCard from "../../Components/ServiceCard";
import {
  BusFront,
  CalendarDays,
  CarFront,
  Map,
  Plane,
  UsersRound,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: BusFront,
      title: "Excursiones",
      description:
        "Viajes organizados a destinos turisticos. Ideal para grupos, familias y amigos.",
    },
    {
      icon: Plane,
      title: "Traslados al aeropuerto",
      description:
        "Recogida y traslado desde/hacia el aeropuerto con puntualidad y comodidad.",
    },
    {
      icon: UsersRound,
      title: "Paseos familiares",
      description: "Salidas especiales para disfrutar en familia con rutas seguras.",
    },
    {
      icon: CalendarDays,
      title: "Eventos",
      description:
        "Transporte para bodas, cumpleaños, retiros, conferencias y actividades privadas.",
    },
    {
      icon: CarFront,
      title: "Alquiler privado",
      description:
        "Alquila una guagua para un viaje personalizado con tu grupo y tu horario.",
    },
  ];

  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink text-white shadow-tropical">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sun-300">
              Servicios
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Movemos tu viaje con comodidad, seguridad y estilo tropical.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              En <strong>{"D' Liam TOURS"}</strong> ofrecemos transporte privado
              para excursiones, traslados, familias y eventos. Tu grupo viaja
              tranquilo; nosotros nos encargamos del camino.
            </p>
            <div className="mt-7">
              <WhatsAppButton className="inline-flex items-center justify-center gap-2 rounded-full bg-sun-300 px-6 py-4 text-base font-black text-ink shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-sun-100" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-end">
            {[
              [CarFront, "Transporte privado"],
              [Plane, "Aeropuerto"],
              [UsersRound, "Grupos"],
              [Map, "Rutas turisticas"],
              [CalendarDays, "Eventos"],
            ].map(([Icon, label]) => (
              <div
                key={label as string}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <Icon className="text-2xl text-sun-300" />
                <p className="mt-3 text-sm font-black">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
