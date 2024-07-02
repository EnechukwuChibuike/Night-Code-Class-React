import { useImperativeHandle, forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    value: () => {
      return inputRef.current.value;
    },
  }));

  return (
    <input
      type="text"
      className="border-[1px] border-gray-600 px-5"
      ref={inputRef}
    />
  );
});

export default Input;
