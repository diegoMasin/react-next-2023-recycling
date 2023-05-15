import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useState } from 'react';

interface QuestionProps {
  text: string;
  awswer: string;
}

export default function Question(props: QuestionProps) {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div
      className={`
        border border-zinc-600 rounded-md overflow-hidden
      `}
    >
      <div
        className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between"
        onClick={() => setOpened(!opened)}
      >
        <span>{props.text}</span>
        {opened ? <IconChevronDown /> : <IconChevronUp />}
      </div>
      {opened && <div className="p-5">{props.awswer}</div>}
    </div>
  );
}
