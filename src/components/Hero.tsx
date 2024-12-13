import { User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-white p-4">
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Developer & Designer
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-blue-500 hover:bg-blue-600">
            <User className="mr-2 h-4 w-4" /> About Me
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;