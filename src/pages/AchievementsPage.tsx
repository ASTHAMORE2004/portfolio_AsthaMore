import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { AchievementCards } from "@/components/portfolio/AchievementCards";

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AchievementCards />
      </div>
      <Footer />
    </div>
  );
};

export default AchievementsPage;