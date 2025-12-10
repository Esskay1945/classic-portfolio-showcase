import { useState } from "react";
import { ArrowLeft, ExternalLink, Github, Code2 } from "lucide-react";
import { projects, Project } from "@/data/projects";

interface ProjectsSectionProps {
  onBack: () => void;
}

const ProjectsSection = ({ onBack }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8 font-body group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          {/* Project details */}
          <div className="card-cinematic rounded-xl p-8 md:p-12 animate-fade-up">
            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
              {selectedProject.title}
            </h1>

            {/* Description */}
            <p className="font-body text-lg text-foreground/90 mb-8 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-gold" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary rounded-lg font-body text-sm text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="font-display text-xl text-foreground mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 font-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub Link */}
            <a
              href={selectedProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gold text-primary-foreground rounded-lg font-body font-medium hover:bg-gold-light transition-colors group"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-12 font-body group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            My Projects
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            A collection of applications and tools I've crafted with passion
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="card-cinematic card-hover rounded-xl p-6 cursor-pointer group opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Project icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <Code2 className="w-6 h-6 text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech preview */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary/50 rounded text-xs font-body text-smoke"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 text-xs font-body text-smoke">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* View indicator */}
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-body text-xs text-gold tracking-wider uppercase">
                  View Details
                </span>
                <ExternalLink className="w-4 h-4 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
