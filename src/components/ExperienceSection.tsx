import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Sparkles, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { experiences } from "@/data/experience";

interface ExperienceSectionProps {
  onBack: () => void;
}

const ExperienceSection = ({ onBack }: ExperienceSectionProps) => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [expandedExp, setExpandedExp] = useState<string | null>(null);

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

          <p className="font-display text-2xl md:text-3xl text-foreground italic animate-fade-in" style={{ animationDelay: "0.5s" }}>
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
      <div className="max-w-4xl mx-auto">
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

        {/* Experience timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 opacity-0 animate-slide-up ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div 
                  className="card-cinematic card-hover rounded-2xl p-6 cursor-pointer"
                  onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-foreground">
                        {exp.title}
                      </h3>
                      <p className="font-body text-sm text-gold">
                        {exp.company}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-1">
                        {exp.period}
                      </p>
                    </div>
                    <div className="text-muted-foreground">
                      {expandedExp === exp.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Expandable responsibilities */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedExp === exp.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pt-4 border-t border-border">
                      <p className="font-body text-xs text-gold uppercase tracking-wider mb-3">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
