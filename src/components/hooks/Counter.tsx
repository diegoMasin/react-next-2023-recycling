import { useCallback, useEffect, useState } from 'react';

interface CounterProps {}

export default function Counter(props: CounterProps) {
  const [delta, setDelta] = useState(1);
  const [value, setValue] = useState(0);
  const [mult, setMult] = useState(0);

  const calcValueMult10 = useCallback((valor: number) => {
    return valor * 10;
  }, []);

  useEffect(() => {
    console.log('got in useEffect');
    const mult10 = calcValueMult10(value);
    setMult(mult10);
  }, [value, calcValueMult10]);

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-5xl">{value}</span>
      <span className="text-xl text-zinc-500">
        {value} * 10 = {mult}
      </span>
      <div className="flex gap-5">
        <button className="botao" onClick={() => setValue(value - delta)}>
          -{delta}
        </button>
        <button
          className="botao"
          onClick={() => setValue((currentValue) => currentValue + delta)}
          // The Best Way, because in another way, the value can be outdated
        >
          +{delta}
        </button>
        <input
          className="bg-zinc-900 px-2"
          type="number"
          value={delta}
          onChange={(e) => setDelta(+e.target.value)}
        />
      </div>
    </div>
  );
}
