import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { AIChatbot } from "@/components/portfolio/AIChatbot";
import { PageTransition } from "@/components/portfolio/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Hero />
        <Footer />
        <AIChatbot />
      </div>
    </PageTransition>
  );
};

export default Index;
