import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { AchievementCards } from "@/components/portfolio/AchievementCards";
import { PageTransition } from "@/components/portfolio/PageTransition";

const AchievementsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <AchievementCards />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AchievementsPage;
