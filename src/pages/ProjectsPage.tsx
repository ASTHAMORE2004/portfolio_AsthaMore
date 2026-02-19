import { Footer } from "@/components/portfolio/Footer";
import { Projects } from "@/components/portfolio/Projects";
import { ProjectAnalytics } from "@/components/portfolio/ProjectAnalytics";
import { Research } from "@/components/portfolio/Research";
import { PageTransition } from "@/components/portfolio/PageTransition";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Projects />
        <ProjectAnalytics />
        <Research />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
