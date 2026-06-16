import TravelDetails from "@/Views/TravelDetails";

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
