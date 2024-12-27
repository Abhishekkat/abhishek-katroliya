import { Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Certificate = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Expertise in designing distributed systems and deploying applications on AWS",
      icon: <Award className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Data Engineering Professional",
      issuer: "Data Vidhya",
      date: "2024",
      description: "Advanced knowledge in data pipeline development and ETL processes",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="certificates">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certificates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  {cert.icon}
                  <CardTitle>{cert.title}</CardTitle>
                </div>
                <CardDescription>{cert.issuer}</CardDescription>
                <CardDescription>{cert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;