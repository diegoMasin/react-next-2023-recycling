import Chars from '@/components/starwars/Chars';
import Films from '@/components/starwars/Films';
import Background from '@/components/starwars/background';
import useStarWars from '@/data/hooks/useStarWars';

export default function StarWarsPage() {
  const { chars, films, processing, selectChar, backToChars } = useStarWars();

  return (
    <div
      className={`
        flex flex-col gap-5 justify-center items-center h-screen relative
      `}
    >
      <Background />

      {processing ? (
        <div>Processing...</div>
      ) : films.length > 0 ? (
        <Films films={films} backToChars={backToChars} />
      ) : chars.length > 0 ? (
        <Chars chars={chars} select={selectChar} />
      ) : (
        <h1>Data not found!</h1>
      )}
    </div>
  );
}
