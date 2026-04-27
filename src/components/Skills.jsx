import { skillGroups } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section className="section skillsSection" id="skills">
      <div className="sectionHeader">
        <p className="eyebrow">Technical Skills</p>
        <h2>Technologies from the CV</h2>
      </div>

      <div className="skillsGrid">
        {skillGroups.map((group) => (
          <article className="skillCard depthCard" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
