import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ModalProject from "./ModalProject";

const Project = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article
        className="max-w-[25rem] rounded-lg overflow-hidden shadow-md hover-scale"
        onClick={() => setShowModal(true)}
      >
        <div className="img h-[12rem] w-full">
          <img src={data.image_url} alt="i" className="w-full h-full" />
        </div>
        <div className="content flex flex-col gap-4 px-6 pt-6">
          <div className="info flex flex-col gap-3">
            <h3 className="font-bold text-2xl color-azul">{data.title}</h3>
            <p className="text-lg color-cinza clamp-description">
              {data.description}
            </p>
          </div>
          <ul className="stack flex flex-wrap gap-2 items-center">
            {data.tags.slice(0, 3).map((tech) => (
              <li
                key={tech}
                className="px-4 py-2 bg-cinza rounded-md text-sm font-medium color-azul"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="actions flex gap-3 pb-6">
            <a
              href={data.live_url}
              target="_blank"
              className="btn-primary px-6 bg-azul text-white flex items-center"
            >
              Ver Online
            </a>
            <a
              href={data.github_url} target="_blank"
              className="btn-secondary px-4 py-3 color-cinza"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
      {showModal && <ModalProject setShowModal={setShowModal} data={data} />}
      {showModal && (<div onClick={() => {
        setShowModal(false)
      }} className="fixed inset-0 bg-black opacity-10 z-40"></div>)}
    </>
  );
};

export default Project;
