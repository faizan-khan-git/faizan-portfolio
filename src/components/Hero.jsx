import { profile } from "../data/portfolio.js";

const highlights = [
  { value: "2027", label: "Expected B.Tech CSE graduation" },
  { value: "FastAPI", label: "Backend APIs and scalable server logic" },
  { value: "GenAI", label: "RAG pipelines and local embeddings" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="heroContent">
        <p className="eyebrow">Computer Science Student | Backend Developer Intern</p>
        <h1>{profile.name}</h1>
        <p className="heroLead">{profile.headline}</p>
        <p className="heroSummary">{profile.summary}</p>

        <div className="heroActions">
          <a className="button buttonPrimary" href={`mailto:${profile.email}`}>
            Contact Me
          </a>
          <a className="button buttonGhost" href="/cv.pdf" target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>

        <div className="contactStrip" aria-label="Contact details">
          <span>{profile.phone}</span>
          <span>{profile.email}</span>
          <span>{profile.location}</span>
        </div>
      </div>

      <aside className="heroPanel" aria-label="Professional highlights">
        <div className="availabilityCard">
          <span className="statusDot" aria-hidden="true" />
          <p>Open to backend, full-stack, and AI engineering opportunities</p>
        </div>

        <div className="highlightGrid">
          {highlights.map((highlight) => (
            <div className="highlightCard" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
