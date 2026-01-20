// Portfolio Data - Astha More (Resume-Accurate)
export const personalInfo = {
  name: "Astha More",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building scalable, user-centric fintech and AI-driven applications",
  email: "asthauday2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/astha-more-13765722a",
  github: "https://github.com/ASTHAMORE2004",
  youtube: "https://www.youtube.com/@AsthaMoreSDE4002",
  leetcode: "https://leetcode.com/asthamore",
  location: "Chennai, India",
  phone: "+91-8982296626",
  bio: "Computer Science undergraduate at SRM with a 9.7 CGPA. Experienced in building scalable fintech and AI-driven applications through internships at Infosys, Cognizant, and Wipro.",
  resumeUrl: "/resume/ASTHAMORE_CV.pdf",
  introVideoUrl: "",
};

export const stats = [
  { label: "CGPA", value: 9.7, suffix: "", icon: "🎓" },
  { label: "Internships", value: 3, suffix: "+", icon: "💼" },
  { label: "Projects", value: 10, suffix: "+", icon: "🚀" },
  { label: "Performance Boost", value: 45, suffix: "%", icon: "📈" },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  impact: { metric: string; value: number; suffix: string }[];
  technologies: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Infosys Springboard",
    role: "Android Developer Intern",
    duration: "Mar '25 – Jun '25",
    location: "Remote",
    description: "Optimized UI/UX and performance metrics for Android applications using modern development practices.",
    achievements: [
      "Optimized UI/UX using Redux and flexbox for state management",
      "Improved app responsiveness by 30%",
      "Reduced page load time from 5s to 3.75s (25% reduction)",
    ],
    impact: [
      { metric: "Responsiveness", value: 30, suffix: "%" },
      { metric: "Load Time", value: 25, suffix: "% faster" },
    ],
    technologies: ["React Native", "Redux", "Flexbox", "JavaScript"],
  },
  {
    id: "exp-2",
    company: "Cognizant",
    role: "Software Engineer Intern",
    duration: "Aug '24 – Sep '24",
    location: "IIT Roorkee",
    description: "Led development and optimization of the official website with performance and accessibility improvements.",
    achievements: [
      "Led website development and maintenance",
      "Improved performance by 35%",
      "Enhanced accessibility by 30%",
    ],
    impact: [
      { metric: "Performance", value: 35, suffix: "%" },
      { metric: "Accessibility", value: 30, suffix: "% better" },
    ],
    technologies: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    id: "exp-3",
    company: "Wipro",
    role: "Full-Stack Web Developer",
    duration: "Jun '24 – Jul '24",
    location: "Remote",
    description: "Enhanced UI/UX design, implemented new features, and ensured cross-browser compatibility.",
    achievements: [
      "Improved user engagement by 45%",
      "Ensured cross-browser compatibility",
      "Reduced load time by 25%",
    ],
    impact: [
      { metric: "Engagement", value: 45, suffix: "%" },
      { metric: "Load Time", value: 25, suffix: "% faster" },
    ],
    technologies: ["React", "JavaScript", "CSS", "Analytics"],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  featured?: boolean;
  codeSnippet?: {
    language: string;
    code: string;
    description: string;
  };
}

// ONLY projects from resume
export const projects: Project[] = [
  {
    id: "proj-1",
    title: "FinWise",
    description: "Micro-investing & Smart Spending for Students",
    longDescription: "Designed and built a scalable fintech application for automated expense tracking and personalized budgeting, processing structured financial data through modular backend services. Implemented data-driven recommendation logic and RESTful APIs, optimizing data processing and response latency. Deployed on AWS with performance optimizations.",
    image: "",
    technologies: ["React Native", "FastAPI", "AWS S3", "MongoDB", "RESTful APIs"],
    liveUrl: "https://github.com/ASTHAMORE2004/FinWise---Microinvesting-Smart-Spending-for-Students",
    githubUrl: "https://github.com/ASTHAMORE2004/FinWise---Microinvesting-Smart-Spending-for-Students",
    featured: true,
    metrics: [
      { label: "Data Processing", value: "Real-time" },
      { label: "Backend", value: "FastAPI" },
      { label: "Cloud", value: "AWS S3" },
    ],
    codeSnippet: {
      language: "python",
      code: `# RESTful API for expense tracking
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Expense(BaseModel):
    user_id: str
    amount: float
    category: str

@app.post("/api/expenses")
async def create_expense(expense: Expense):
    processed = await process_expense(expense)
    recommendations = await get_recommendations(
        expense.user_id, processed
    )
    return {"expense_id": processed.id, 
            "recommendations": recommendations}`,
      description: "FastAPI endpoint for expense tracking with personalized recommendations",
    },
  },
  {
    id: "proj-2",
    title: "FitVerse AI",
    description: "Fitness Tracker App with AI Chatbot",
    longDescription: "Built a cross-platform React Native app with Expo and an AI chatbot. Improved rendering performance by 25% and reduced build size by 15%. Validated with 50+ users, achieving 82% workout adherence and 30% engagement boost within two weeks through UX tweaks and personalized suggestions.",
    image: "",
    technologies: ["React Native", "Expo", "AI Chatbot", "JavaScript"],
    liveUrl: "https://github.com/ASTHAMORE2004/FitVerse",
    githubUrl: "https://github.com/ASTHAMORE2004/FitVerse",
    featured: true,
    metrics: [
      { label: "Workout Adherence", value: "82%" },
      { label: "Engagement Boost", value: "+30%" },
      { label: "Users Validated", value: "50+" },
    ],
    codeSnippet: {
      language: "typescript",
      code: `// AI-powered fitness recommendation
const useFitnessAI = (userId: string) => {
  const [recommendations, setRecommendations] = 
    useState<Workout[]>([]);
  
  const getPersonalizedWorkout = async (
    profile: UserProfile
  ) => {
    const response = await aiService.generate({
      fitnessLevel: profile.level,
      goals: profile.goals,
      duration: profile.timeAvailable
    });
    
    return response.workouts;
  };
  
  return { recommendations, getPersonalizedWorkout };
};`,
      description: "Custom React Native hook for AI-powered fitness recommendations",
    },
  },
];

