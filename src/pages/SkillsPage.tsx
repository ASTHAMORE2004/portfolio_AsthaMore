import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Skills } from "@/components/portfolio/Skills";
import { GitHubHeatmap } from "@/components/portfolio/GitHubHeatmap";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { PageTransition } from "@/components/portfolio/PageTransition";

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <Skills />
          <GitHubHeatmap />
          <OpenSource />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
