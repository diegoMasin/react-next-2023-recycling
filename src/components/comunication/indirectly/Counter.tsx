import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

export default function Counter() {
  const [num, setNum] = useState<number>(0);

  function increment(value: number) {
    setNum(num + value);
  }

  function decrement(value: number) {
    setNum(num - value);
  }

  return (
    <div
      className={`
        flex flex-col p-2 w-72 h-72
        border border-zinc-800 rounded-mlg
    `}
    >
      <Display value={num} />
      <Buttons inc={increment} dec={decrement} />
    </div>
  );
}
