import { Footer } from "@/components/portfolio/Footer";
import { AchievementCards } from "@/components/portfolio/AchievementCards";
import { PageTransition } from "@/components/portfolio/PageTransition";

const AchievementsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <AchievementCards />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AchievementsPage;
