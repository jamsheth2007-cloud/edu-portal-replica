import ProgramCard from "./ProgramCard";

const Programs = () => {
  const programs = [
    {
      title: "B.E. in Computer Science & Engineering",
      description:
        "Design, develop, and lead with powerful computing skills to drive innovation in the digital world.",
      colorVariant: "lime" as const,
      imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    },
    {
      title: "B.Tech. in Artificial Intelligence & Data Science",
      description:
        "Master AI, Machine Learning & Big Data to solve real-world problems with intelligent solutions.",
      colorVariant: "coral" as const,
      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop",
    },
    {
      title: "B.E. in Computer Science & Engineering (AI & ML)",
      description:
        "Dive deep into AI & Machine Learning technologies to build smart systems & future-ready applications.",
      colorVariant: "violet" as const,
      imageSrc: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=400&fit=crop",
    },
    {
      title: "B.Tech. in Information Technology (IT)",
      description:
        "Ace Computing, Programming & System Design to build innovative software & technology solutions.",
      colorVariant: "sky" as const,
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
