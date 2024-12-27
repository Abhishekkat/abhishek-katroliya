import { Laptop, Globe, Camera } from "lucide-react";

const skills = [
  {
    category: "Programming",
    items: ["JavaScript", "Python", "HTML/CSS"],
    icon: <Laptop className="h-6 w-6" />,
  },
  {
    category: "Database",
    items: ["SQL", "Snowflake"],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    category: "AWS Cloud Services",
    items: ["S3", "Glue", "Athena"],
    icon: <Camera className="h-6 w-6" />,
  },
];

const Skills = () => {
  return (
    <section className="py-32 bg-black text-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-blue-400">{skill.icon}</div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 hover:text-blue-400 transition-colors">
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