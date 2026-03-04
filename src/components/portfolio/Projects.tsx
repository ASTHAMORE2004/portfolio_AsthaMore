import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";
import { CodeSnippet } from "./CodeSnippet";
import { useState } from "react";

import projectFinwise from "@/assets/project-finwise.jpg";
import projectFitverse from "@/assets/project-fitverse.jpg";
import projectAria from "@/assets/project-aria.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";

const projectImages: Record<string, string> = {
  "proj-1": projectFinwise,
  "proj-2": projectFitverse,
  "proj-3": projectAria,
  "proj-4": projectAnalytics,
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Portfolio</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world applications with measurable impact
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-clean overflow-hidden group"
            >
              {/* Thumbnail */}
              {projectImages[project.id] && (
                <div className="relative overflow-hidden">
                  <img
                    src={projectImages[project.id]}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold rounded-full bg-primary text-primary-foreground shadow-lg">
                      Featured
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{project.description}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary/8 hover:text-primary transition-all">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary/8 hover:text-primary transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Case Study */}
                <div className="grid sm:grid-cols-3 gap-4 mb-5">
                  <div className="p-3 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Problem</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.problem || "Complex workflow requiring scalable, efficient solution"}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Solution</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.solution || project.description}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1.5">Impact</p>
                    <div className="space-y-1">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{m.label}</span>
                          <span className="font-semibold text-primary">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-secondary text-muted-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Code toggle */}
                <div className="flex items-center gap-3">
                  {project.codeSnippet && (
                    <Button variant="outline" size="sm"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}>
                      <Code className="w-3.5 h-3.5 mr-1.5" />
                      {selectedProject === project.id ? "Hide Code" : "View Code"}
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Code snippet expand */}
                {selectedProject === project.id && project.codeSnippet && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 rounded-xl overflow-hidden border border-border"
                  >
                    <CodeSnippet code={project.codeSnippet.code} language={project.codeSnippet.language} description={project.codeSnippet.description} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
