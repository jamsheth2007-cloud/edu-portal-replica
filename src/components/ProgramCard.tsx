import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  colorVariant: "lime" | "coral" | "sky" | "violet" | "blue" | "orange";
  imageSrc: string;
}

const ProgramCard = ({ title, description, colorVariant, imageSrc }: ProgramCardProps) => {
  const bgColorClass = {
    lime: "bg-gradient-to-br from-card-lime/30 to-card-lime/10",
    coral: "bg-gradient-to-br from-card-coral/30 to-card-coral/10",
    sky: "bg-gradient-to-br from-card-sky/30 to-card-sky/10",
    violet: "bg-gradient-to-br from-card-violet/30 to-card-violet/10",
    blue: "bg-gradient-to-br from-card-blue/30 to-card-blue/10",
    orange: "bg-gradient-to-br from-card-orange/30 to-card-orange/10",
  }[colorVariant];

  const circleColorClass = {
    lime: "bg-card-lime/40",
    coral: "bg-card-coral/40",
    sky: "bg-card-sky/40",
    violet: "bg-card-violet/40",
    blue: "bg-card-blue/40",
    orange: "bg-card-orange/40",
  }[colorVariant];

  return (
    <div
      className={cn(
        "rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 relative overflow-hidden",
        bgColorClass
      )}
    >
      {/* Decorative arrow */}
      <div className="absolute top-6 right-6 opacity-20">
        <ArrowUpRight className="w-16 h-16" strokeWidth={1.5} />
      </div>

      <div className="mb-6 flex justify-center relative">
        <div className={cn("w-52 h-52 rounded-full flex items-center justify-center overflow-hidden", circleColorClass)}>
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-foreground leading-tight">{title}</h3>
      <p className="text-foreground/70 mb-6 leading-relaxed">{description}</p>
      
      <Button 
        variant="default" 
        size="lg"
        className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium shadow-lg"
      >
        Let's Chat
        <MessageCircle className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default ProgramCard;
