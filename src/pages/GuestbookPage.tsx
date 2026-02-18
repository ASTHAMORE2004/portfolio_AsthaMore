import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Guestbook } from "@/components/portfolio/Guestbook";
import { PageTransition } from "@/components/portfolio/PageTransition";

const GuestbookPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <Guestbook />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default GuestbookPage;
