import { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return {
        name: action.editedName,
        age: state.age,
      };
    case "changeAge":
      return {
        name: state.name,
        age: state.age + 1,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { name: "Ada", age: 20 });

  const [editName, setEditName] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEditName = () => {
    setEditName(true);
  };

  const handleChangeName = () => {
    dispatch({ type: "changeName", editedName: inputValue });
    setEditName(false);
  };

  const handleChangeAge = () => {
    dispatch({ type: "changeAge" });
  };
  return (
    <main className="flex h-screen justify-center gap-3 flex-col items-center">
      <h1 className="text-4xl">{state.name}</h1>
      <h1 className="text-4xl">{state.age}</h1>

      {editName && (
        <form>
          <input
            type="text"
            className="p-2 border-2"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="button"
            className="p-2 bg-blue-600 text-white"
            onClick={handleChangeName}
          >
            change
          </button>
        </form>
      )}

      <section className="flex gap-3">
        <button onClick={handleEditName} className="p-3 bg-blue-600 text-white">
          Change Name
        </button>
        <button
          onClick={handleChangeAge}
          className="p-3 bg-blue-600 text-white"
        >
          Change Age
        </button>
      </section>
    </main>
  );
}

export default App;
