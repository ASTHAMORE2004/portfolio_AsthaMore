import { motion } from "framer-motion";
import { skills, projects } from "@/data/portfolio-data";
import { useState } from "react";

type Category = "all" | "language" | "framework" | "database" | "cloud" | "tool";

const categoryLabels: Record<Category, string> = {
  all: "All Skills",
  language: "Languages",
  framework: "Frameworks",
  database: "Databases",
  cloud: "Cloud & DevOps",
  tool: "Tools",
};

const categoryColors: Record<string, string> = {
  language: "from-violet-500 to-purple-600",
  framework: "from-cyan-500 to-blue-600",
  database: "from-emerald-500 to-green-600",
  cloud: "from-orange-500 to-amber-600",
  tool: "from-pink-500 to-rose-600",
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const getProjectNames = (projectIds: string[]) => {
    return projectIds.map(id => projects.find(p => p.id === id)?.title).filter(Boolean);
  };

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skills mapped to real-world projects and quantified proficiency
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {(Object.keys(categoryLabels) as Category[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(174_84%_50%/0.3)]"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className="card-elevated p-4 rounded-xl text-center h-full">
                {/* Skill Name */}
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${categoryColors[skill.category]} text-white`}>
                  {skill.category}
                </span>

                {/* Proficiency Bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                  />
                </div>
                <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>

                {/* Hover Tooltip - Projects */}
                {hoveredSkill === skill.name && skill.projects.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-xl z-10 whitespace-nowrap"
                  >
                    <p className="text-xs text-muted-foreground mb-1">Used in:</p>
                    {getProjectNames(skill.projects).map((name, i) => (
                      <p key={i} className="text-xs text-primary font-medium">• {name}</p>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
