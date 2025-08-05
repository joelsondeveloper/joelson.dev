import { FaGithub } from "react-icons/fa";

const Project = ({ id }) => {

    const project = 

  return (
    <article>
      <div className="img"></div>
      <div className="content">
        <div className="info">
          <h3></h3>
          <p></p>
        </div>
        <ul className="stack">

        </ul>
      </div>
      <div className="actions">
        <button>Ver Online</button>
        <button>
            <FaGithub />
            <span>GitHub</span>
        </button>
      </div>
    </article>
  );
};

export default Project;
