import { useEffect, useState } from "react";

interface GodfatherQuoteProps {
  onComplete: () => void;
}

const GodfatherQuote = ({ onComplete }: GodfatherQuoteProps) => {
  const [showQuote, setShowQuote] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show quote with slight delay
    const showTimer = setTimeout(() => {
      setShowQuote(true);
    }, 300);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    // Complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-40 flex items-center justify-center bg-background px-8 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 4%) 70%)",
        }}
      />

      {/* Quote content */}
      {showQuote && (
        <div className="relative z-10 max-w-5xl text-center">
          <blockquote className="cinematic-quote text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-up">
            <span className="text-gold">"</span>
            I'm gonna make him an offer he can't refuse
            <span className="text-gold">"</span>
          </blockquote>
          
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="font-body text-sm text-muted-foreground tracking-[0.2em] uppercase">
              — The Godfather, 1972
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GodfatherQuote;
