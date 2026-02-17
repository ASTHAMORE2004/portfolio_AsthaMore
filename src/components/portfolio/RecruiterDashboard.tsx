import { motion } from "framer-motion";
import { Download, Play, ExternalLink, FileText, Award, GraduationCap, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, experiences, projects, achievements, education, stats } from "@/data/portfolio-data";
import { AnimatedCounter } from "./AnimatedCounter";
import { Link } from "react-router-dom";

export const RecruiterDashboard = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="section-label mb-4 inline-flex">
            <Briefcase className="w-3 h-3" />
            For Recruiters
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Quick <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know at a glance
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="card-clean p-4 text-center">
                <div className="text-2xl font-heading font-bold text-primary">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Profile */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="card-clean p-5 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center text-xl font-heading font-bold text-primary">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-heading font-bold text-foreground">{personalInfo.name}</h3>
                <p className="text-primary text-sm mb-1">{personalInfo.title}</p>
                <p className="text-xs text-muted-foreground mb-4">{personalInfo.location}</p>
                <div className="space-y-2">
                  <Button size="sm" className="w-full" asChild>
                    <a href={personalInfo.resumeUrl} download>
                      <Download className="w-3.5 h-3.5 mr-1.5" />Download Resume
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      <Mail className="w-3.5 h-3.5 mr-1.5" />Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="card-clean p-5">
                <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-primary" />Experience
                </h4>
                <div className="space-y-3">
                  {experiences.slice(0, 2).map((exp) => (
                    <div key={exp.id} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex justify-between text-sm mb-0.5">
                        <span className="font-medium text-foreground">{exp.role}</span>
                        <span className="text-[10px] text-muted-foreground">{exp.duration}</span>
                      </div>
                      <p className="text-xs text-primary mb-1">{exp.company}</p>
                      <ul className="text-[11px] text-muted-foreground space-y-0.5">
                        {exp.achievements.slice(0, 2).map((a, i) => (
                          <li key={i} className="flex items-start gap-1"><span className="text-primary">•</span>{a}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-clean p-5">
                <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-primary" />Education
                </h4>
                {education.map((edu, i) => (
                  <div key={i} className="p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-sm text-foreground">{edu.degree}</p>
                    <p className="text-xs text-primary">{edu.institution}</p>
                    <div className="flex justify-between mt-1 text-[11px] text-muted-foreground">
                      <span>GPA: {edu.gpa}</span><span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects & Achievements */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="card-clean p-5">
                <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-primary" />Top Projects
                </h4>
                <div className="space-y-2">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex justify-between mb-0.5">
                        <span className="font-medium text-sm text-foreground">{project.title}</span>
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      <p className="text-[11px] text-muted-foreground mb-1.5 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-1.5 py-0.5 text-[10px] rounded bg-primary/8 text-primary">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-clean p-5">
                <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-primary" />Achievements
                </h4>
                <div className="space-y-2">
                  {achievements.slice(0, 4).map((a, i) => (
                    <div key={i} className="flex items-start gap-2 p-1.5">
                      <Award className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-xs text-foreground">{a.title}</p>
                        <p className="text-[10px] text-muted-foreground">{a.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};