import { Footer } from "@/components/portfolio/Footer";
import { RecruiterDashboard } from "@/components/portfolio/RecruiterDashboard";
import { Timeline } from "@/components/portfolio/Timeline";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { PageTransition } from "@/components/portfolio/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <RecruiterDashboard />
        <Timeline />
        <Testimonials />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
