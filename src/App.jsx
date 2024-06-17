import "./App.css";
import Quiz from "./components/Quiz";
import quiz from "/quiz.jpeg";

function App() {
  return (
    <main className="flex h-screen">
      <section
        className={`w-[25vw] bg-[url('/quiz.jpeg')] bg-center h-screen bg-contain bg-no-repeat`}
      ></section>

      <section className="bg-[#01B2FC] h-screen flex justify-center items-center w-[75vw]">
        <Quiz />
      </section>
    </main>
  );
}

export default App;
