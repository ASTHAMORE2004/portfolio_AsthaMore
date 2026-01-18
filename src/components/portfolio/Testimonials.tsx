import { motion } from "framer-motion";
import { Quote, Star, Linkedin } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Tech Lead",
    company: "Infosys Springboard",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=rajesh",
    content: "Astha demonstrated exceptional skills during her internship. Her ability to optimize UI/UX and improve app responsiveness by 30% was impressive. She's a quick learner with great attention to detail.",
    rating: 5,
    linkedin: "#",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Project Manager",
    company: "Cognizant",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=priya",
    content: "Working with Astha at IIT Roorkee was a pleasure. She led the website development with professionalism and improved our platform's performance by 35%. Highly recommend her for any development role.",
    rating: 5,
    linkedin: "#",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Senior Developer",
    company: "Wipro",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=amit",
    content: "Astha's full-stack capabilities are remarkable. She improved user engagement by 45% through her UI/UX enhancements. Her problem-solving skills and dedication make her a valuable team member.",
    rating: 5,
    linkedin: "#",
  },
  {
    id: 4,
    name: "Dr. Sunita Verma",
    role: "Professor",
    company: "SRM University",
    image: "https://api.dicebear.com/7.x/personas/svg?seed=sunita",
    content: "As the AWS Cloud Club Captain, Astha has shown exceptional leadership. Her 9.7 CGPA and research publication at ICAIES'2025 reflect her academic excellence and technical prowess.",
    rating: 5,
    linkedin: "#",
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
