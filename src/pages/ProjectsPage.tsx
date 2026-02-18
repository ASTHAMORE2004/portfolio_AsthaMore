import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Projects } from "@/components/portfolio/Projects";
import { ProjectAnalytics } from "@/components/portfolio/ProjectAnalytics";
import { Research } from "@/components/portfolio/Research";
import { PageTransition } from "@/components/portfolio/PageTransition";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-16">
          <Projects />
          <ProjectAnalytics />
          <Research />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
