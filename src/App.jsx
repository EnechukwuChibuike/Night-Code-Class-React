import { useRef } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const modalRef = useRef();

  const handleModal = () => {
    modalRef.current.openModal();
  };
  return (
    <main className="flex h-screen justify-center gap-3 flex-col items-center">
      <h1 className="text-4xl">Use Imperative</h1>
      <button
        className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white"
        onClick={handleModal}
      >
        Open Modal
      </button>
      <Modal ref={modalRef} />
    </main>
  );
}

export default App;
