import Services from "@/Views/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Excursiones, traslados al aeropuerto, eventos y alquiler privado con D' Liam Tours.",
};

export default function ServicesPage() {
  return <Services />;
}
