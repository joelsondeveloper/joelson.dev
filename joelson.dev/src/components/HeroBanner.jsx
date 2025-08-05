import { FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Tech from "./Tech";

import React from "react";

const HeroBanner = () => {
  return (
    <main className="w-screen min-h-screen bg-home bg-cover bg-bottom">
      <section className="hero-content flex justify-between items-center px-8 py-16">
        <div className="hero-text flex flex-col gap-8 max-w-[40rem]">
          <div className="headlines flex flex-col gap-4">
            <p className="text-xl font-medium color-azul-escuro">Olá! Eu sou</p>
            <h2 className="text-[3rem] font-extrabold color-azul-escuro">
              Desenvolvedor Front-end
            </h2>
            <p className="text-[3rem] font-extrabold color-azul-escuro">
              apaixonado por criar
            </p>
            <p className="pb-2 w-fit text-[3rem] font-extrabold color-laranja border-b-2">
              experiências
            </p>
          </div>
          <p className="text-lg text-white">
            Especializado em React e JavaScript, transformo ideias em interfaces
            modernas e funcionais. Sempre em busca de novos desafios e
            aprendizados.
          </p>
          <div
            className="cta flex
            items-center gap-4"
          >
            <button className="btn-primary">Ver Projetos</button>
            <button className="btn-secondary">
              <FiExternalLink />
              <span>Conectar</span>
            </button>
          </div>
        </div>
        <div className="hero-image min-w-[25rem] flex flex-col gap-[1.5rem]">
          <div className="avatar bg-joelson w-[17.5rem] aspect-square rounded-full bg-cover bg-bottom"></div>
          <div className="tech-stack-preview flex gap-4 w-[17.5rem] justify-between text-white">
            <Tech svg={<FaReact />} color="bg-laranja" id="react" size="3rem" />
            <Tech
              svg={<SiTailwindcss />}
              color="bg-azul"
              id="tailwind"
              size="3rem"
            />
            <Tech svg={<FaNodeJs />} color="bg-verde" id="nodejs" size="3rem" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroBanner;
