import { profile } from "../data/portfolio.js";

export default function Contact() {
  return (
    <footer className="contactSection" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Ready to contribute to a strong engineering team.</h2>
        <p>
          Reach out for backend, full-stack, cloud, or AI application roles where practical execution
          and strong fundamentals matter.
        </p>
      </div>

      <div className="contactActions">
        <a className="button buttonPrimary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="button buttonGhost" href={`tel:${profile.phone.replaceAll("-", "")}`}>
          {profile.phone}
        </a>
        <a className="button buttonGhost" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="button buttonGhost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
