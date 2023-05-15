import Question from './Question';

interface FaqProps {}

export default function Faq(props: FaqProps) {
  return (
    <div
      className={`
        flex flex-col gap-2 w-[90%] md:w-3/4
      `}
    >
      <Question
        text="What is Lorem Ipsum?"
        awswer="scrambled it to make a type specimen book. It has survived not only five centuries, but also the"
      />
      <Question
        text="How much this?"
        awswer="content of a page when looking at i"
      />
      <Question
        text="Where does it come from?"
        awswer="it look like readable English. Many desktop publishing packages and web page editors now use Lo"
      />
      <Question
        text="Who is Lorem Ipsum?"
        awswer="anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet"
      />
    </div>
  );
}
