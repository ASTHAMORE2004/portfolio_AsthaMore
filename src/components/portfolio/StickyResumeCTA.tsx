import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export const StickyResumeCTA = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.a
      href={personalInfo.resumeUrl}
      download
      style={{ opacity }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download className="w-4 h-4" />
      <span className="hidden sm:inline">Resume</span>
    </motion.a>
  );
};
