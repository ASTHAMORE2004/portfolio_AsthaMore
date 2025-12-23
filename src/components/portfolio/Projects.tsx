import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";
import { CodeSnippet } from "./CodeSnippet";
import { useState } from "react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-card/30">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions with measurable impact and clean code
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-6 lg:p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <p className="text-sm text-foreground/80 mb-6">
                    {project.longDescription}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold gradient-text">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.codeSnippet && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className="self-start mt-auto"
                    >
                      <Code className="w-4 h-4" />
                      {selectedProject === project.id ? "Hide Code" : "View Code"}
                      <ChevronRight className={`w-4 h-4 transition-transform ${selectedProject === project.id ? "rotate-90" : ""}`} />
                    </Button>
                  )}
                </div>

                {/* Code Preview / Project Visual */}
                <div className="relative bg-secondary/30 border-l border-border min-h-[300px] lg:min-h-[400px]">
                  {selectedProject === project.id && project.codeSnippet ? (
                    <CodeSnippet
                      code={project.codeSnippet.code}
                      language={project.codeSnippet.language}
                      description={project.codeSnippet.description}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                          <Code className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Click "View Code" to see implementation
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
