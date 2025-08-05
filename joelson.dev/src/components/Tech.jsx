"use client";
import { useState } from "react";
import ModalTech from "./ModalTech";

const Tech = ({ svg, color, id, size }) => {
  const [isModal, setIsModal] = useState(false);

  console.log(size)

  return (
    <>
      <li
        className={`tech-icon bg-white ${color} cursor-pointer`}
        style={{ width: size }}
        onClick={() => setIsModal(true)}
      >
        {svg}
      </li>
      {isModal && <ModalTech techId={id} closeModal={() => setIsModal(false)}/>}
      {isModal && (<div onClick={() => {
        setIsModal(false)
      }} className="fixed inset-0 bg-black opacity-10"></div>)}
    </>
  );
};

export default Tech;
