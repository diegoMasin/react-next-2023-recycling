import Counter from "@/components/comunication/indirectly/Counter";

export default function IndirectlyPage() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10">Indirectly Comunication</h1>
      <div className="flex gap-5">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}
