function Button({ text, bg, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`w-20 p-3 rounded-md ${bg} border-none`}
    >
      {text}
    </button>
  );
}

export default Button;
