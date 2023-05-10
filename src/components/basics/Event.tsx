export default function Event() {
  let contador = 0;

  function incrementar() {
    console.log(contador++);
  }

  return (
    <button
      className={`
        h-72 w-72 bg-green-600 text-4xl
        flex justify-center items-center
    `}
      onClick={incrementar}
    >
      Event
    </button>
  );
}
