import { motion } from "framer-motion";
import { useState } from "react";
import { Layers, CheckCircle, Circle, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const asthaStack = new Set([
  "React", "React Native", "Angular", "Flutter",
  "JavaScript", "TypeScript", "Python", "Java", "C++",
  "FastAPI", "Node.js", "Express",
  "MongoDB", "MySQL", "PostgreSQL",
  "AWS", "Vercel", "Docker",
  "Git", "Redux", "REST APIs",
]);

const popularStacks: Record<string, string[]> = {
  "MERN Stack": ["MongoDB", "Express", "React", "Node.js"],
  "Python Full-Stack": ["Python", "FastAPI", "React", "PostgreSQL"],
  "Mobile Dev": ["React Native", "Flutter", "JavaScript", "Firebase"],
  "Cloud Native": ["AWS", "Docker", "Kubernetes", "Node.js", "PostgreSQL"],
};

export const TechStackComparison = () => {
  const [inputSkills, setInputSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !inputSkills.includes(trimmed)) {
      setInputSkills((prev) => [...prev, trimmed]);
    }
    setInputValue("");
  };

  const removeSkill = (skill: string) => {
    setInputSkills((prev) => prev.filter((s) => s !== skill));
  };

  const loadPreset = (name: string) => {
    setInputSkills(popularStacks[name]);
  };

  const matches = inputSkills.filter((s) => asthaStack.has(s));
  const overlapPercent = inputSkills.length > 0
    ? Math.round((matches.length / inputSkills.length) * 100)
    : 0;

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">
            <Layers className="w-3 h-3" />
            Compare
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Tech Stack <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enter your team's tech stack to see how much it overlaps with mine
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Presets */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {Object.keys(popularStacks).map((name) => (
              <button
                key={name}
                onClick={() => loadPreset(name)}
                className="px-3 py-1.5 text-xs rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-border"
              >
                {name}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="card-clean p-5 mb-6">
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Add a technology (e.g., React, Python)..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill(inputValue);
                  }
                }}
                className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
              <Button
                size="sm"
                onClick={() => addSkill(inputValue)}
                disabled={!inputValue.trim()}
              >
                <Plus className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Tags */}
            {inputSkills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {inputSkills.map((skill) => {
                  const hasMatch = asthaStack.has(skill);
                  return (
                    <span
                      key={skill}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                        hasMatch
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-secondary text-muted-foreground border-border"
                      }`}
                    >
                      {hasMatch ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <Circle className="w-3 h-3" />
                      )}
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="ml-0.5 hover:text-foreground">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Result */}
          {inputSkills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-clean p-6 text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${overlapPercent * 2.64} 264`}
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-foreground">{overlapPercent}%</span>
                </div>
              </div>
              <p className="text-sm text-foreground font-medium">
                {matches.length} of {inputSkills.length} technologies match
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {overlapPercent >= 70
                  ? "Excellent fit! Strong alignment with your stack."
                  : overlapPercent >= 40
                  ? "Good overlap — I can contribute and learn quickly."
                  : "Some overlap — I'm a fast learner and adapt quickly."}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};