import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-secondary py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Tech Journey Begins{" "}
          <span className="text-primary">@ Tech Institute.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          India's Premier Engineering College Specialising in IT, Computer Science, Data
          Science, Artificial Intelligence, Machine Learning, Cybersecurity & Business
          Systems.
        </p>
        <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
          Get in Touch
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">
              <span className="text-primary">Paid Internship</span> Opportunities
            </h3>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">
              <span className="text-primary">Modern Lab</span> Facilities
            </h3>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">
              <span className="text-primary">Industry-Ready</span> Curriculum
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
