import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { experiences } from "@/data/portfolio-data";
import { AnimatedCounter } from "./AnimatedCounter";

export const Timeline = () => {
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
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A journey of growth, challenges, and impactful contributions
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative mb-8 pl-8 md:pl-20"
            >
              {/* Node */}
              <div className="absolute left-0 md:left-8 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

              <div className="card-clean p-5">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-heading font-semibold text-sm">{exp.role}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{exp.company}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-0.5 text-xs">•</span>{a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.impact.map((metric, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/8 border border-primary/15 text-xs">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="font-semibold text-primary">
                        <AnimatedCounter end={metric.value} suffix={metric.suffix} decimals={0} />
                      </span>
                      <span className="text-muted-foreground">{metric.metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground">
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