import { Briefcase, Award, Wrench, Star } from "lucide-react";

interface MainCardsProps {
  onCardClick: (section: string) => void;
}

const cards = [
  {
    id: "projects",
    title: "Projects",
    subtitle: "My Creative Works",
    icon: Briefcase,
    description: "Explore the applications and tools I've built",
  },
  {
    id: "certifications",
    title: "Certifications",
    subtitle: "Achievements Unlocked",
    icon: Award,
    description: "Professional credentials and learning milestones",
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "My Arsenal",
    icon: Wrench,
    description: "Technologies and frameworks I work with",
  },
  {
    id: "experience",
    title: "Experience",
    subtitle: "The Journey",
    icon: Star,
    description: "Professional experience and growth",
  },
];

const MainCards = ({ onCardClick }: MainCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={card.id}
          onClick={() => onCardClick(card.id)}
          className="card-cinematic card-hover rounded-xl p-8 cursor-pointer group opacity-0 animate-slide-up"
          style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
        >
          {/* Icon container */}
          <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
            <card.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
            {card.title}
          </h3>

          {/* Subtitle */}
          <p className="font-body text-sm text-gold/80 mb-3 tracking-wide">
            {card.subtitle}
          </p>

          {/* Description */}
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {card.description}
          </p>

          {/* Hover indicator */}
          <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-body text-xs text-gold tracking-wider uppercase">
              Explore
            </span>
            <div className="w-4 h-[1px] bg-gold" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCards;
