import { Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-navy-light text-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <p className="text-lg text-gray-300">
             With three years of experience as a Contract Lifecycle Management (CLM) consultant, I have honed my skills in implementing solutions, streamlining processes, and managing complex projects.
              My passion for problem-solving and working with data has inspired me to transition into the field of data engineering.
            I am eager to leverage my analytical mindset and technical expertise to design and build robust data pipelines, optimize workflows, and unlock insights from data.
              As I embark on this new career path, I bring a unique perspective from my CLM background, combining business acumen with a strong drive to deliver impactful data solutions.
            </p>
            <div className="flex items-center gap-4">
              <Award className="h-6 w-6 text-blue-400" />
              <span>3 Years of Experience</span>
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
