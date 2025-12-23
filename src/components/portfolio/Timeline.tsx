import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { experiences } from "@/data/portfolio-data";
import { AnimatedCounter } from "./AnimatedCounter";

export const Timeline = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, challenges, and impactful contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 glow-effect-sm"
              />

              {/* Content Card */}
              <div className={`card-elevated p-6 rounded-2xl ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                {/* Header */}
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"} mb-4`}>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-heading font-semibold text-lg">{exp.role}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.company}</h3>
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className={`space-y-2 mb-6 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`text-sm text-foreground/80 flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-primary mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                {/* Impact Metrics */}
                <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.impact.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20"
                    >
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">
                        <AnimatedCounter end={metric.value} suffix={metric.suffix} decimals={metric.value % 1 !== 0 ? 1 : 0} />
                      </span>
                      <span className="text-xs text-muted-foreground">{metric.metric}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
