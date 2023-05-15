interface SonProps {
  name: string;
  midleName: string;
}

export default function Son(props: SonProps) {
  return (
    <div
      className={`
    flex justify-center items-center
    bg-green-500 text-white rounded-md p-5 border border-white
    `}
    >
      <div className="flex justify-center gap-2 text-2xl">
        <span className="font-black">Son</span>
        <span>{props.name}</span>
        <span>{props.midleName}</span>
      </div>
    </div>
  );
}
