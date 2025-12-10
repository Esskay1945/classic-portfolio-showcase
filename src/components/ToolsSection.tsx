import { useState } from "react";
import { ArrowLeft, ChevronUp } from "lucide-react";

interface ToolsSectionProps {
  onBack: () => void;
}

const tools = [
  { name: "Python", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express", category: "Frameworks" },
  { name: "FastAPI", category: "Frameworks" },
  { name: "Streamlit", category: "Frameworks" },
  { name: "SQLite", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "OpenCV", category: "AI/ML" },
  { name: "MediaPipe", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "FAISS", category: "AI/ML" },
  { name: "Google Gemini", category: "AI/ML" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Plotly", category: "Visualization" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
];

const ToolsSection = ({ onBack }: ToolsSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

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

        {/* Garage door animation */}
        {!isOpen ? (
          <div 
            className="flex flex-col items-center justify-center min-h-[60vh] cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            {/* Garage frame */}
            <div className="relative w-full max-w-lg animate-fade-up">
              {/* Door panels */}
              <div className="bg-charcoal-light border border-border rounded-t-xl overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-12 border-b border-border/50 flex items-center justify-center group hover:bg-gold/5 transition-colors"
                  >
                    <div className="w-full h-0.5 bg-border/30" />
                  </div>
                ))}
              </div>
              
              {/* Door handle */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="w-16 h-3 bg-charcoal rounded-full border border-gold/30" />
              </div>

              {/* Pull up indicator */}
              <div className="flex flex-col items-center mt-6">
                <ChevronUp className="w-8 h-8 text-gold animate-bounce" />
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Click to open the garage
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
                My Tools
              </h2>
              <p className="font-body text-muted-foreground">
                Technologies and frameworks in my arsenal
              </p>
            </div>

            {/* Tools by category */}
            <div className="space-y-12">
              {Object.entries(groupedTools).map(([category, categoryTools], categoryIndex) => (
                <div 
                  key={category} 
                  className="opacity-0 animate-slide-up"
                  style={{ animationDelay: `${categoryIndex * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <h3 className="font-display text-xl text-gold mb-6">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {categoryTools.map((tool, index) => (
                      <div
                        key={tool.name}
                        className="px-5 py-3 card-cinematic card-hover rounded-lg cursor-default"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s` }}
                      >
                        <span className="font-body text-foreground">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ToolsSection;
