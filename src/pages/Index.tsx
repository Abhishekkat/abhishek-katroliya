import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificate from "@/components/Certificate";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="bg-navy">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certificate />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;