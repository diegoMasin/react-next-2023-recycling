interface FilmsProps {
  films: any[];
  backToChars: () => void;
}

export default function Films(props: FilmsProps) {
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <button className="botao" onClick={props.backToChars}>
        Back
      </button>
      <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-zinc-900">
            <th className="p-2 font-black">Title</th>
            <th className="p-2 font-black">Episode</th>
            <th className="p-2 font-black">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.films.map((film: any, indice: number) => (
            <tr
              key={film.title}
              className={`
            text-center
            ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
          `}
            >
              <td className="p-2">{film.title}</td>
              <td className="p-2">{film.episode_id}</td>
              <td className="p-2">
                {new Date(film.release_date).toLocaleDateString('pt-BR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
