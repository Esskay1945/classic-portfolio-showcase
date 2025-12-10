import { useState } from "react";
import { ArrowLeft, Lock, Unlock, Award, Briefcase, Code2, Database, BarChart3 } from "lucide-react";
import { certifications, Certification } from "@/data/certifications";

interface CertificationsSectionProps {
  onBack: () => void;
}

const categoryIcons = {
  simulation: Briefcase,
  technical: Code2,
  business: BarChart3,
  database: Database,
};

const categoryLabels = {
  simulation: "Industry Job Simulations",
  technical: "Technical Certifications",
  business: "Business & Process Analytics",
  database: "Database & Systems",
};

const CertificationsSection = ({ onBack }: CertificationsSectionProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

  const categories = Object.keys(groupedCerts) as Array<keyof typeof categoryLabels>;

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
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-flex items-center gap-3 mb-4">
                <Unlock className="w-8 h-8 text-gold" />
                <h2 className="font-display text-4xl md:text-5xl text-gradient-gold">
                  Certifications
                </h2>
              </div>
              <p className="font-body text-muted-foreground">
                {certifications.length} professional credentials and achievements
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                  selectedCategory === null
                    ? "bg-gold text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                All ({certifications.length})
              </button>
              {categories.map((cat) => {
                const Icon = categoryIcons[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-body text-sm transition-all flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-gold text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {categoryLabels[cat]} ({groupedCerts[cat].length})
                  </button>
                );
              })}
            </div>

            {/* Certifications by category */}
            <div className="space-y-12">
              {categories
                .filter((cat) => selectedCategory === null || selectedCategory === cat)
                .map((category, categoryIndex) => {
                  const Icon = categoryIcons[category];
                  return (
                    <div
                      key={category}
                      className="opacity-0 animate-slide-up"
                      style={{ animationDelay: `${categoryIndex * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <Icon className="w-6 h-6 text-gold" />
                        <h3 className="font-display text-xl text-foreground">
                          {categoryLabels[category]}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {groupedCerts[category].map((cert, index) => (
                          <div
                            key={cert.id}
                            className="card-cinematic card-hover rounded-xl p-5"
                            style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                                <Award className="w-5 h-5 text-gold" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-display text-base text-foreground line-clamp-2">
                                  {cert.title}
                                </h4>
                                <p className="font-body text-xs text-gold mt-1">
                                  {cert.issuer}
                                </p>
                              </div>
                            </div>
                            
                            <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-3">
                              {cert.description}
                            </p>
                            
                            <p className="font-body text-xs text-smoke">
                              {cert.date}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CertificationsSection;
