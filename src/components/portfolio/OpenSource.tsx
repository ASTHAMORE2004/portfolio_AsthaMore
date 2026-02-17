import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const openSourceContributions = [
  {
    id: "gsoc",
    title: "Google Summer of Code",
    description: "Aspiring GSoC contributor passionate about open-source development. Actively exploring opportunities for GSoC 2025.",
    status: "Exploring",
    statusClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/15",
  },
  {
    id: "github",
    title: "GitHub Contributions",
    description: "Active contributor with multiple projects including FinWise and FitVerse AI. Building in public.",
    status: "Active",
    statusClass: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/15",
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
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-label mb-4 inline-flex">
            <Code2 className="w-3 h-3" />
            Open Source
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Open Source <span className="gradient-text">Contributor</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {openSourceContributions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-clean p-5"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-sm font-bold text-foreground">{item.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${item.statusClass}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-medium hover:underline">
                    <Github className="w-3 h-3" />View Profile<ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-clean p-6"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Github className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-bold text-foreground">GitHub Activity</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Building open-source solutions in fintech and AI.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {githubStats.map((s) => (
                    <div key={s.label} className="text-center px-4 py-2 rounded-lg bg-secondary/50 border border-border">
                      <div className="text-lg font-heading font-bold text-primary">{s.value}</div>
                      <div className="text-[10px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Button size="sm" asChild>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" />Explore GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};