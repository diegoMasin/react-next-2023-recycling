import { IconCheck } from '@tabler/icons-react';

interface CharsProps {
  chars: any[];
  select: (char: any) => void;
}

export default function Chars(props: CharsProps) {
  return (
    <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-zinc-900">
          <th className="p-2 font-black">Name</th>
          <th className="p-2 font-black">Height</th>
          <th className="p-2 font-black">Weight</th>
          <th className="p-2 font-black">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.chars.map((char: any, indice: number) => (
          <tr
            key={char.name}
            className={`
            text-center
            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
          `}
          >
            <td className="p-2">{char.name}</td>
            <td className="p-2">{char.height}</td>
            <td className="p-2">{char.mass}</td>
            <td className="p-2">
              <button className="botao" onClick={() => props.select(char)}>
                <IconCheck size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
