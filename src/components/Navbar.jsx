import { profile } from "../data/portfolio.js";

const navItems = ["About", "Education", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label={`${profile.name} home`}>
        <span className="brandLogo">FK</span>
        <span>{profile.name}</span>
      </a>

      <nav className="navLinks" aria-label="Portfolio navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
