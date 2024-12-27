import { Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 bg-black text-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-fadeIn">
            <p className="text-lg text-gray-300 leading-relaxed">
              With three years of experience as a Contract Lifecycle Management (CLM) consultant, I have honed my skills in implementing solutions, streamlining processes, and managing complex projects.
              My passion for problem-solving and working with data has inspired me to transition into the field of data engineering.
              I am eager to leverage my analytical mindset and technical expertise to design and build robust data pipelines, optimize workflows, and unlock insights from data.
              As I embark on this new career path, I bring a unique perspective from my CLM background, combining business acumen with a strong drive to deliver impactful data solutions.
            </p>
            <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
              <Award className="h-6 w-6" />
              <span>3 Years of Experience</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors">
              <BookOpen className="h-6 w-6" />
              <span>Continuous Learner</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-violet-500 rounded-lg blur opacity-25"></div>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Workspace"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;