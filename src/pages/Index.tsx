import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { Footer } from "@/components/portfolio/Footer";
import { AIChatbot } from "@/components/portfolio/AIChatbot";
import { PageTransition } from "@/components/portfolio/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Footer />
        <AIChatbot />
      </div>
    </PageTransition>
  );
};

export default Index;
