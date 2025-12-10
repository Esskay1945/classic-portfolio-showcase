import { useState } from "react";
import { ArrowLeft, Lock, Unlock, Award } from "lucide-react";

interface CertificationsSectionProps {
  onBack: () => void;
}

const certifications = [
  {
    id: "1",
    title: "Coming Soon",
    issuer: "Add your certifications",
    description: "This section will display your professional certifications. Add them via the admin panel.",
    date: "2024",
  },
];

const CertificationsSection = ({ onBack }: CertificationsSectionProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

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

        {/* Vault door animation */}
        {!isUnlocked ? (
          <div 
            className="flex flex-col items-center justify-center min-h-[60vh] cursor-pointer"
            onClick={() => setIsUnlocked(true)}
          >
            {/* Vault door */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-up">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gold/30 animate-glow-pulse" />
              
              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full border-2 border-gold/50" />
              
              {/* Inner circle - the vault door */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-charcoal-light to-charcoal border border-border flex items-center justify-center group hover:border-gold transition-colors duration-500">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-xl text-foreground">Vault</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">Click to unlock</p>
                </div>
              </div>

              {/* Handle bars */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-6 h-16 bg-charcoal-light rounded-l-full border border-border" />
              <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-6 h-16 bg-charcoal-light rounded-r-full border border-border" />
            </div>

            <p className="mt-8 font-body text-muted-foreground text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Access your certification vault
            </p>
          </div>
        ) : (
          <>
            {/* Unlocked header */}
            <div className="text-center mb-16 animate-fade-up">
              <div className="inline-flex items-center gap-3 mb-4">
                <Unlock className="w-8 h-8 text-gold" />
                <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
                  Certifications
                </h2>
              </div>
              <p className="font-body text-muted-foreground">
                Professional credentials and achievements
              </p>
            </div>

            {/* Certifications grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className="card-cinematic card-hover rounded-xl p-6 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  
                  <h3 className="font-display text-xl text-foreground mb-1">
                    {cert.title}
                  </h3>
                  
                  <p className="font-body text-sm text-gold mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  
                  <p className="font-body text-xs text-smoke">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CertificationsSection;
