import { motion } from "framer-motion";
import { FileText, Award, Users, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const research = {
  title: "Fitverse: An AI-Powered Adaptive Fitness Platform with Real-Time Biomechanical Analysis",
  conference: "ICAIES 2025",
  status: "Published",
  ranking: "Top 20% Researchers",
  authors: ["Sameer Yadav", "Astha More", "Aditya Kumar Singh", "AbhiJit Ranjan", "Dr. Suchithra Mohan"],
  abstract: "This study presents Fitverse, an adaptive fitness platform designed to deliver personalized workout experiences through real-time biomechanical analysis. The system uses computer vision and machine learning to monitor exercise form and provide instant feedback directly within the browser. Experimental results demonstrated a 32% reduction in exercise form errors and a 41% increase in user engagement.",
  contributions: [
    "Real-time pose detection system using TensorFlow.js and WebGPU achieving 42 FPS",
    "Adaptive algorithms for workout and nutrition recommendations",
    "Comprehensive health tracking with dedicated modules for women's health and accessibility"
  ],
  metrics: [
    { label: "Form Error Reduction", value: "32%" },
    { label: "User Engagement", value: "+41%" },
    { label: "Frame Rate", value: "42 FPS" },
    { label: "Users Tested", value: "50+" },
  ],
};

export const Research = () => {
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
            <FileText className="w-3 h-3" />
            Research
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Academic <span className="gradient-text">Research</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-clean p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
                {research.conference}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/15">
                {research.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/15 flex items-center gap-1">
                <Award className="w-3 h-3" />{research.ranking}
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-foreground mb-3">{research.title}</h3>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
              <Users className="w-3 h-3" />
              {research.authors.map((author, i) => (
                <span key={author}>
                  <span className={author === "Astha More" ? "text-primary font-semibold" : ""}>{author}</span>
                  {i < research.authors.length - 1 && ", "}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{research.abstract}</p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Contributions</h4>
              <ul className="space-y-2">
                {research.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />{c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {research.metrics.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-lg font-heading font-bold text-primary">{m.value}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-heading text-sm font-bold text-foreground mb-1">Open to Collaborate</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Seeking collaboration on AI, computer vision, and fitness technology research.
              </p>
              <Button size="sm" asChild>
                <Link to="/contact"><BookOpen className="w-3.5 h-3.5 mr-1.5" />Propose Collaboration</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};