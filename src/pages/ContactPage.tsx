import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Contact } from "@/components/portfolio/Contact";
import { Freelancing } from "@/components/portfolio/Freelancing";
import { PageTransition } from "@/components/portfolio/PageTransition";

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <Freelancing />
          <Contact />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ContactPage;
