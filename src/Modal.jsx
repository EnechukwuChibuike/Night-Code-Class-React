import { useImperativeHandle, forwardRef, useState } from "react";

const Modal = forwardRef((props, ref) => {
  const [toggleModal, setToggleModal] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setToggleModal(true),
  }));

  if (!toggleModal) {
    return null;
  }

  return (
    <section className="w-full h-screen fixed bg-black/70 flex justify-center items-center">
      <section className="w-1/3 h-1/2 bg-white p-10 space-y-3">
        <h1 className="text-4xl">This is a modal</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          facilis id nostrum expedita eum fuga quos velit modi ex quibusdam
          tempore, sunt amet rerum dolorem mollitia? Sed provident et quisquam.
        </p>

        <button
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => setToggleModal(false)}
        >
          Close Modal
        </button>
      </section>
    </section>
  );
});

export default Modal;
