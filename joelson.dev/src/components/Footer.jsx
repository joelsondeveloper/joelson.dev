import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-azul-escuro flex flex-col gap-6 p-8">
      <div className="content flex items-center justify-between gap-6 flex-wrap">
        <div className="left">
          <h2 className="font-bold text-lg text-white">Joelson.dev</h2>
          <p className="text-sm color-cinza">
            Desenvolvedor Front-end apaixonado por criar experiências incríveis
          </p>
        </div>
        <div className="links flex items-center gap-6 flex-wrap color-cinza">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </div>
      </div>
      <div className="line h-[2px] bg-azul w-full rounded-lg opacity-20"></div>
      <div className="bottom flex items-center justify-between flex-wrap">
        <p className="text-sm color-cinza">
          © 2024 Joelson Dev. Todos os direitos reservados.
        </p>
        <ul className="flex color-cinza gap-7">
          <li>
            <a href="https://github.com/joelsondeveloper" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joelson-vicente-957589278/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_joelson._/" target="_blank">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
