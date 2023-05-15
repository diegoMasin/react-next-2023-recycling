import RandomImage from "@/components/hooks/RandomImage";

export default function ImagesPage() {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
        gap-5
    `}
    >
      <RandomImage />
      <RandomImage />
      <RandomImage />
    </div>
  );
}
