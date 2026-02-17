import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Skills } from "@/components/portfolio/Skills";
import { GitHubHeatmap } from "@/components/portfolio/GitHubHeatmap";
import { OpenSource } from "@/components/portfolio/OpenSource";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Skills />
        <GitHubHeatmap />
        <OpenSource />
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;