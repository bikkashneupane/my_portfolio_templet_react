import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";
import ParticlesBg from "./components/ParticlesBg";
import DarkMode from "./components/DarkMode";
import { useEffect, useState } from "react";
import Projects from "./components/projects/Projects";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.toggle("dark", isDark);
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <Navigation />
      {!isDark && <ParticlesBg />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <DarkMode isDark={isDark} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default App;
