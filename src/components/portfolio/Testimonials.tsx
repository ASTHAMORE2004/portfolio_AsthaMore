import { motion } from "framer-motion";
import { Quote, Star, Linkedin } from "lucide-react";
import tracyWangImage from "@/assets/tracy-wang.png";

const testimonials = [
  {
    id: 1,
    name: "Tracy Wang",
    role: "AWS - Community Program Manager",
    company: "Amazon Web Services",
    image: tracyWangImage,
    content: "Aastha joined the AWS Cloud Club program in 2025 May, she has gotten the Gold Badge after her joining. She approaches her work with clarity, responsibility, and a strong willingness to learn. She may not seek attention, but her consistency, problem-solving mindset, and ability to deliver make her someone you can rely on when things matter.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/tracy-wang",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Tech Lead",
    company: "Infosys Springboard",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Astha demonstrated exceptional skills during her internship. Her ability to optimize UI/UX and improve app responsiveness by 30% was impressive. She's a quick learner with great attention to detail.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/astha-more-13765722a",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Project Manager",
    company: "Cognizant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Working with Astha at IIT Roorkee was a pleasure. She led the website development with professionalism and improved our platform's performance by 35%. Highly recommend her.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/astha-more-13765722a",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Testimonials</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-clean p-5"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic line-clamp-3">
                "{t.content}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full bg-secondary object-cover" />
                  <div>
                    <h4 className="font-medium text-xs text-foreground">{t.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{t.role} · {t.company}</p>
                  </div>
                </div>
                <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};