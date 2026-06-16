import TravelDetails from "@/Views/TravelDetails";
import { viajes } from "@/data/viajes";
import type { Metadata } from "next";

type TravelDetailsPageProps = {
  searchParams: Promise<{
    id?: string;
  }>;
};

export default async function TravelDetailsPage({
  searchParams,
}: TravelDetailsPageProps) {
  const { id } = await searchParams;

  return <TravelDetails tripId={id} />;
}

export async function generateMetadata({
  searchParams,
}: TravelDetailsPageProps): Promise<Metadata> {
  const { id } = await searchParams;
  const trip = viajes.find((item) => item.id === id);

  if (!trip) {
    return {
      title: "Viaje no encontrado",
    };
  }

  return {
    title: trip.destination,
    description: trip.description,
    openGraph: {
      title: `${trip.destination} | D' Liam Tours`,
      description: trip.description,
      images: [
        {
          url: trip.mainImage.startsWith("/") ? trip.mainImage : `/${trip.mainImage}`,
          alt: trip.destination,
        },
      ],
    },
  };
}
