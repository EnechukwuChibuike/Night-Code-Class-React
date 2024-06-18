function Options({ item, key, onClick, answer }) {
  return (
    <button
      className={`text-sm p-2 border-black border-[1px] rounded-3xl w-[40%] h-20 ${answer}`}
      key={key}
      onClick={onClick}
    >
      {item}
    </button>
  );
}

export default Options;
