import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <section className="section projectsSection" id="projects">
      <div className="sectionHeader">
        <p className="eyebrow">Projects</p>
        <h2>Selected builds</h2>
      </div>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <article
            className={index === 0 ? "projectCard featuredProject depthCard" : "projectCard depthCard"}
            key={project.title}
          >
            <div className="projectTop">
              <span>Project 0{index + 1}</span>
            </div>
            <p className="stack">{project.stack}</p>
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
