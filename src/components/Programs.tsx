import ProgramCard from "./ProgramCard";
import programCSE from "@/assets/program-cse.png";
import programAI from "@/assets/program-ai.png";
import programAIML from "@/assets/program-aiml.png";
import programIT from "@/assets/program-it.png";
import programCyber from "@/assets/program-cyber.png";
import programCSBS from "@/assets/program-csbs.png";

const Programs = () => {
  const programs = [
    {
      title: "B.E. in Computer Science & Engineering",
      description:
        "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
      colorVariant: "lime" as const,
      imageSrc: programCSE,
    },
    {
      title: "B.Tech. in Artificial Intelligence & Data Science",
      description:
        "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
      colorVariant: "coral" as const,
      imageSrc: programAI,
    },
    {
      title: "B.E. in Computer Science & Engineering (AI & ML)",
      description:
        "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
      colorVariant: "violet" as const,
      imageSrc: programAIML,
    },
    {
      title: "B.Tech. in Information Technology (IT)",
      description:
        "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
      colorVariant: "lime" as const,
      imageSrc: programIT,
    },
    {
      title: "B.E. in Computer Science & Engineering (Cyber Security)",
      description:
        "Secure the digital world with advanced cyber security techniques and ethical hacking skills.",
      colorVariant: "blue" as const,
      imageSrc: programCyber,
    },
    {
      title: "B.E. in Computer Science & Business Systems",
      description:
        "Bridge technology and business with innovative solutions that drive growth and digital transformation.",
      colorVariant: "orange" as const,
      imageSrc: programCSBS,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
