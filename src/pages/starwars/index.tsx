import Chars from '@/components/starwars/Chars';
import Background from '@/components/starwars/background';
import useStarWars from '@/data/hooks/useStarWars';

export default function StarWarsPage() {
  const { chars, processing, getChars } = useStarWars();

  return (
    <div
      className={`
        flex flex-col gap-5 justify-center items-center h-screen
      `}
    >
      <Background />
      <button onClick={getChars} className="bg-blue-500 p-2">
        Get
      </button>

      {processing ? (
        <div>Processing...</div>
      ) : chars.length > 0 ? (
        <Chars chars={chars} />
      ) : (
        <h1>Chars not found!</h1>
      )}
    </div>
  );
}
