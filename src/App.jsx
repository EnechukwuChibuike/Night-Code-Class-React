import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputText = useRef();

  useEffect(() => {
    inputText.current.focus();
  }, []);

  const handleClick = () => {
    console.log(inputText.current.value);

    inputText.current.value = "";
  };
  return (
    <main className="flex h-screen justify-center gap-3 flex-col items-center">
      <form>
        <input
          type="text"
          ref={inputText}
          className="border-[1px] border-gray-600 px-5"
        />

        <button type="button" className="p-2 bg-gray-600" onClick={handleClick}>
          Click
        </button>
      </form>
    </main>
  );
}

export default App;
