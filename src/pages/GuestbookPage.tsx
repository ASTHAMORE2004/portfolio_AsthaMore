import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Guestbook } from "@/components/portfolio/Guestbook";

const GuestbookPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Guestbook />
      </div>
      <Footer />
    </div>
  );
};

export default GuestbookPage;