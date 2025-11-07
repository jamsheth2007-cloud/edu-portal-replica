import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background via-background to-secondary/30 py-24 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Your Tech Journey Begins{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            @ Madras Engineering College.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
          India's 1st Engineering College Specialising in IT, Computer Science, Data
          Science, Artificial Intelligence, Machine Learning, Cybersecurity & Business
          Systems.
        </p>
        <Button 
          size="lg" 
          className="rounded-full px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
        >
          Get in Touch
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <div className="mt-20 pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-lg">
                <span className="text-primary font-extrabold">Paid Internship</span>{" "}
                <span className="text-foreground/70">Opportunities</span>
              </h3>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">
                <span className="text-primary font-extrabold">Modern Lab</span>{" "}
                <span className="text-foreground/70">Facilities</span>
              </h3>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">
                <span className="text-primary font-extrabold">Industry-Ready</span>{" "}
                <span className="text-foreground/70">Curriculum</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
