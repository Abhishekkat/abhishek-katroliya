import { Briefcase, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Consultant",
      company: "Sequent Inc.",
      period: "2024/7 - Present",
      location: "Gurugram,india",
      description: "Implemented solutions, streamlined processes, and managed complex projects in contract lifecycle management.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Consultant",
      company: "Epitome Cloud Inc.",
      period: "2021/12 - 2024/7",
      location: "Hyderabad,india",
      description: "Configure CLM software platforms, including system setup, user permissions, data migration, and integration with other business systems (e.g., CRM, ERP).",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-32 bg-black text-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-blue-400">{exp.icon}</div>
                  <CardTitle className="text-white">{exp.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">{exp.company}</CardDescription>
                <CardDescription className="text-gray-400">{exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
