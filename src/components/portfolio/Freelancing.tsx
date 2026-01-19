import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ArrowRight, Zap, Code, Smartphone, Database, Youtube, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps using React Native & Flutter with modern UI/UX",
    technologies: ["React Native", "Flutter", "Expo"],
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Scalable web applications with modern frameworks and cloud deployment",
    technologies: ["React", "FastAPI", "Node.js"],
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "RESTful APIs, database design, and cloud infrastructure setup",
    technologies: ["MongoDB", "MySQL", "AWS"],
  },
];

const highlights = [
  "3+ Internships at Top Companies",
  "10+ Projects Delivered",
  "45% Performance Improvements",
  "Published Researcher",
];

export const Freelancing = () => {
  return (
    <section id="freelancing" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-primary/5" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-cyan-500 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-cyan-500 animate-pulse opacity-50" />
            <div className="relative bg-background rounded-[22px] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                    <Zap className="w-4 h-4" />
                    Available for Freelance Projects
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    Let's Build <span className="gradient-text">Industry-Level</span> Projects Together
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    I'm open for freelancing opportunities! Whether you need a mobile app, web platform, 
                    or AI-powered solution, I bring production-ready code and startup-tested experience.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    {highlights.map((highlight) => (
                      <span key={highlight} className="inline-flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30" asChild>
                      <a href="#contact">
                        <Briefcase className="w-5 h-5 mr-2" />
                        Hire Me
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
                      <a href="https://www.youtube.com/@AsthaMoreSDE4002" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-5 h-5 mr-2 text-red-500" />
                        Watch Project Demos
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex lg:flex-col gap-4">
                  <div className="text-center p-6 rounded-2xl bg-secondary/50 border border-border">
                    <div className="text-4xl font-bold gradient-text">9.7</div>
                    <div className="text-xs text-muted-foreground mt-1">CGPA</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-secondary/50 border border-border">
                    <div className="text-4xl font-bold gradient-text">3+</div>
                    <div className="text-xs text-muted-foreground mt-1">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Services I Offer</h3>
            <p className="text-muted-foreground">End-to-end development with production-quality code</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bento-card p-6 group hover:border-primary/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12"
        >
          <a
            href="https://www.youtube.com/@AsthaMoreSDE4002"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/5 border border-red-500/20 hover:border-red-500/40 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-colors">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                  Check Out My YouTube Channel
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors" />
                </h4>
                <p className="text-muted-foreground text-sm">
                  Watch project demos, coding tutorials, and tech content on @AsthaMoreSDE4002
                </p>
              </div>
              <Star className="w-6 h-6 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
