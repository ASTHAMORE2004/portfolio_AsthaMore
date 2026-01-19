import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const openSourceContributions = [
  {
    id: "gsoc",
    title: "Google Summer of Code",
    icon: "🌟",
    description: "Aspiring GSoC contributor passionate about open-source development. Actively exploring opportunities to contribute to impactful projects during GSoC 2025.",
    status: "Actively Exploring",
    statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
  {
    id: "github",
    title: "GitHub Contributions",
    icon: "🐙",
    description: "Active GitHub contributor with multiple projects including FinWise and FitVerse AI. Building in public and contributing to the developer community.",
    status: "Active Contributor",
    statusColor: "bg-green-500/10 text-green-400 border-green-500/20",
    link: personalInfo.github,
  },
];

const githubStats = [
  { label: "Repositories", value: "15+" },
  { label: "Contributions", value: "200+" },
  { label: "Languages", value: "5+" },
];

export const OpenSource = () => {
  return (
    <section id="opensource" className="py-24 bg-card/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4">
            <Code2 className="w-4 h-4" />
            <span>Open Source</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Open Source <span className="gradient-text">Contributor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building in public and contributing to the global developer community
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contribution Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {openSourceContributions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card p-6 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{item.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Profile
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-8"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Github className="w-8 h-8 text-primary" />
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    GitHub Activity
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Passionate about building open-source solutions and contributing to the community. 
                  Check out my repositories for full-stack projects in fintech and AI.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {githubStats.map((stat) => (
                    <div key={stat.label} className="text-center px-6 py-3 rounded-xl bg-secondary/50 border border-border">
                      <div className="text-xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Explore My GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
              
              {/* Decorative Element */}
              <div className="hidden lg:block">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-transparent flex items-center justify-center">
                    <Rocket className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
