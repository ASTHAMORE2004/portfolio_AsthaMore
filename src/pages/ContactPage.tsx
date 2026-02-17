import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Contact } from "@/components/portfolio/Contact";
import { Freelancing } from "@/components/portfolio/Freelancing";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Freelancing />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;