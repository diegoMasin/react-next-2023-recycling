import Counter from '@/components/hooks/Counter';

interface counterProps {}

export default function counter(props: counterProps) {
  return (
    <div
      className={`
        flex justify-center items-center h-screen
      `}
    >
      <Counter />
    </div>
  );
}
