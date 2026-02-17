import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ArrowRight, Cloud, CreditCard, Database, Smartphone, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { Link } from "react-router-dom";

const services = [
  { icon: Cloud, title: "Cloud-Native Dev", description: "Scalable apps on AWS & Vercel", technologies: ["AWS", "Vercel", "Docker"] },
  { icon: CreditCard, title: "Fintech Solutions", description: "Secure payment gateway integration", technologies: ["Stripe", "FastAPI", "MongoDB"] },
  { icon: Database, title: "Backend Systems", description: "High-performance APIs and microservices", technologies: ["FastAPI", "Node.js", "MySQL"] },
  { icon: Smartphone, title: "Mobile Apps", description: "Cross-platform with modern UI/UX", technologies: ["React Native", "Flutter", "Expo"] },
];

const highlights = ["Live Stripe Integration", "Cloud-Native Architecture", "45% Performance Gains", "Fintech & AI Specialist"];

export const Freelancing = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="card-clean p-6 lg:p-8 border-primary/15">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 text-center lg:text-left">
                <span className="section-label mb-3 inline-flex">
                  <Briefcase className="w-3 h-3" />
                  Available for Freelance
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold mt-3 mb-3">
                  Build <span className="gradient-text">Scalable Products</span> Together
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Specializing in fintech solutions with payment gateways, scalable backends, and cloud-native architectures.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">
                  {highlights.map((h) => (
                    <span key={h} className="flex items-center gap-1.5 text-xs text-foreground/80">
                      <CheckCircle className="w-3 h-3 text-primary" />{h}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <Button size="sm" asChild>
                    <Link to="/contact"><Briefcase className="w-3.5 h-3.5 mr-1.5" />Hire Me<ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-3.5 h-3.5 mr-1.5" />Project Demos
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-heading font-bold text-primary">9.7</div>
                  <div className="text-[10px] text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl font-heading font-bold text-primary">3+</div>
                  <div className="text-[10px] text-muted-foreground">Companies</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-clean p-4"
              >
                <service.icon className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-heading text-sm font-bold text-foreground mb-1">{service.title}</h4>
                <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
                <div className="flex flex-wrap gap-1">
                  {service.technologies.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 text-[10px] rounded bg-secondary text-muted-foreground">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};