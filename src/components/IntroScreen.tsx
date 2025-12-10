import { useEffect, useState, useCallback } from "react";
import { Heart } from "lucide-react";

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen = ({ onComplete }: IntroScreenProps) => {
  const [greeting, setGreeting] = useState("");
  const [showSkip, setShowSkip] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  const handleSkip = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const handleKeyPress = () => {
      handleSkip();
    };

    window.addEventListener("keydown", handleKeyPress);
    
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearTimeout(timer);
    };
  }, [handleSkip, onComplete]);

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background cursor-pointer"
      onClick={handleSkip}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main greeting content */}
      <div className="relative z-10 text-center animate-fade-up">
        {/* Decorative top line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8 animate-scale-in" />
        
        {/* Greeting */}
        <h2 className="font-body text-lg md:text-xl tracking-[0.3em] uppercase text-smoke mb-4 animate-fade-in stagger-1">
          {greeting}
        </h2>
        
        {/* Main introduction */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-slide-up stagger-2">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient-gold">
            I am Sid
          </h1>
          <Heart 
            className="w-8 h-8 md:w-12 md:h-12 text-gold animate-glow-pulse" 
            fill="currentColor"
          />
        </div>

        {/* Subtitle */}
        <p className="font-body text-muted-foreground text-sm md:text-base max-w-md mx-auto animate-fade-in stagger-3">
          Welcome to my cinematic portfolio
        </p>

        {/* Decorative bottom line */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 animate-scale-in stagger-4" />
      </div>

      {/* Skip hint */}
      {showSkip && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 skip-hint">
          <p className="font-body text-xs md:text-sm text-muted-foreground tracking-wider">
            Press any key or click to skip
          </p>
        </div>
      )}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-muted">
        <div 
          className="h-full bg-gold"
          style={{
            animation: "progress 5s linear forwards",
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
