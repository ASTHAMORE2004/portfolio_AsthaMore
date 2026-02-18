import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { RecruiterDashboard } from "@/components/portfolio/RecruiterDashboard";
import { Timeline } from "@/components/portfolio/Timeline";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { PageTransition } from "@/components/portfolio/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <RecruiterDashboard />
          <Timeline />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
