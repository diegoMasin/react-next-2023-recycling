import Image from 'next/image';
import { useState } from 'react';

export default function RandomImage() {
  const [pesquisa, setPesquisa] = useState<string>('abstract');
  const [tamanho, setTamanho] = useState<number>(300);
  const url = 'https://source.unsplash.com/featured/';

  function renderButton(valor: string) {
    return (
      <button
        className={`
            bg-blue-500 px-4 py-2 rounded-md
      `}
        onClick={() => {
          setPesquisa(valor);
        }}
      >
        {valor}
      </button>
    );
  }

  return (
    <div
      className={`flex flex-col gap-3 border border-zinc-500 p-7 rounded-md`}
    >
      <div className={`flex justify-center gap-7 mb-5`}>
        <span>{pesquisa}</span>
        <span>
          {tamanho}x{tamanho}
        </span>
      </div>
      <Image
        src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
        height={300}
        width={300}
        alt="image"
        className="rounded-md"
      />
      <div className={`flex justify-between gap-5`}>
        {renderButton('abstract')}
        {renderButton('city')}
        {renderButton('person')}
      </div>
      <div>
        <input
          type="number"
          value={tamanho}
          className={`bg-zinc-800 p-2 rounded-md outline-none`}
          onChange={(e) => {
            setTamanho(+e.target.value);
          }}
        />
      </div>
    </div>
  );
}
