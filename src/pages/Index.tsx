import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { ImpactCalculator } from "@/components/portfolio/ImpactCalculator";
import { RecruiterDashboard } from "@/components/portfolio/RecruiterDashboard";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Research } from "@/components/portfolio/Research";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { Freelancing } from "@/components/portfolio/Freelancing";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { AIChatbot } from "@/components/portfolio/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="about" className="scroll-mt-20">
        <RecruiterDashboard />
      </section>
      <Timeline />
      <Projects />
      <Skills />
      <Research />
      <OpenSource />
      <Testimonials />
      <Freelancing />
      <ImpactCalculator />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
