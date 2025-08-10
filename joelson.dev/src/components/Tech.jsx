"use client";
import { useState } from "react";
import ModalTech from "./ModalTech";

const Tech = ({ svg, color, id, size, modal = true, title, description }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <li className="flex items-center gap-4">
      {modal === true && (
        <div
          className={`tech-icon bg-white ${color} cursor-pointer`}
          style={{ width: size }}
          onClick={() => setIsModal(true)}
        >
          {svg}
        </div>
      )}
      {modal !== true && modal !== false && (
        <a
          className={`tech-icon bg-white ${color} cursor-pointer`}
          style={{ width: size }}
          href={modal}
        >
          {svg}
        </a>
      )}
      {modal === false && (
        <div
          className={`tech-icon bg-white ${color} cursor-pointer`}
          style={{ width: size }}
        >
          {svg}
        </div>
      )}
      {title && description && (
        <div className="details">
          <h4 className="font-medium color-azul-escuro">{title}</h4>
          <p className="text-sm color-cinza">{description}</p>
        </div>
      )}
      {modal === true && isModal && (
        <ModalTech techId={id} closeModal={() => setIsModal(false)} />
      )}
      {modal === true && isModal && (
        <div
          onClick={() => {
            setIsModal(false);
          }}
          className="fixed inset-0 bg-black opacity-10 z-40"
        ></div>
      )}
    </li>
  );
};

export default Tech;
