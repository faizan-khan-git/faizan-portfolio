import { useState } from "react";
import { profile } from "../data/portfolio.js";

const navItems = ["About", "Education", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={isMenuOpen ? "navbar menuOpen" : "navbar"}>
      <a className="brand" href="#home" aria-label={`${profile.name} home`} onClick={closeMenu}>
        <span className="brandLogo">FK</span>
        <span className="brandText">
          <strong>{profile.name}</strong>
          <small>Portfolio</small>
        </span>
      </a>

      <button
        className="menuToggle"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="portfolio-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className="navLinks" id="portfolio-navigation" aria-label="Portfolio navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
            {item}
          </a>
        ))}
        <a className="navCv" href="/cv.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>
          CV
        </a>
      </nav>
    </header>
  );
}
