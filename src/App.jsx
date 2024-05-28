import "./App.css";
import Button from "./Button";
import Form from "./form";

function App() {
  const changeText = () => {
    console.log("Clicked");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1 className="text-4xl text-blue-600">Hello world</h1>
      <Button click={changeText} />
      <Form getValue={handleChange} />
    </>
  );
}

export default App;
