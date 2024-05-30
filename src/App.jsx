import { useState } from "react";
import "./App.css";
import Mode from "./Mode";

function App() {
  const [text, setText] = useState(true);

  const handleClick = () => {
    setText(!text);
  };

  return (
    <>
      <main className="h-screen flex justify-center flex-col gap-3 items-center">
        {/* {text ? (
        <h1 className="text-4xl">Hi</h1>
      ) : (
        <h1 className="text-4xl">Hello</h1>
      )} */}

        {text && <h1 className="text-4xl">Hi</h1>}
        {!text && <h1 className="text-4xl">Hello</h1>}
        <button
          className="bg-slate-900 text-white p-2 rounded-md"
          onClick={handleClick}
        >
          ToggleText
        </button>
      </main>
      <Mode />
    </>
  );
}

export default App;
