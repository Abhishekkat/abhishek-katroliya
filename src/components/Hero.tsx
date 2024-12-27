import { User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-black text-white p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-400 to-pink-600 opacity-20 blur-3xl" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            Abhishek Katroliya
          </h1>
          <p className="text-xl md:text-2xl text-gray-400">
            Based in India
            <span className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </p>
          <div className="flex gap-4">
            <Button 
              className="bg-white text-black hover:bg-gray-200"
              onClick={scrollToAbout}
            >
              <User className="mr-2 h-4 w-4" /> About Me
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden relative mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-600" />
            <img
              src="https://photos.app.goo.gl/HbbQvEfHuJifG88GA"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
