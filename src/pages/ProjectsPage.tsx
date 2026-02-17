import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Projects } from "@/components/portfolio/Projects";
import { ProjectAnalytics } from "@/components/portfolio/ProjectAnalytics";
import { Research } from "@/components/portfolio/Research";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Projects />
        <ProjectAnalytics />
        <Research />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;