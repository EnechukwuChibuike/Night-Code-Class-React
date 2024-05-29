import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(1);

  const handleClick = () => {
    setText((prev) => prev + 1);

    setTimeout(() => {
      setText((prev) => prev + 1);
    }, 2000);
    console.log(text);
  };

  return (
    <main className="h-screen flex justify-center flex-col gap-3 items-center">
      <h1 className="text-4xl">{text}</h1>
      <button onClick={handleClick} className="bg-slate-900 p-3 text-white">
        click
      </button>
    </main>
  );
}

export default App;
