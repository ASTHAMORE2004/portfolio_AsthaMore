import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio-data";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">💻 Tech Stack</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit refined through internships and real-world projects
          </p>
        </motion.div>

        {/* Tech Stack Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bento-card group ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-secondary/80 text-secondary-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee">
            {[...techStack.flatMap(c => c.skills), ...techStack.flatMap(c => c.skills)].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-4xl md:text-5xl font-heading font-bold text-muted/20 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
