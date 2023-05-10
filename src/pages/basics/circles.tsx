import Circle from "@/components/basics/Circle";

export default function BoxPage() {
  return (
    <div className="flex justify-between items-center h-screen">
      <Circle text="circle #1" />
      <Circle text="circle #2" notCircle />
      <Circle text="circle #3" />
    </div>
  );
}
