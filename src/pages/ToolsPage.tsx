import { Footer } from "@/components/portfolio/Footer";
import { QuickFitScore } from "@/components/portfolio/QuickFitScore";
import { TechStackComparison } from "@/components/portfolio/TechStackComparison";
import { PageTransition } from "@/components/portfolio/PageTransition";

const ToolsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <QuickFitScore />
        <TechStackComparison />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ToolsPage;
