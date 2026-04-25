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
          <article className={index === 0 ? "projectCard featuredProject" : "projectCard"} key={project.title}>
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
