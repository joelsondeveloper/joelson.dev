import { FaTimes, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import Stat from "./Stat";

const ModalProject = ({ setShowModal, data }) => {
  return (
    <article className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[37.5rem] max-h-[37.5rem]
    overflow-y-auto rounded-lg bg-white">
      <header className="px-6 pt-2 w-full flex justify-end items-center">
        <button
          className="min-w-[2.5rem] aspect-square bg-cinza rounded-full flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <FaTimes size="1.25rem" />
        </button>
      </header>
      <div className="content p-8 flex flex-col gap-8">
        <div className="title flex flex-col gap-2 items-center">
          <h2 className="font-bold text-2xl color-azul">{data.title}</h2>
          <div className="tags flex gap-1">
            {data.tags.map((tag, index, array) => (
              <div key={tag} className="flex gap-1 items-center">
                <span className="font-medium color-cinza">{tag}</span>
                {array[index + 1] && (
                  <span className="color-cinza">
                    <BsDot />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="video max-h-[20rem] rounded-lg overflow-hidden shadow-md">
          <video
            src={data.video_url}
            controls
            autoPlay
            className="w-full"
          ></video>
        </div>
        <div className="description flex flex-col gap-4">
          <h3 className="font-bold text-xl color-azul">Sobre o Projeto</h3>
          <p className="text-lg color-cinza">{data.description}</p>
        </div>
        <div className="stack flex flex-col gap-4">
          <h3 className="font-bold text-xl color-azul">
            Tecnologias Utilizadas
          </h3>
          <ul className="flex flex-wrap gap-3 items-center">
            {data.tags.map((tech) => (
              <li
                key={tech}
                className="px-4 py-2 bg-azul rounded-lg text-sm font-medium color-branco"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="stats flex flex-col gap-4">
          <h3 className="font-bold text-xl color-azul">
            Estatísticas do projeto
          </h3>
          <ul className="flex gap-6">
            {data.stats.map((stat) => (
              <li key={stat.text}>
                <Stat
                  text={stat.text}
                  number={stat.number}
                  symbol={stat.symbol}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="actions flex gap-3 pb-6">
          <a
            href={data.live_url}
            target="_blank"
            className="btn-primary px-6 bg-azul text-white flex items-center flex gap-2 items-center"
          >
            <FiExternalLink />
            <span>Ver Projeto</span>
          </a>
          <a
            href={data.github_url}
            target="_blank"
            className="btn-secondary px-4 py-3 color-cinza"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div className="additional flex justify-center color-cinza text-sm">
          <p>desenvolvido em {data.date}</p>
        </div>
      </div>
    </article>
  );
};

export default ModalProject;