// Tech stack from resume - organized by category
export interface TechCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "CS Fundamentals",
    icon: "🧠",
    skills: ["DSA & System Design", "Operating Systems", "OOPS", "Networking"],
  },
  {
    name: "Languages",
    icon: "💻",
    skills: ["C++", "Java", "JavaScript", "Python"],
  },
  {
    name: "Frameworks",
    icon: "⚡",
    skills: ["React Native", "Angular", "Flutter", "FastAPI"],
  },
  {
    name: "Database & Cloud",
    icon: "☁️",
    skills: ["AWS S3", "MySQL", "MongoDB", "Vercel"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: ["Git", "API Testing", "Unit Testing", "Redux"],
  },
];

export const achievements = [
  {
    title: "Published Author",
    subtitle: "ICAIES'2025",
    icon: "📄",
    description: "Published research paper at International Conference on AI and Emerging Systems",
  },
  {
    title: "AWS Cloud Club Captain",
    subtitle: "SRM University 2025",
    icon: "☁️",
    description: "First AWS Cloud Club Captain at SRM University",
  },
  {
    title: "Branch Topper",
    subtitle: "Top 10 at SRM",
    icon: "🏆",
    description: "Ranked among Top 10 branch toppers",
  },
  {
    title: "AWS Certified",
    subtitle: "Cloud Practitioner",
    icon: "🎖️",
    description: "Professional cloud architecture certification",
  },
  {
    title: "CISCO Certified",
    subtitle: "Networking Basics",
    icon: "🌐",
    description: "Computer networking fundamentals certification",
  },
];

export const education = [
  {
    degree: "B.Tech Computer Science",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai",
    year: "2023 – Present",
    gpa: "9.7/10.0",
    highlights: ["Branch Topper - Top 10", "AWS Cloud Club Captain"],
  },
  {
    degree: "Higher Secondary (CBSE)",
    institution: "Central School No. 1",
    location: "Indore, M.P",
    year: "2020 – 2022",
    gpa: "91%",
    highlights: [],
  },
];

export const impactMetrics = {
  performanceGain: 45,
  loadTimeReduction: 25,
  userEngagement: 45,
  accessibilityImprovement: 30,
  workoutAdherence: 82,
};

// For AI Chatbot context
export const resumeContext = `
Astha More - Computer Science Student & Software Developer

SUMMARY:
Computer Science undergraduate at SRM Institute of Science and Technology with a 9.7 CGPA. Experienced in building scalable, user-centric fintech and AI-driven applications through internships at Infosys, Cognizant, and Wipro.

EDUCATION:
- B.Tech Computer Science at SRM University, Chennai (2023-Present) - CGPA: 9.7/10
- Higher Secondary (CBSE) from Central School No. 1, Indore - 91%

SKILLS:
- CS Fundamentals: DSA & System Design, Operating Systems, OOPS, Networking
- Languages: C++, Java, JavaScript, Python
- Frameworks: React Native, Angular, Flutter, FastAPI
- Databases: AWS S3, MySQL, MongoDB
- Tools: Git, Vercel, API Testing, Unit Testing

EXPERIENCE:
1. Infosys Springboard - Android Developer Intern (March-June 2025)
   - Improved app responsiveness by 30% using Redux and flexbox
   - Reduced load time by 25% (5s to 3.75s)

2. Cognizant - Software Engineer Intern at IIT Roorkee (Aug-Sep 2024)
   - Improved website performance by 35%
   - Enhanced accessibility by 30%

3. Wipro - Full-Stack Web Developer (June-July 2024)
   - Improved user engagement by 45%
   - Reduced load time by 25%

PROJECTS:
1. FinWise - Micro-investing & Smart Spending for Students
   - Fintech app with automated expense tracking and personalized budgeting
   - Built with React Native, FastAPI, AWS S3, MongoDB

2. FitVerse AI - Fitness Tracker App
   - Cross-platform React Native app with AI chatbot
   - 82% workout adherence, 30% engagement boost with 50+ users

ACHIEVEMENTS:
- Published author at ICAIES'2025
- First AWS Cloud Club Captain 2025 at SRM University
- Top 10 branch topper at SRM University
- AWS Certified Cloud Practitioner (2025)
- CISCO Computer Networking Basics certification

CONTACT:
- Phone: +91-8982296626
- Location: Chennai, India
- Available for internships and full-time opportunities
`;
