import { Award, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section className="py-32 bg-black text-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-fadeIn">
            <p className="text-lg text-gray-300 leading-relaxed">
              Experienced Consultant with a proven track record of successfully delivering end-to-end solutions
 within the CLM platform. Skilled in implementing new enhancements, developing custom solution, and
 integrating with third-party solutions. Proficient in translating user stories into actionable software
 and comfortable in rapidly changing work environments. Possess strong interpersonal skills with the
 ability to mentor and motivate team members.
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
              src="/lovable-uploads/32ebcbe5-c200-4171-9805-9afde9eb2c2a.png"
              alt="Contract Lifecycle Management Diagram"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;