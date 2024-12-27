import { Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Certificate = () => {
  const certificates = [
    
    {
      title: "Data Engineering",
      issuer: "Data Vidhya",
      date: "9/2024- Inprogress",
      description: "Advanced knowledge in data pipeline development and ETL processes on AWS/AZURE",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Data Science",
      issuer: "Coursera",
      date: "2021",
      description: "Expertise in designing distributed systems and deploying applications on AWS",
      icon: <Award className="h-6 w-6 text-blue-400" />
    },
      {
      title: "SQL",
      issuer: "HackerRank",
      date: "AUG/2021",
      description: "It includes simple queries, relationships, and aggregators.",
      icon: <Award className="h-6 w-6 text-blue-400" />
    },
     {
      title: "Agiloft",
      issuer: "Agiloft",
      date: "AUG/2021",
      description: "It includes Fundamentals, Design and Configration.",
      icon: <Award className="h-6 w-6 text-blue-400" />
    },
  ];

  return (
    <section className="py-32 bg-black" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-violet-500 text-transparent bg-clip-text">
          Certificates
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 transition-colors duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-blue-400 group-hover:text-violet-400 transition-colors">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-white">{cert.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-400">{cert.issuer}</CardDescription>
                <CardDescription className="text-gray-400">{cert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
