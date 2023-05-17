interface TeamTableProps {
  teams: string[];
}

export default function TeamTable(props: TeamTableProps) {
  const itens = props.teams.map((team, i) => (
    <li
      key={team}
      className={`text-2xl list-decimal ${
        i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'
      }`}
    >
      {team}
    </li>
  ));

  return <ol>{itens}</ol>;
}
