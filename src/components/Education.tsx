import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      field: "Computer Science",
      institution: "APJ Abdul Kalam Technical University",
      period: "2019 - 2021",
      description: "Focused on computer science fundamentals, data structures, and algorithms",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Bachelor of Computer Application",
      field: "Computer Science",
      institution: "Bundelkhand University",
      period: "2016 - 2019",
      description: "Focused on computer science fundamentals, data structures, and algorithms",
      icon: <GraduationCap className="h-6 w-6" />
    },
    
  ];

  return (
    <section className="py-32 bg-black text-white" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">Education</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-blue-400">{edu.icon}</div>
                  <CardTitle className="text-white">{edu.degree}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">{edu.field}</CardDescription>
                <CardDescription className="text-gray-400">{edu.institution}</CardDescription>
                <CardDescription className="text-gray-400">{edu.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
