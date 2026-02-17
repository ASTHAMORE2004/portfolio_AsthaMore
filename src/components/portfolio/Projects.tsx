import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";
import { CodeSnippet } from "./CodeSnippet";
import { useState } from "react";

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

        <div className="space-y-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-clean overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                        {project.featured && (
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary/8 text-primary border border-primary/15">Featured</span>
                        )}
                      </div>
                      <p className="text-sm text-primary font-medium">{project.description}</p>
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

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.longDescription}</p>

                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-heading font-bold text-primary">{m.value}</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-secondary text-muted-foreground border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.codeSnippet && (
                    <Button variant="outline" size="sm"
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}>
                      <Code className="w-3.5 h-3.5 mr-1.5" />
                      {selectedProject === project.id ? "Hide Code" : "View Code"}
                    </Button>
                  )}
                </div>

                <div className="lg:col-span-2 relative bg-secondary/30 border-l border-border min-h-[280px]">
                  {selectedProject === project.id && project.codeSnippet ? (
                    <CodeSnippet code={project.codeSnippet.code} language={project.codeSnippet.language} description={project.codeSnippet.description} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center">
                        <Code className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">Click "View Code" to see implementation</p>
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