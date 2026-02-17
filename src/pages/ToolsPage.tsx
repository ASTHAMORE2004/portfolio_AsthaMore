import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { QuickFitScore } from "@/components/portfolio/QuickFitScore";
import { TechStackComparison } from "@/components/portfolio/TechStackComparison";

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <QuickFitScore />
        <TechStackComparison />
      </div>
      <Footer />
    </div>
  );
};

export default ToolsPage;