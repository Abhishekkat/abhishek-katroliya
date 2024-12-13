import { Laptop, Globe, Camera } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"],
    icon: <Laptop className="h-6 w-6" />,
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL"],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "UI/UX"],
    icon: <Camera className="h-6 w-6" />,
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-navy-light text-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-navy rounded-lg animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-400">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;