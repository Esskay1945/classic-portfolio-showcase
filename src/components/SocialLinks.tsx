import { Github, Linkedin } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-8 py-16">
      <a
        href="https://github.com/Esskay1945"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-social group"
        aria-label="GitHub Profile"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
          <Github className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-gold transition-colors" />
        </div>
        <p className="font-body text-xs text-muted-foreground mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          GitHub
        </p>
      </a>

      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-social group"
        aria-label="LinkedIn Profile"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
          <Linkedin className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-gold transition-colors" />
        </div>
        <p className="font-body text-xs text-muted-foreground mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          LinkedIn
        </p>
      </a>
    </div>
  );
};

export default SocialLinks;
