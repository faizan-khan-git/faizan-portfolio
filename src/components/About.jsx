import { profile } from "../data/portfolio.js";

export default function About() {
  return (
    <section className="section splitSection" id="about">
      <div>
        <p className="eyebrow">Summary</p>
        <h2>Strong fundamentals, practical product experience, and a clear backend focus.</h2>
      </div>
      <div className="bodyCopy">
        <p>{profile.summary}</p>
        <p>
          My work so far has helped me move comfortably between backend APIs, database structures,
          responsive interfaces, AWS infrastructure, CI/CD, and AI document workflows.
        </p>
      </div>
    </section>
  );
}
