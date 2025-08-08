import React from "react";
import Stat from "./Stat";

import Tech from "./Tech";
import techs from "@/app/data/techs";

const About = () => {
  return (
    <section
      id="about"
      className="about min-h-screen w-screen px-8 py-16 bg-cinza flex flex-col gap-9"
    >
      <header className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-4xl color-azul">Sobre Mim</h2>
        <p className="tex-lg color-cinza">
          Conheça um pouco da minha jornada e paixão pelo desenvolvimento
        </p>
      </header>
      <div className="about-content flex justify-between">
        <div className="about-text max-w-[37.5rem] flex flex-col gap-6 color-azul-black">
          <p>
            Sou um desenvolvedor front-end júnior com foco em criar experiências
            digitais incríveis. Minha jornada começou com curiosidade sobre como
            os sites funcionam, e hoje trabalho com as mais modernas tecnologias
            do mercado.
          </p>
          <p>
            Atualmente, estou focado em aprimorar minhas habilidades em React e
            explorando o ecossistema JavaScript. Adoro resolver problemas
            complexos e transformar designs em código limpo e eficiente.
          </p>
          <div className="stats flex gap-8">
            <Stat text="Projetos" number={7} symbol="+" />
            <Stat text="Anos Estudando" number={2} symbol="+" />
            <Stat text="Dedicação" number={100} symbol="%" />
          </div>
        </div>
        <div className="tech-icons max-w-[25rem] flex flex-col gap-6">
          <h3 className="font-semibold text-sm">Tecnologias que domino</h3>
          <ul className="flex flex-wrap gap-6">
            {/* <Tech
              svg={<FaHtml5 size="2rem" />}
              color="text-orange-500"
              id="html"
              size="5rem"
            /> */}
            {techs.map((tech) => (
              <Tech
              key={tech.id}
              svg={<tech.icon size="2rem" />}
              color={tech.color}
              id={tech.id}
              size="5rem"
            />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
