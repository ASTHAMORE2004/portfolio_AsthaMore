import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";
import { CodeSnippet } from "./CodeSnippet";
import { useState } from "react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">🚀 Portfolio</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications with measurable impact
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bento-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Project Info */}
                <div className="lg:col-span-3 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-primary font-medium">{project.description}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium rounded-xl bg-secondary text-secondary-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Code Button */}
                  {project.codeSnippet && (
                    <Button
                      variant="outline"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className="rounded-xl"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      {selectedProject === project.id ? "Hide Code" : "View Code Snippet"}
                      <ArrowUpRight className={`w-4 h-4 ml-2 transition-transform ${selectedProject === project.id ? "rotate-90" : ""}`} />
                    </Button>
                  )}
                </div>

                {/* Code Preview */}
                <div className="lg:col-span-2 relative bg-card/50 border-l border-border min-h-[350px]">
                  {selectedProject === project.id && project.codeSnippet ? (
                    <CodeSnippet
                      code={project.codeSnippet.code}
                      language={project.codeSnippet.language}
                      description={project.codeSnippet.description}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                          <Code className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Click "View Code" to see implementation details
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
