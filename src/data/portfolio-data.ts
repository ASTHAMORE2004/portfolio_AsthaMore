// Portfolio Data - Astha More
export const personalInfo = {
  name: "Astha More",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building scalable, user-centric fintech and AI-driven applications",
  email: "asthamore@email.com", // Update with your actual email
  linkedin: "https://linkedin.com/in/asthamore", // Update with your LinkedIn
  github: "https://github.com/asthamore", // Update with your GitHub
  youtube: "https://youtube.com/@asthamore", // Update with your YouTube
  leetcode: "https://leetcode.com/asthamore", // Update with your LeetCode
  location: "Chennai, India",
  phone: "+91-8982296626",
  bio: "Computer Science undergraduate with strong foundations in DSA, systems, and cloud-native development, backed by a 9.7 CGPA. Experienced in building scalable, user-centric fintech and AI-driven applications through internships at Infosys, Cognizant, and Wipro.",
  resumeUrl: "/resume/ASTHAMORE_CV.pdf",
  introVideoUrl: "",
};

export const stats = [
  { label: "CGPA", value: 9.7, suffix: "/10" },
  { label: "Internships", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Performance Improvement", value: 45, suffix: "%" },
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
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Infosys Springboard",
    role: "Android Developer Intern",
    duration: "March '25 – June '25",
    location: "Remote",
    description: "Optimized UI/UX and performance metrics for Android applications using modern development practices.",
    achievements: [
      "Optimized UI/UX and performance metrics using Redux and flexbox for state management",
      "Improved app responsiveness by 30% through performance optimization",
      "Reduced average page load time from 5 seconds to 3.75 seconds (25% reduction)",
      "Enhanced user retention through improved load times",
    ],
    impact: [
      { metric: "App Responsiveness", value: 30, suffix: "% faster" },
      { metric: "Load Time Reduction", value: 25, suffix: "%" },
      { metric: "User Retention", value: 20, suffix: "% increase" },
    ],
    technologies: ["React Native", "Redux", "Flexbox", "Android", "JavaScript"],
  },
  {
    id: "exp-2",
    company: "Cognizant",
    role: "Software Engineer Intern",
    duration: "August '24 – September '24",
    location: "IIT Roorkee",
    description: "Led the development, maintenance, and updates of the official website with performance and accessibility improvements.",
    achievements: [
      "Led development, maintenance, and updates of the official website",
      "Improved website performance by 35% through optimization",
      "Optimized responsiveness and user experience across all devices",
      "Enhanced accessibility by 30% for better inclusivity",
    ],
    impact: [
      { metric: "Performance", value: 35, suffix: "% faster" },
      { metric: "Accessibility", value: 30, suffix: "% improved" },
      { metric: "Cross-device UX", value: 100, suffix: "% responsive" },
    ],
    technologies: ["JavaScript", "HTML", "CSS", "React", "Performance Optimization"],
  },
  {
    id: "exp-3",
    company: "Wipro",
    role: "Full-Stack Web Developer",
    duration: "June '24 – July '24",
    location: "Remote",
    description: "Enhanced UI/UX design, implemented new features, and ensured cross-browser compatibility for web applications.",
    achievements: [
      "Enhanced UI/UX design and implemented new features",
      "Ensured cross-browser compatibility across major browsers",
      "Improved user engagement by 45% through UX improvements",
      "Fixed bugs, monitored analytics, and optimized responsiveness",
      "Reduced load time by 25% through optimization",
    ],
    impact: [
      { metric: "User Engagement", value: 45, suffix: "% increase" },
      { metric: "Load Time", value: 25, suffix: "% faster" },
      { metric: "Browser Support", value: 100, suffix: "%" },
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML", "Analytics"],
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
  codeSnippet?: {
    language: string;
    code: string;
    description: string;
  };
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "FinWise – Micro-investing & Smart Spending",
    description: "Scalable fintech application for automated expense tracking and personalized budgeting for students",
    longDescription: "Designed and built a scalable fintech application for automated expense tracking and personalized budgeting, processing structured financial data through modular backend services. Implemented data-driven recommendation logic and RESTful APIs, optimizing data processing and response latency. Deployed on AWS with performance optimizations including efficient queries, caching, and logging.",
    image: "",
    technologies: ["React Native", "FastAPI", "AWS S3", "MongoDB", "RESTful APIs", "Caching"],
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Data Processing", value: "Real-time" },
      { label: "Response Latency", value: "Optimized" },
      { label: "Deployment", value: "AWS" },
    ],
    codeSnippet: {
      language: "python",
      code: `# RESTful API for expense tracking
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import boto3

app = FastAPI()

class Expense(BaseModel):
    user_id: str
    amount: float
    category: str
    description: str

@app.post("/api/expenses")
async def create_expense(expense: Expense):
    # Process and store expense data
    processed = await process_expense(expense)
    
    # Generate personalized recommendations
    recommendations = await get_budget_recommendations(
        user_id=expense.user_id,
        expense_data=processed
    )
    
    return {
        "status": "success",
        "expense_id": processed.id,
        "recommendations": recommendations
    }`,
      description: "FastAPI endpoint for expense tracking with personalized recommendations",
    },
  },
  {
    id: "proj-2",
    title: "FitVerse AI – Fitness Tracker App",
    description: "Cross-platform React Native fitness app with AI chatbot achieving 82% workout adherence",
    longDescription: "Built a cross-platform React Native app with Expo and an AI chatbot. Improved rendering performance by 25% and reduced build size by 15%. Validated with 50+ users, achieving 82% workout adherence and 30% engagement boost within two weeks through UX tweaks and personalized suggestions.",
    image: "",
    technologies: ["React Native", "Expo", "AI Chatbot", "JavaScript", "UX Design"],
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Workout Adherence", value: "82%" },
      { label: "Engagement Boost", value: "+30%" },
      { label: "Rendering", value: "+25%" },
    ],
    codeSnippet: {
      language: "typescript",
      code: `// AI-powered fitness recommendation hook
const useFitnessAI = (userId: string) => {
  const [recommendations, setRecommendations] = useState<Workout[]>([]);
  
  const getPersonalizedWorkout = async (userProfile: UserProfile) => {
    const response = await aiService.generateWorkout({
      fitnessLevel: userProfile.level,
      goals: userProfile.goals,
      preferredDuration: userProfile.timeAvailable,
      equipment: userProfile.availableEquipment
    });
    
    // 82% adherence improvement through personalization
    return response.workouts.map(workout => ({
      ...workout,
      adaptiveIntensity: calculateAdaptiveIntensity(userProfile)
    }));
  };
  
  return { recommendations, getPersonalizedWorkout };
};`,
      description: "Custom React Native hook for AI-powered personalized fitness recommendations",
    },
  },
  {
    id: "proj-3",
    title: "AWS Cloud Infrastructure",
    description: "Scalable cloud architecture with S3, performance optimization, and deployment automation",
    longDescription: "Designed and implemented scalable cloud infrastructure on AWS with a focus on performance optimization, efficient queries, caching strategies, and comprehensive logging. Built production-ready systems capable of handling increasing user load with automated deployment pipelines.",
    image: "",
    technologies: ["AWS S3", "AWS EC2", "CloudFormation", "CI/CD", "Docker", "Monitoring"],
    githubUrl: "#",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Scalability", value: "Auto" },
      { label: "Cost", value: "Optimized" },
    ],
    codeSnippet: {
      language: "typescript",
      code: `// AWS S3 integration with caching layer
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Redis } from "ioredis";

class CloudStorageService {
  private s3: S3Client;
  private cache: Redis;

  async uploadWithCache(key: string, data: Buffer) {
    // Upload to S3
    await this.s3.send(new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      Body: data
    }));
    
    // Cache metadata for quick retrieval
    await this.cache.setex(
      \`meta:\${key}\`,
      3600,
      JSON.stringify({ uploadedAt: Date.now() })
    );
    
    return { success: true, key };
  }
}`,
      description: "AWS S3 storage service with Redis caching for optimized performance",
    },
  },
];

