import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
