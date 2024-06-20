function Options({ item, key, onClick, answer, index, currentIndex }) {
  return (
    <button
      className={`text-sm p-2 border-black border-[1px] rounded-3xl w-[40%] h-20 
        ${answer && currentIndex === index && "bg-green-600 text-white"}
        ${!answer && currentIndex === index && "bg-red-600"}
        `}
      key={key}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: item }}
    ></button>
  );
}

export default Options;
