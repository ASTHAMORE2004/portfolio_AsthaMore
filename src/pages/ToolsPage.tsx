import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { QuickFitScore } from "@/components/portfolio/QuickFitScore";
import { TechStackComparison } from "@/components/portfolio/TechStackComparison";
import { PageTransition } from "@/components/portfolio/PageTransition";

const ToolsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <QuickFitScore />
          <TechStackComparison />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ToolsPage;
