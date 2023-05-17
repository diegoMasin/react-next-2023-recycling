import TeamTable from '@/components/lists/TeamTable';
import { IconBallFootball } from '@tabler/icons-react';

export default function basic() {
  const teamTable = [
    'Fluminense',
    'Vasco',
    'Botafogo',
    'Flamengo',
    'São Paulo',
    'Palmeiras',
    'Santos',
    'Corinthians',
    'Grêmio',
    'Internacional',
    'Atlético-MG',
  ];

  return (
    <div
      className={`
        flex flex-col justify-center items-center h-screen
      `}
    >
      <h1 className="flex items-center gap-2 text-5xl font-black">
        <IconBallFootball size={50} stroke={1} className="text-green-600" />
        Basic List
      </h1>
      <TeamTable teams={teamTable} />
    </div>
  );
}
