import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ data }) => {
  return (
    <div className="projectCard">
      {data.map((item, i) => (
        <div
          key={i}
          className="project"
          style={{ backgroundColor: item.color, borderColor: item.border }}
        >
          {/* HEADER ROW */}
          <div className="project-header">
            <h2 className="project-title">{item.title}</h2>

            <div className="project-links">
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </a>
              )}
              {item.git && (
                <a href={item.git} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          <ul className="project-desc">
            {item.description.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>

          {/* TECH STACK */}
          <div className="project-tech">
            {item.tech.map((tech, k) => (
              <img key={k} src={tech.badge} alt={tech.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
