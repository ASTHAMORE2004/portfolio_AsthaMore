import { motion } from "framer-motion";
import { Download, Play, ExternalLink, FileText, Award, GraduationCap, Briefcase, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, experiences, projects, achievements, education, stats } from "@/data/portfolio-data";
import { AnimatedCounter } from "./AnimatedCounter";

export const RecruiterDashboard = () => {
  return (
    <section id="recruiter" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">For Recruiters</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Quick <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know at a glance
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="card-elevated p-4 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Profile & Downloads */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Profile Card */}
              <div className="card-elevated p-6 rounded-2xl text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan-400 mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-primary font-medium mb-2">{personalInfo.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{personalInfo.location}</p>
                
                <div className="space-y-2">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={personalInfo.resumeUrl} download>
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href={`mailto:${personalInfo.email}`}>
                      <Mail className="w-4 h-4" />
                      Contact Me
                    </a>
                  </Button>
                </div>
              </div>

              {/* Intro Video (placeholder) */}
              <div className="card-elevated p-6 rounded-2xl">
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary" />
                  Introduction Video
                </h4>
                <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                    <p className="text-sm text-muted-foreground">Video coming soon</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Column - Experience Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Experience Highlights */}
              <div className="card-elevated p-6 rounded-2xl">
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Experience Highlights
                </h4>
                <div className="space-y-4">
                  {experiences.slice(0, 2).map((exp) => (
                    <div key={exp.id} className="p-3 rounded-lg bg-secondary/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-foreground">{exp.role}</span>
                        <span className="text-xs text-muted-foreground">{exp.duration}</span>
                      </div>
                      <p className="text-sm text-primary mb-2">{exp.company}</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {exp.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-primary">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="card-elevated p-6 rounded-2xl">
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h4>
                {education.map((edu, i) => (
                  <div key={i} className="p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground">{edu.degree}</p>
                    <p className="text-sm text-primary">{edu.institution}</p>
                    <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                      <span>GPA: {edu.gpa}</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Projects & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Top Projects */}
              <div className="card-elevated p-6 rounded-2xl">
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Top Projects
                </h4>
                <div className="space-y-3">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-foreground text-sm">{project.title}</span>
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="card-elevated p-6 rounded-2xl">
                <h4 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Achievements
                </h4>
                <div className="space-y-3">
                  {achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 p-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.subtitle}</p>
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
