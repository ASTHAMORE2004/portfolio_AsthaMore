import { Footer } from "@/components/portfolio/Footer";
import { Skills } from "@/components/portfolio/Skills";
import { GitHubHeatmap } from "@/components/portfolio/GitHubHeatmap";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { PageTransition } from "@/components/portfolio/PageTransition";

const SkillsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Skills />
        <GitHubHeatmap />
        <OpenSource />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
