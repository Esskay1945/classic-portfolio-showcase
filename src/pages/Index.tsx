import { useState } from "react";
import IntroScreen from "@/components/IntroScreen";
import MainCards from "@/components/MainCards";
import GodfatherQuote from "@/components/GodfatherQuote";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SocialLinks from "@/components/SocialLinks";

type ViewState = "intro" | "home" | "godfather-quote" | "projects" | "certifications" | "tools" | "experience";

const Index = () => {
  const [view, setView] = useState<ViewState>("intro");

  const handleCardClick = (section: string) => {
    if (section === "projects") {
      setView("godfather-quote");
    } else if (section === "certifications") {
      setView("certifications");
    } else if (section === "tools") {
      setView("tools");
    } else if (section === "experience") {
      setView("experience");
    }
  };

  const handleBackToHome = () => {
    setView("home");
  };

  // Intro screen
  if (view === "intro") {
    return <IntroScreen onComplete={() => setView("home")} />;
  }

  // Godfather quote transition
  if (view === "godfather-quote") {
    return <GodfatherQuote onComplete={() => setView("projects")} />;
  }

  // Projects section
  if (view === "projects") {
    return <ProjectsSection onBack={handleBackToHome} />;
  }

  // Certifications section
  if (view === "certifications") {
    return <CertificationsSection onBack={handleBackToHome} />;
  }

  // Tools section
  if (view === "tools") {
    return <ToolsSection onBack={handleBackToHome} />;
  }

  // Experience section
  if (view === "experience") {
    return <ExperienceSection onBack={handleBackToHome} />;
  }

  // Home view
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-12 md:py-20 text-center">
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient-gold mb-4">
            Sid's Portfolio
          </h1>
          <p className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto px-4">
            A cinematic journey through my creative works and experiences
          </p>
        </div>
      </header>

      {/* Main cards section */}
      <main className="pb-8">
        <MainCards onCardClick={handleCardClick} />
      </main>

      {/* Social links */}
      <footer>
        <SocialLinks />
        <div className="text-center pb-8">
          <p className="font-body text-xs text-muted-foreground">
            © 2024 Sid. Crafted with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
