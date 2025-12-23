import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Timeline } from "@/components/portfolio/Timeline";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { ImpactCalculator } from "@/components/portfolio/ImpactCalculator";
import { RecruiterDashboard } from "@/components/portfolio/RecruiterDashboard";
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
      <ImpactCalculator />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
