import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', { body: formData });
      if (error) throw error;
      setIsSubmitted(true);
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch {
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have an opportunity or project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card-clean p-5">
              <h3 className="font-heading text-sm font-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: personalInfo.linkedin },
                  { icon: Github, label: "GitHub", value: "View code", href: personalInfo.github },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary transition-colors group">
                    <div className="p-2 rounded-lg bg-primary/8 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">{label}</p>
                      <p className="text-sm text-foreground font-medium">{value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-3 p-2.5">
                  <div className="p-2 rounded-lg bg-primary/8">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-clean p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-foreground">Available for opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Currently looking for internships and full-time roles.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card-clean p-5">
              <h3 className="font-heading text-sm font-bold text-foreground mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder="Your name" />
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder="Email" />
                </div>
                <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground" placeholder="Company (optional)" />
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground" placeholder="Your message..." />
                <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                  {isSubmitting ? "Sending..." : isSubmitted ? <><CheckCircle className="w-4 h-4 mr-1.5" />Sent!</> : <><Send className="w-4 h-4 mr-1.5" />Send Message</>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};