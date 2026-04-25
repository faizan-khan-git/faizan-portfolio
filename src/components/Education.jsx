import { education } from "../data/portfolio.js";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="sectionHeader">
        <p className="eyebrow">Education</p>
        <h2>Academic foundation</h2>
      </div>

      <article className="educationCard">
        <div>
          <h3>{education.institute}</h3>
          <p>{education.degree}</p>
        </div>
        <div className="metaBlock">
          <span>{education.timeline}</span>
          <span>{education.location}</span>
        </div>
      </article>
    </section>
  );
}
