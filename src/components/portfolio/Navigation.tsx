import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Linkedin, Github, Youtube, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { useTheme } from "@/components/ThemeProvider";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Tools", href: "/tools" },
  { label: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={profilePhoto}
                alt="Astha More"
                className="w-8 h-8 rounded-full object-cover border-2 border-primary/30"
              />
              <span className="font-heading font-bold text-foreground hidden sm:block">
                Astha<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/8"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <Button size="sm" className="h-8 text-xs" asChild>
                <a href={personalInfo.resumeUrl} download>
                  <Download className="w-3 h-3 mr-1.5" />
                  Resume
                </a>
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 left-4 right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/8"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <div className="flex gap-2">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={personalInfo.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
                <Button size="sm" className="h-8 text-xs" asChild>
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="w-3 h-3 mr-1.5" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};