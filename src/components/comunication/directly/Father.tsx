import Son from "./Son";

interface FatherProps {
  name: string;
  midleName: string;
}

export default function Father(props: FatherProps) {
  return (
    <div className="flex flex-col gap-5 bg-blue-500 text-white border border-white rounded-md p-5">
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">Father</span>
        <span>{props.name}</span>
        <span>{props.midleName}</span>
      </div>
      <div className="flex gap-5">
        <Son name="Julia" midleName={props.midleName} />
        <Son name="Amanda" midleName={props.midleName} />
        <Son name="Maria" midleName={props.midleName} />
      </div>
    </div>
  );
}
