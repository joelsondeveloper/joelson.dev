import { FaHtml5, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const techs = [
  {
    id: "html",
    name: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500",
    descPro: "Linguagem de marcação usada para estruturar conteúdos na web.",
    descLeigo: "É o esqueleto de um site. Tudo começa com ele.",
    featuresPro: [
      {
        text: "Semântica avançada com tags como <article> e <section>",
        icon: "FaHtml5",
        color: "#E34F26",
      },
      {
        text: "Formulários com validação nativa",
        icon: "FaCheck",
        color: "#4CAF50",
      },
      {
        text: "Integração com APIs como Geolocalização e Web Storage",
        icon: "AiOutlineApi",
        color: "#2196F3",
      },
    ],
    featuresLeigo: [
      {
        text: "Define os títulos e textos do site",
        icon: "FaCode",
        color: "#9C27B0",
      },
      {
        text: "Cria botões e campos de formulário",
        icon: "FaShieldAlt",
        color: "#FFC107",
      },
      {
        text: "Ajuda a organizar onde cada coisa aparece na tela",
        icon: "FaMobileAlt",
        color: "#3F51B5",
      },
    ],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-400",
    descPro:
      "Framework de utilitários que permite estilizar componentes diretamente no HTML com classes CSS.",
    descLeigo:
      "Sistema que facilita mudar cor, tamanho, espaçamento... tudo com comandos prontos.",
    featuresPro: [
      {
        text: "Classes utilitárias como flex, grid, px-4, text-center",
        icon: "SiTailwindcss",
        color: "#38B2AC",
      },
      {
        text: "Customização via arquivo tailwind.config.js",
        icon: "FaBolt",
        color: "#FFC107",
      },
      {
        text: "Responsividade com breakpoints como md:, lg:",
        icon: "AiOutlineCloudDownload",
        color: "#03A9F4",
      },
    ],
    featuresLeigo: [
      {
        text: "Muda as cores e tamanhos sem precisar mexer em código complicado",
        icon: "SiTailwindcss",
        color: "#38B2AC",
      },
      {
        text: "Deixa o site bonito em celular e computador",
        icon: "FaMobileAlt",
        color: "#3F51B5",
      },
      {
        text: "Tem nomes simples tipo bg-blue ou text-xl",
        icon: "FaCheck",
        color: "#4CAF50",
      },
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    descPro:
      "Linguagem de programação que permite criar comportamentos dinâmicos em páginas web.",
    descLeigo:
      "É o que faz o site se mexer, responder cliques, animações, etc.",
    featuresPro: [
      {
        text: "Manipulação de DOM com métodos como querySelector",
        icon: "SiJavascript",
        color: "#F7DF1E",
      },
      {
        text: "Trabalha com APIs e requisições HTTP via fetch",
        icon: "AiOutlineApi",
        color: "#2196F3",
      },
      {
        text: "Suporte a programação assíncrona com Promises e async/await",
        icon: "FaSyncAlt",
        color: "#607D8B",
      },
    ],
    featuresLeigo: [
      {
        text: "Faz o site reagir quando você clica em algo",
        icon: "FaCode",
        color: "#9C27B0",
      },
      {
        text: "Permite criar animações e efeitos legais",
        icon: "FaBolt",
        color: "#FFC107",
      },
      {
        text: "Ajuda a buscar informações de outros lugares sem recarregar a página",
        icon: "FaDownload",
        color: "#795548",
      },
    ],
  },
  {
    id: "react",
    name: "React",
    icon: FaReact,
    color: "text-sky-400",
    descPro:
      "Biblioteca JavaScript para construir interfaces de usuário baseadas em componentes reutilizáveis.",
    descLeigo:
      "Ferramenta que ajuda a montar sites modernos como blocos de LEGO.",
    featuresPro: [
      {
        text: "Componentização e reuso de UI",
        icon: "FaReact",
        color: "#61DAFB",
      },
      {
        text: "Gerenciamento de estado com hooks (useState, useEffect)",
        icon: "FaBolt",
        color: "#FFC107",
      },
      {
        text: "Virtual DOM para renderização eficiente",
        icon: "FaSyncAlt",
        color: "#607D8B",
      },
    ],
    featuresLeigo: [
      {
        text: "Divide o site em pedacinhos reutilizáveis",
        icon: "FaReact",
        color: "#61DAFB",
      },
      {
        text: "Atualiza só o que precisa quando algo muda",
        icon: "FaSyncAlt",
        color: "#607D8B",
      },
      {
        text: "Ajuda a organizar o código e deixar tudo mais rápido",
        icon: "FaBolt",
        color: "#FFC107",
      },
    ],
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    descPro:
      "Framework React para aplicações web com renderização híbrida, rotas automáticas e performance otimizada.",
    descLeigo:
      "É o motor que deixa o site rápido e pronto pra aparecer no Google.",
    featuresPro: [
      {
        text: "SSR e SSG para renderização server/client",
        icon: "SiNextdotjs",
        color: "#000000",
      },
      {
        text: "Rotas baseadas em arquivos dentro da pasta /pages",
        icon: "AiOutlineProject",
        color: "#F44336",
      },
      {
        text: "API Routes para criar back-end dentro do projeto",
        icon: "FaServer",
        color: "#9E9E9E",
      },
    ],
    featuresLeigo: [
      {
        text: "Carrega as páginas mais rápido",
        icon: "FaBolt",
        color: "#FFC107",
      },
      {
        text: "Ajuda o site a aparecer no Google",
        icon: "FaShieldAlt",
        color: "#FFC107",
      },
      {
        text: "Permite criar partes do site que funcionam como 'mini servidores'",
        icon: "FaServer",
        color: "#9E9E9E",
      },
    ],
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    descPro:
      "Ambiente de execução do JavaScript no servidor, permitindo construir back-ends com JS.",
    descLeigo:
      "Permite usar JavaScript fora do navegador, tipo pra banco de dados e servidores.",
    featuresPro: [
      {
        text: "Execução de código JS no servidor",
        icon: "FaNodeJs",
        color: "#339933",
      },
      { text: "Uso de pacotes via npm", icon: "FaGitAlt", color: "#F05033" },
      {
        text: "Criação de servidores com frameworks como Express",
        icon: "FaServer",
        color: "#9E9E9E",
      },
    ],
    featuresLeigo: [
      {
        text: "Permite guardar dados de usuários em um banco",
        icon: "FaDatabase",
        color: "#00758F",
      },
      {
        text: "Faz o site funcionar mesmo quando o usuário fecha a página",
        icon: "FaSyncAlt",
        color: "#607D8B",
      },
      {
        text: "Ajuda a conectar o site com sistemas externos",
        icon: "SiApifox",
        color: "#2196F3",
      },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    descPro:
      "Superset do JavaScript que adiciona tipagem estática e recursos avançados para maior segurança no código.",
    descLeigo: "Versão do JavaScript mais organizada e à prova de erros.",
    featuresPro: [
      {
        text: "Tipos explícitos para variáveis, funções e objetos",
        icon: "SiTypescript",
        color: "#3178C6",
      },
      {
        text: "Integração com editores para autocomplete e validação",
        icon: "FaShieldAlt",
        color: "#FFC107",
      },
      {
        text: "Interfaces e Generics para código reutilizável",
        icon: "FaCode",
        color: "#9C27B0",
      },
    ],
    featuresLeigo: [
      {
        text: "Ajuda a evitar erros escrevendo o tipo de cada coisa",
        icon: "FaBug",
        color: "#E91E63",
      },
      {
        text: "Facilita saber o que uma função espera ou retorna",
        icon: "FaCheck",
        color: "#4CAF50",
      },
      {
        text: "Dá dicas enquanto você digita o código",
        icon: "FaBolt",
        color: "#FFC107",
      },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    color: "text-black",
    descPro:
      "Plataforma para hospedagem de código-fonte e controle de versão com Git.",
    descLeigo:
      "É onde os códigos ficam guardados, seguros e prontos pra compartilhar com o mundo.",
    featuresPro: [
      {
        text: "Repositórios para versionamento de projetos",
        icon: "FaGithub",
        color: "#181717",
      },
      {
        text: "Branches, pull requests e merge controlados",
        icon: "FaUsers",
        color: "#2196F3",
      },
      {
        text: "Integração com CI/CD e ações automatizadas",
        icon: "FaSyncAlt",
        color: "#607D8B",
      },
    ],
    featuresLeigo: [
      {
        text: "Serve pra guardar versões diferentes do código",
        icon: "FaGitAlt",
        color: "#F05033",
      },
      {
        text: "Ajuda a trabalhar em equipe sem bagunça",
        icon: "AiOutlineTeam",
        color: "#00BCD4",
      },
      {
        text: "Permite mostrar seu trabalho pra outras pessoas",
        icon: "FaDownload",
        color: "#795548",
      },
    ],
  },
];

export default techs;
