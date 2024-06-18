import { useEffect, useState } from "react";
import Options from "./Options";
function Quiz() {
  const api =
    "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      // setLoading(true);
      const response = await fetch(api);

      const result = await response.json();

      const quiz = result.results.map((item) => {
        return {
          question: item.question,
          options: [...item.incorrect_answers, item.correct_answer],
          answer: item.correct_answer,
        };
      });

      setLoading(false);
      setData(quiz);

      console.log(data);
    };

    fetchQuiz();
  }, []);

  const handleClick = (item, index) => {
    if (item === data[currentQuestion].answer) {
      setAnswer("bg-green-600 text-white");
      console.log(index);
    } else {
      setWrongAnswer("bg-red-600");
    }
    setTimeout(() => {
      setAnswer("");
      setCurrentQuestion((prev) => prev + 1);
    }, 2000);
  };

  return (
    <>
      {loading && <h1>loading...</h1>}
      {!loading && (
        <section className="border-[black] border-2 w-[50vw] h-[80vh] shadow-lg rounded-[30px]">
          <section className="h-[40%] flex justify-center items-center">
            <h1 className="text-3xl text-center">
              {data[currentQuestion].question}
            </h1>
          </section>

          {/* //options */}
          <section className="border-t-2 flex-wrap h-[60%] border-black flex justify-around items-center">
            {data[currentQuestion].options.map((item, index) => (
              <Options
                item={item}
                key={index}
                onClick={() => handleClick(item, index)}
                answer={
                  item === data[currentQuestion].answer ? answer : wrongAnswer
                }
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
}

export default Quiz;
