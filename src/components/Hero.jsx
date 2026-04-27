import { profile } from "../data/portfolio.js";

const highlights = [
  { value: "2027", label: "Expected B.Tech CSE graduation" },
  { value: "FastAPI", label: "Backend APIs and scalable server logic" },
  { value: "GenAI", label: "RAG pipelines and local embeddings" },
];

const focusAreas = ["Backend APIs", "Cloud Systems", "GenAI + RAG"];

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

      <aside className="heroVisual" aria-label="Professional snapshot">
        <div className="identityCard depthCard">
          <div className="identityTop">
            <span className="statusPill">
              <span className="statusDot" aria-hidden="true" />
              Open to opportunities
            </span>
            <span className="identityMark">FK</span>
          </div>

          <div className="portraitFrame" aria-hidden="true">
            <span>FK</span>
          </div>

          <div className="identityCopy">
            <p>Open to backend, full-stack, and AI engineering opportunities</p>
            <div className="focusStack">
              {focusAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="consoleCard depthCard" aria-label="Engineering focus">
          <div className="windowDots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <code>const focus = ["FastAPI", "React", "RAG"];</code>
          <code>deploy(target: "reliable systems");</code>
          <code>optimize(data + user experience);</code>
        </div>

        <div className="highlightGrid">
          {highlights.map((highlight) => (
            <div className="highlightCard depthCard" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
