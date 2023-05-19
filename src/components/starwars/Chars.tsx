interface CharsProps {
  chars: any[];
}

export default function Chars(props: CharsProps) {
  function renderChars() {
    return (
      <ul>
        {props.chars.map((char: any) => (
          <li key={char.name}>{char.name}</li>
        ))}
      </ul>
    );
  }

  return <div>{renderChars()}</div>;
}
