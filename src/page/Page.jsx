import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experiences";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
