import Father from "./Father";

interface GrandPaProps {
  name: string;
  midleName: string;
}

export default function GrandPa(props: GrandPaProps) {
  return (
    <div
      className={`
        flex flex-col gap-5 p-5 rounded-md
        bg-purple-500 text-white border border-white
    `}
    >
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">GrandPa</span>
        <span>{props.name}</span>
        <span>{props.midleName}</span>
      </div>
      <div className="flex gap-5">
        <Father name="João" midleName={props.midleName} />
        <Father name="Pedro" midleName={props.midleName} />
        <Father name="Mateus" midleName={props.midleName} />
      </div>
    </div>
  );
}
