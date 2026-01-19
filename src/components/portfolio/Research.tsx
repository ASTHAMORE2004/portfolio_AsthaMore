import { motion } from "framer-motion";
import { FileText, Award, Users, ExternalLink, BookOpen, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const research = {
  title: "Fitverse: An AI-Powered Adaptive Fitness Platform with Real-Time Biomechanical Analysis",
  conference: "ICAIES 2025",
  status: "Published",
  ranking: "Top 20% Researchers",
  authors: ["Sameer Yadav", "Astha More", "Aditya Kumar Singh", "AbhiJit Ranjan", "Dr. Suchithra Mohan"],
  institution: "SRM Institute of Science and Technology",
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
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="section-label mb-4">
            <FileText className="w-4 h-4" />
            <span>Research & Publications</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Research</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI and fitness technology through peer-reviewed research
          </p>
        </motion.div>

        {/* Main Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bento-card p-8 lg:p-10">
            {/* Header with badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                {research.conference}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                {research.status}
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1">
                <Award className="w-4 h-4" />
                {research.ranking}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {research.title}
            </h3>

            {/* Authors */}
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm">
                {research.authors.map((author, i) => (
                  <span key={author}>
                    <span className={author === "Astha More" ? "text-primary font-semibold" : ""}>
                      {author}
                    </span>
                    {i < research.authors.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </div>

            {/* Abstract */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Abstract</h4>
              <p className="text-foreground/90 leading-relaxed">{research.abstract}</p>
            </div>

            {/* Key Contributions */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Contributions</h4>
              <ul className="space-y-3">
                {research.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {research.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold gradient-text">{metric.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Open to Collaborate */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                    Open to Collaborate
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    I'm actively seeking collaboration opportunities for research-oriented projects in AI, computer vision, and fitness technology. If you're working on innovative solutions, let's connect!
                  </p>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#contact">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Propose a Research Collaboration
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
