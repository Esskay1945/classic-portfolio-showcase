import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

interface ExperienceSectionProps {
  onBack: () => void;
}

const experiences = [
  {
    id: "1",
    title: "Coming Soon",
    company: "Add your experience",
    period: "Present",
    description: "Add your professional experience via the admin panel. This section will showcase your career journey.",
  },
];

const ExperienceSection = ({ onBack }: ExperienceSectionProps) => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [selectedExp, setSelectedExp] = useState<string | null>(null);

  const skipAnimation = useCallback(() => {
    setShowAnimation(false);
  }, []);

  useEffect(() => {
    if (showAnimation) {
      const handleKeyPress = () => skipAnimation();
      window.addEventListener("keydown", handleKeyPress);

      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 4000);

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
        clearTimeout(timer);
      };
    }
  }, [showAnimation, skipAnimation]);

  if (showAnimation) {
    return (
      <div 
        className="fixed inset-0 z-40 flex items-center justify-center bg-background cursor-pointer"
        onClick={skipAnimation}
      >
        {/* Magical particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-gold/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${12 + Math.random() * 12}px`,
                animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Wizard figure silhouette */}
        <div className="relative z-10 text-center animate-fade-up">
          <div className="w-32 h-48 mx-auto mb-8 relative">
            {/* Robe */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-36 bg-gradient-to-b from-charcoal-light to-charcoal rounded-t-full" />
            {/* Head */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-charcoal-light" />
            {/* Wizard hat */}
            <div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "24px solid transparent",
                borderRight: "24px solid transparent",
                borderBottom: "32px solid hsl(var(--charcoal-light))",
              }}
            />
            {/* Staff/wand glow */}
            <div className="absolute right-0 top-16 w-2 h-24 bg-gradient-to-b from-gold to-transparent rounded-full animate-glow-pulse" />
          </div>

          <p className="font-display text-2xl text-foreground italic animate-fade-in" style={{ animationDelay: "0.5s" }}>
            "The journey defines the wizard..."
          </p>
          
          <p className="font-body text-sm text-muted-foreground mt-4 animate-fade-in" style={{ animationDelay: "1s" }}>
            — A wise sage
          </p>
        </div>

        {/* Skip hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 skip-hint">
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            Press any key or click to skip
          </p>
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-12 font-body group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Experience
          </h2>
          <p className="font-body text-muted-foreground">
            The journey that shaped my skills
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
              className="card-cinematic card-hover rounded-2xl p-6 cursor-pointer opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl text-foreground">
                    {exp.title}
                  </h3>
                  <p className="font-body text-sm text-gold">
                    {exp.company}
                  </p>
                </div>
                <span className="font-body text-xs text-muted-foreground px-3 py-1 bg-secondary rounded-full">
                  {exp.period}
                </span>
              </div>

              {/* Expandable description */}
              <div className={`overflow-hidden transition-all duration-300 ${
                selectedExp === exp.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <p className="font-body text-sm text-muted-foreground pt-4 border-t border-border">
                  {exp.description}
                </p>
              </div>

              {/* Click hint */}
              <p className="font-body text-xs text-smoke mt-4">
                {selectedExp === exp.id ? "Click to collapse" : "Click for details"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
