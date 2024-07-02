import { useRef } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value() === "") {
      alert("Please fill in the form");
      inputRef.current.focus();
    } else {
      console.log(inputRef.current.value());
    }
  };

  return (
    <main className="flex h-screen justify-center gap-3 flex-col items-center">
      <form>
        <Input ref={inputRef} />
        <button type="button" className="p-2 bg-gray-600" onClick={handleClick}>
          Click
        </button>
      </form>
    </main>
  );
}

export default App;