export interface Skill {
  name: string;
  category: "language" | "framework" | "database" | "cloud" | "tool" | "other";
  proficiency: number;
  projects: string[];
  icon?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "C++", category: "language", proficiency: 90, projects: [] },
  { name: "Java", category: "language", proficiency: 88, projects: [] },
  { name: "JavaScript", category: "language", proficiency: 92, projects: ["proj-1", "proj-2"] },
  { name: "Python", category: "language", proficiency: 85, projects: ["proj-1"] },
  { name: "SQL", category: "language", proficiency: 88, projects: ["proj-1"] },
  
  // Frameworks
  { name: "React Native", category: "framework", proficiency: 90, projects: ["proj-1", "proj-2"] },
  { name: "Angular", category: "framework", proficiency: 82, projects: [] },
  { name: "Flutter", category: "framework", proficiency: 78, projects: [] },
  { name: "FastAPI", category: "framework", proficiency: 85, projects: ["proj-1"] },
  { name: "Expo", category: "framework", proficiency: 88, projects: ["proj-2"] },
  
  // Databases
  { name: "MySQL", category: "database", proficiency: 88, projects: ["proj-1"] },
  { name: "MongoDB", category: "database", proficiency: 85, projects: ["proj-1"] },
  
  // Cloud
  { name: "AWS S3", category: "cloud", proficiency: 90, projects: ["proj-1", "proj-3"] },
  { name: "AWS EC2", category: "cloud", proficiency: 85, projects: ["proj-3"] },
  { name: "Vercel", category: "cloud", proficiency: 88, projects: ["proj-1", "proj-2"] },
  
  // Tools
  { name: "Git", category: "tool", proficiency: 95, projects: ["proj-1", "proj-2", "proj-3"] },
  { name: "Redux", category: "tool", proficiency: 85, projects: ["proj-1"] },
  { name: "API Testing", category: "tool", proficiency: 82, projects: ["proj-1"] },
  { name: "Unit Testing", category: "tool", proficiency: 80, projects: ["proj-1", "proj-2"] },
  
  // CS Fundamentals
  { name: "DSA", category: "other", proficiency: 92, projects: [] },
  { name: "System Design", category: "other", proficiency: 85, projects: [] },
  { name: "OOPS", category: "other", proficiency: 90, projects: [] },
  { name: "Networking", category: "other", proficiency: 82, projects: [] },
];

