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
      icon: <GraduationCap className="h-6 w-6 text-blue-400" />
    },
    {
      degree: "Bachelor of Computer Application",
      field: "Computer Science",
      institution: "Bundelkhand University",
      period: "2016 - 2019",
      description: "Focused on computer science fundamentals, data structures, and algorithms",
      icon: <GraduationCap className="h-6 w-6 text-blue-400" />
    },
   
    {
      degree: "Data Engineering Certification",
      field: "AWS & Big Data",
      institution: "Data Vidhya",
      period: "In Progress",
      description: "Specialized training in AWS services, ETL processes, and data pipeline development",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    }
  ];

  return (
    <section className="py-20 bg-navy text-white" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="bg-navy-light border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {edu.icon}
                  <CardTitle className="text-white">{edu.degree}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">{edu.field}</CardDescription>
                <CardDescription className="text-gray-300">{edu.institution}</CardDescription>
                <CardDescription className="text-gray-300">{edu.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
