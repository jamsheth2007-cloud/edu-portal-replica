import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  colorVariant: "lime" | "coral" | "sky" | "violet";
  imageSrc: string;
}

const ProgramCard = ({ title, description, colorVariant, imageSrc }: ProgramCardProps) => {
  const bgColorClass = {
    lime: "bg-card-lime/20",
    coral: "bg-card-coral/20",
    sky: "bg-card-sky/20",
    violet: "bg-card-violet/20",
  }[colorVariant];

  return (
    <div
      className={cn(
        "rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2",
        bgColorClass
      )}
    >
      <div className="mb-6 flex justify-center">
        <div className="w-48 h-48 rounded-full bg-card/50 flex items-center justify-center overflow-hidden">
          <img src={imageSrc} alt={title} className="w-40 h-40 object-cover" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p>
      <Button variant="default" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
        Let's Chat
        <MessageCircle className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
};

export default ProgramCard;
