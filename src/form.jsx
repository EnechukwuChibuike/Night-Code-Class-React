import Button from "./Button";

function Form({ getValue }) {
  return (
    <form className="p-5 border-[1px] border-black">
      <input
        onChange={getValue}
        type="text"
        className="p-2 border-black border-[1px]"
      />
      <Button />
    </form>
  );
}

export default Form;
