import { useEffect, useState } from "react";
import Options from "./Options";
function Quiz() {
  const api =
    "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState(undefined);
  const [currentIndex, setCurrentIndex] = useState(undefined);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchQuiz = async () => {
      // setLoading(true);
      const response = await fetch(api);

      const result = await response.json();
      const quiz = result.results.map((item) => {
        return {
          question: item.question,
          options: shuffle([...item.incorrect_answers, item.correct_answer]),
          answer: item.correct_answer,
        };
      });

      setLoading(false);
      setData(quiz);

      console.log(quiz[currentQuestion].options);
      console.log(quiz[currentQuestion].answer);
    };

    fetchQuiz();
  }, []);

  const handleClick = (item, index) => {
    setCurrentIndex(index);

    if (item === data[currentQuestion].answer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }

    setTimeout(() => {
      setAnswer(undefined);
      setCurrentIndex(undefined);
      setCurrentQuestion((prev) => prev + 1);
    }, 2000);
  };

  return (
    <>
      {loading && <h1>loading...</h1>}
      {!loading && (
        <section className="border-[black] border-2 w-[50vw] h-[80vh] shadow-lg rounded-[30px]">
          <section className="h-[40%] flex justify-center items-center">
            <h1
              className="text-3xl text-center"
              dangerouslySetInnerHTML={{
                __html: data[currentQuestion].question,
              }}
            ></h1>
          </section>

          {/* //options */}
          <section className="border-t-2 flex-wrap h-[60%] border-black flex justify-around items-center">
            {data[currentQuestion].options.map((item, index) => (
              <Options
                item={item}
                key={index}
                onClick={() => handleClick(item, index)}
                answer={answer}
                currentIndex={currentIndex}
                index={index}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
}

export default Quiz;
