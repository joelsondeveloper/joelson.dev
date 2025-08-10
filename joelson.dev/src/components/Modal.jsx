import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {

    const [show, setShow] = useState(isOpen)
    const [hideAnim, setHideAnim] = useState(false)


  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="absolute top-[2rem] bg-white rounded-lg p-6 max-w-md w-full shadow-lg"
        onClick={(e) => e.stopPropagation()} // impede fechar clicando dentro
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          aria-label="Fechar modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
