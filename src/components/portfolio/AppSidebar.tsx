import { Home, FolderOpen, User, Trophy, BookOpen, Wrench, Mail, Download, Sun, Moon, Github, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { personalInfo } from "@/data/portfolio-data";
import profilePhoto from "@/assets/profile-photo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Skills", url: "/skills", icon: Wrench },
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Guestbook", url: "/guestbook", icon: BookOpen },
  { title: "Tools", url: "/tools", icon: Wrench },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50">
      <div className="p-3 flex items-center gap-2.5 border-b border-border/50">
        <img
          src={profilePhoto}
          alt="Astha More"
          className="w-8 h-8 rounded-full object-cover border-2 border-primary/30 shrink-0"
        />
        {!collapsed && (
          <div className="overflow-hidden">
            <span className="font-heading font-bold text-sm text-foreground block truncate">
              Astha More
            </span>
            <span className="text-[10px] text-muted-foreground truncate block">Software Engineer</span>
          </div>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = item.url === "/" ? location.pathname === "/" : location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <Link
                        to={item.url}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/50 p-3">
        <div className={`flex ${collapsed ? "flex-col" : "flex-row"} items-center gap-1.5`}>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          {!collapsed && (
            <>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="w-3 h-3" />
                Resume
              </a>
            </>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
