import { experiences } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="sectionHeader">
        <p className="eyebrow">Experience</p>
        <h2>Internship work</h2>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timelineItem" key={`${experience.company}-${experience.timeline}`}>
            <div className="timelineMeta">
              <span>{experience.timeline}</span>
              <span>{experience.location}</span>
            </div>
            <div className="timelineCard">
              <p className="company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
