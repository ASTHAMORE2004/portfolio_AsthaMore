import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MapPin, GraduationCap, Briefcase, FolderOpen, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, stats } from "@/data/portfolio-data";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Cloud Enthusiast",
  "AI/ML Explorer",
  "React Native Developer",
];

const highlights = [
  "3+ production internships",
  "Published researcher (ICAIES'25)",
  "AWS Cloud Club Captain",
  "9.7 CGPA — Academic Scholar",
];

const statIcons = [GraduationCap, Briefcase, FolderOpen, TrendingUp];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-[pulse_3s_ease-in-out_infinite]" />
              {/* Middle ring */}
              <div className="absolute -inset-1 rounded-full border border-primary/50" />
              <img
                src={profilePhoto}
                alt="Astha More"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-primary/40 shadow-xl shadow-primary/10 relative z-10"
              />
              {/* Name badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold whitespace-nowrap shadow-lg">
                Astha More
              </div>
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="h-8 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-xl text-muted-foreground font-medium"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personalInfo.location}</span>
              <span className="mx-1">·</span>
              <span>SRM University</span>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.33 }}
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-8"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
          >
            <Button size="lg" className="px-6" asChild>
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-6" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div
                  key={stat.label}
                  className="card-clean p-4 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-foreground">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
