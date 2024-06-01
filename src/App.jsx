import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  return (
    <>
      <h1 className="text-5xl text-center">{count}</h1>
    </>
  );
}

export default App;
