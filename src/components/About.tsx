import { Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-navy-light text-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <p className="text-lg text-gray-300">
              I'm a passionate developer with a keen eye for design and a love for creating
              beautiful, functional web applications. With years of experience in both frontend
              and backend development, I bring ideas to life through code.
            </p>
            <div className="flex items-center gap-4">
              <Award className="h-6 w-6 text-blue-400" />
              <span>5+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <span>Continuous Learner</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;