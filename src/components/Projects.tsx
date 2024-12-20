import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const projects = [
  {
    title: "AWS ETL Pipeline",
    description: "Built a sophisticated ETL pipeline using AWS services to process Spotify API data, featuring Lambda functions, S3 storage, and Athena for analytics",
    image: "/lovable-uploads/3b8b814b-1459-4289-9ea6-431e212be3e9.png",
    link: "https://github.com/Abhishekkat/Spotify_ETL_Pipline"
  },
  {
    title: "Project 2",
    description: "Mobile-first e-commerce platform with modern UI/UX",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#",
  },
  {
    title: "Project 3",
    description: "Real-time dashboard with data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-navy text-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-navy-light rounded-lg overflow-hidden shadow-xl animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain bg-white p-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
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
