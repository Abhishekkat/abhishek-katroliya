import { useState, useEffect } from "react";
import { Menu, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <span className="text-white font-light text-2xl tracking-wider">AK.</span>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              Skills
            </button>
            <div className="flex items-center space-x-4 ml-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Skills
              </button>
              <div className="flex space-x-4 px-3 py-2">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;