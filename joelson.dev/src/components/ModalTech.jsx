import techs from "@/app/data/techs.js";

import {
  FaHtml5,
  FaCheck,
  FaCode,
  FaShieldAlt,
  FaMobileAlt,
  FaBolt,
  FaProjectDiagram,
  FaServer,
  FaBug,
  FaUsers,
  FaDownload,
  FaSyncAlt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaUser,
  FaUserTie,
  FaTimes,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiGithub,
  SiApifox,
  SiWebauthn,
} from "react-icons/si";

import {
  AiOutlineApi,
  AiOutlineCloudDownload,
  AiOutlineProject,
  AiOutlineLock,
  AiOutlineTeam,
  AiOutlineRight,
} from "react-icons/ai";

import { useState, useEffect } from "react";

const ModalTech = ({ techId, closeModal }) => {
  const techInfo = techs.find((tech) => tech.id === techId);

  const [expert, setExpert] = useState(() => {
    const expertUndefined = localStorage.getItem("modoExpert")

    if(expertUndefined === null) {
      return false
    }

    return JSON.parse(expertUndefined)
  });

  const icons = {
    FaHtml5,
    FaCheck,
    FaCode,
    FaShieldAlt,
    FaMobileAlt,
    FaBolt,
    FaProjectDiagram,
    FaServer,
    FaBug,
    FaUsers,
    FaDownload,
    FaSyncAlt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaUser,
    FaUserTie,
    FaTimes,
    FaDatabase,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiGithub,
    SiApifox,
    SiWebauthn,
    AiOutlineApi,
    AiOutlineCloudDownload,
    AiOutlineProject,
    AiOutlineLock,
    AiOutlineTeam,
  };

  function TechIcon({ iconName }) {
    const Icon = icons[iconName];

    if (!Icon) return null;

    return <Icon size=".75rem" />;
  }

  useEffect(() => {
    localStorage.setItem("modoExpert", JSON.stringify(expert))
  }, [expert])

  return (
    <article className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] aspect-[4/5] rounded-2xl overflow-hidden z-[1] perspective-1000">
      <div className="relative w-full h-full shadow-[0_20px_50px_black] ">
        <div
          className={`front bg-azul-escuro w-full h-full p-6 text-white flex flex-col gap-8 backface-hidden absolute inset-0 transition-flip ${
            !expert && "rotate-y-180"
          }`}
        >
          <header className="flex justify-end">
            <button
              onClick={() => closeModal()}
              className="w-8 aspect-square rounded-full border-2 flex items-center justify-center color-marinho"
            >
              <FaTimes size="1rem" />
            </button>
          </header>
          <div className="content flex flex-col gap-6 items-center my-[3rem]">
            <div className="icon w-[5rem] aspect-square flex items-center justify-center gradient-azul-roxo rounded-full">
              <FaUserTie size="2.5rem" className="" />
            </div>
            <div className="text flex flex-col gap-4">
              <h2 className="text-center font-bold text-3xl">
                {techInfo.name}
              </h2>
              <p className="font-medium color-cinza text-center">
                {techInfo.descPro}
              </p>
            </div>
            <ul className="features flex flex-col gap-3">
              {techInfo.featuresPro.map((feature) => (
                <li key={feature.icon} className="flex items-center gap-3">
                  <div
                    className={`icon w-5 aspect-square rounded-full flex items-center justify-center`}
                    style={{ backgroundColor: feature.color }}
                  >
                    <TechIcon iconName={feature.icon} />
                  </div>
                  <p className="font-medium text-sm color-branco">
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <footer className="">
            <button
              className="mx-auto flex items-center h-[3rem] px-4 gradient-azul-roxo rounded-3xl gap-2"
              onClick={() => setExpert(false)}
            >
              <span>mude para o modo Leigo</span>
              <AiOutlineRight />
            </button>
          </footer>
        </div>
        <div
          className={`back bg-white p-6 text-black flex flex-col gap-8 backface-hidden absolute inset-0 transition-flip  ${
            expert && "rotate-y-180"
          }`}
        >
          <header className="flex justify-end">
            <button
              onClick={() => closeModal()}
              className="w-8 aspect-square rounded-full border-2 flex items-center justify-center text-black"
            >
              <FaTimes size="1rem" />
            </button>
          </header>
          <div className="content flex flex-col gap-6 items-center my-[3rem]">
            <div className="icon w-[5rem] aspect-square flex items-center justify-center gradient-azul-roxo rounded-full">
              <FaUser size="2.5rem" className="" />
            </div>
            <div className="text flex flex-col gap-4">
              <h2 className="text-center font-bold text-3xl">
                {techInfo.name}
              </h2>
              <p className="font-medium color-cinza text-center">
                {techInfo.descLeigo}
              </p>
            </div>
            <ul className="features flex flex-col gap-3">
              {techInfo.featuresLeigo.map((feature) => (
                <li key={feature.icon} className="flex items-center gap-3">
                  <div
                    className={`icon w-5 aspect-square rounded-full flex items-center justify-center`}
                    style={{ backgroundColor: feature.color }}
                  >
                    <TechIcon iconName={feature.icon} />
                  </div>
                  <p className="font-medium text-sm text-black">
                    {feature.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <footer className="">
            <button
              className="mx-auto flex items-center h-[3rem] px-4 gradient-azul-roxo rounded-3xl gap-2"
              onClick={() => setExpert(true)}
            >
              <span>mude para o modo Profissional</span>
              <AiOutlineRight />
            </button>
          </footer>
        </div>
      </div>
    </article>
  );
};

export default ModalTech;
