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
    <main className="bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certificate />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
        <p>Created by Abhishek Katroliya</p>
      </footer>
    </main>
  );
};

export default Index;