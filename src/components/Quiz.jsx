import { useEffect, useState } from "react";
import Options from "./Options";
function Quiz() {
  const api =
    "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(api);

      const result = await response.json();

      const quiz = result.results.map((item) => {
        return {
          question: item.question,
          options: [...item.incorrect_answers, item.correct_answer],
          answer: item.correct_answer,
        };
      });
      setData(quiz);

      console.log(data);
    };

    fetchQuiz();
  }, []);
  return (
    <section className="border-black border-2 w-[50vw] h-[80vh] shadow-lg rounded-[30px]">
      <section className="h-[40%] flex justify-center items-center">
        <h1 className="text-3xl">{data[0].question}</h1>
      </section>

      {/* //options */}
      <section className="border-t-2 flex-wrap h-[60%] border-black flex justify-around items-center">
        {data[0].options.map((item) => (
          <Options item={item} />
        ))}
      </section>
    </section>
  );
}

export default Quiz;
