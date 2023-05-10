export default function Box(props: any) {
  return (
    <div
      className={`
        flex items-center justify-center
        bg-purple-500 p-2 rounded-md 
        w-64 h-64 text-5xl font-thin
    `}
    >
      {props.children}
    </div>
  );
}
