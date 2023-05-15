import GrandPa from "@/components/comunication/directly/GrandPa";

export default function DirectlyPage() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10">Directly Comunication</h1>
      <GrandPa name="Mariano" midleName="Silva" />
      <GrandPa name="Antônio" midleName="Miranda" />
    </div>
  );
}