export const achievements = [
  {
    title: "Published Author at ICAIES'2025",
    organization: "ICAIES Conference",
    year: "2025",
    description: "Published research paper at the International Conference on AI and Emerging Systems",
  },
  {
    title: "AWS Cloud Club Captain 2025",
    organization: "SRM University",
    year: "2025",
    description: "First AWS Cloud Club Captain at SRM University, leading cloud computing initiatives",
  },
  {
    title: "Branch Topper - Top 10",
    organization: "SRM University",
    year: "2024",
    description: "Ranked among Top 10 branch toppers at SRM University",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    year: "2025",
    description: "Professional certification validating cloud architecture knowledge",
  },
  {
    title: "Computer Networking Basics",
    organization: "CISCO Networking Academy",
    year: "2025",
    description: "Certification in computer networking fundamentals",
  },
];

export const education = [
  {
    degree: "B.Tech (Computer Science and Engineering)",
    institution: "SRM Institute of Science and Technology, Chennai",
    year: "2023 – Present",
    gpa: "9.7/10.0",
    achievements: ["Branch Topper - Top 10", "AWS Cloud Club Captain"],
  },
  {
    degree: "Higher Secondary (CBSE)",
    institution: "Central School No. 1, Indore (M.P)",
    year: "2020 – 2022",
    gpa: "91%",
    achievements: [],
  },
];

export const impactMetrics = {
  performanceGain: 45,
  costReduction: 35,
  deploymentSpeed: 70,
  codeQuality: 90,
  userEngagement: 45,
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
