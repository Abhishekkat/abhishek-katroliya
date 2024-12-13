import { Briefcase, Building2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "CLM Consultant",
      company: "Sequent Inc.",
      period: "2024/7 - Present",
      location: "Gurugram,india",
      description: "Implemented solutions, streamlined processes, and managed complex projects in contract lifecycle management.",
      icon: <Briefcase className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Consultant",
      company: "Epitome Cloud Inc.",
      period: "2021/12 - 2024/7",
      location: "Hyderabad,india",
      description: "Actively pursuing data engineering skills through courses, projects, and hands-on learning.",
      icon: <GraduationCap className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Full Stack Developer",
      company: "TECH I.S",
      period: "2018 - 2021",
      location: "Bengaluru,india",
      description: "Built foundational skills in Front End and Backend.",
      icon: <Building2 className="h-6 w-6 text-blue-400" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {exp.icon}
                  <CardTitle>{exp.title}</CardTitle>
                </div>
                <CardDescription>{exp.company}</CardDescription>
                <CardDescription>{exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
