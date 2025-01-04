import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const projects = [
  {
    title: "AWS ETL Pipeline",
    description: " ",
    image: "/lovable-uploads/3b8b814b-1459-4289-9ea6-431e212be3e9.png",
    link: "https://github.com/Abhishekkat/Spotify_ETL_Pipline"
  },
  {
    title: "Multiple Counterparty Process",
    description: "Successfully implemented the New Counterparty Process, reducing onboarding time by 50% and 
enhancing compliance with regulatory requirements",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
  },
  {
    title: "Contract Intake",
    description: "Successfully implemented the contract request management system, improving transparency, 
efficiency, and control over the contract initiation process",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-32 bg-black" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Button 
                  className="w-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20 transition-colors"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Globe className="mr-2 h-4 w-4" /> View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
