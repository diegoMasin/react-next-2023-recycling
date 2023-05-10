interface CircleProps {
  text: string;
  notCircle?: boolean;
}

export default function Box(props: CircleProps) {
  return (
    <div
      className={`
        flex justify-center items-center
        h-32 w-32 bg-blue-600
        text-black font-black text-2xl
        ${props.notCircle ? "rounded-2xl" : "rounded-full"}
    `}
    >
      {props.text}
    </div>
  );
}
