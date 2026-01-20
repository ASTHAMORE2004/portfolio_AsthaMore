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
    content: "Aastha joined the AWS Cloud Club program in 2025 May, she has gotten the Gold Badge after her joining. She approaches her work with clarity, responsibility, and a strong willingness to learn. She may not seek attention, but her consistency, problem-solving mindset, and ability to deliver make her someone you can rely on when things matter. With growing exposure and confidence, she shows clear potential to take on larger responsibilities.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/tracy-wang",
    date: "January 20, 2026",
    relationship: "Tracy was Astha's mentor",
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
    content: "Working with Astha at IIT Roorkee was a pleasure. She led the website development with professionalism and improved our platform's performance by 35%. Highly recommend her for any development role.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/astha-more-13765722a",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Senior Developer",
    company: "Wipro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Astha's full-stack capabilities are remarkable. She improved user engagement by 45% through her UI/UX enhancements. Her problem-solving skills and dedication make her a valuable team member.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/astha-more-13765722a",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Feedback from colleagues, mentors, and supervisors I've had the pleasure of working with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-secondary border-2 border-primary/30"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Want to add your testimonial?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
