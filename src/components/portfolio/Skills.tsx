import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio-data";
import { Code2, Server, Database, Wrench, BookOpen } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "CS Fundamentals": BookOpen,
  "Languages": Code2,
  "Frameworks": Server,
  "Database & Cloud": Database,
  "Tools": Wrench,
};

export const Skills = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Tech Stack</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit refined through internships and real-world projects
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((category, index) => {
            const CategoryIcon = categoryIcons[category.name] || Code2;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="card-clean p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <CategoryIcon className="w-4 h-4 text-primary" />
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-secondary/60 text-foreground border border-border/50 hover:border-primary/20 transition-colors"
                    >
                      {skill.logo && (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};