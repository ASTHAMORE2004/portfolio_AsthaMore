// Portfolio Data - Update this with your actual information
export const personalInfo = {
  name: "Astha More",
  title: "Full-Stack Developer & Software Engineer",
  tagline: "Building scalable solutions with modern technologies",
  email: "asthamore@email.com",
  linkedin: "https://linkedin.com/in/asthamore",
  github: "https://github.com/asthamore",
  location: "India",
  phone: "+91 XXXXXXXXXX",
  bio: "Passionate software engineer with expertise in full-stack development, data engineering, and cloud technologies. I specialize in building scalable applications and data pipelines that drive business value.",
  resumeUrl: "/resume/ASTHAMORE_CV.pdf",
  introVideoUrl: "", // Add your intro video URL here
};

export const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Performance Improvement", value: 40, suffix: "%" },
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
    company: "Tech Company",
    role: "Software Engineer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Led development of scalable microservices and data pipelines, improving system performance and reliability.",
    achievements: [
      "Designed and implemented RESTful APIs serving 10M+ requests/day",
      "Reduced database query times by 60% through optimization",
      "Built real-time data streaming pipeline using Apache Kafka",
      "Mentored junior developers and conducted code reviews",
    ],
    impact: [
      { metric: "API Response Time", value: 60, suffix: "% faster" },
      { metric: "System Uptime", value: 99.9, suffix: "%" },
      { metric: "Code Coverage", value: 90, suffix: "%" },
    ],
    technologies: ["Python", "Java", "AWS", "Kafka", "PostgreSQL", "Docker"],
  },
  {
    id: "exp-2",
    company: "Startup Inc",
    role: "Full-Stack Developer",
    duration: "2020 - 2022",
    location: "Hybrid",
    description: "Developed end-to-end features for a SaaS platform serving 50K+ users.",
    achievements: [
      "Built responsive React dashboards with real-time data visualization",
      "Implemented authentication system with OAuth 2.0",
      "Developed CI/CD pipelines reducing deployment time by 70%",
      "Created automated testing framework improving bug detection",
    ],
    impact: [
      { metric: "User Engagement", value: 45, suffix: "% increase" },
      { metric: "Deployment Time", value: 70, suffix: "% faster" },
      { metric: "Bug Detection", value: 80, suffix: "% improvement" },
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "GitHub Actions"],
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
    title: "Real-Time Analytics Dashboard",
    description: "High-performance analytics platform processing 1M+ events daily",
    longDescription: "Built a comprehensive analytics dashboard that processes and visualizes real-time data streams. Features include custom chart components, automated report generation, and predictive analytics.",
    image: "",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Redis", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Events/Day", value: "1M+" },
      { label: "Latency", value: "<100ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    codeSnippet: {
      language: "typescript",
      code: `// Real-time data streaming hook
const useRealTimeData = (channel: string) => {
  const [data, setData] = useState<DataPoint[]>([]);
  
  useEffect(() => {
    const ws = new WebSocket(\`wss://api/stream/\${channel}\`);
    
    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(prev => [...prev.slice(-99), newData]);
    };
    
    return () => ws.close();
  }, [channel]);
  
  return { data, isConnected: true };
};`,
      description: "Custom React hook for real-time WebSocket data streaming",
    },
  },
  {
    id: "proj-2",
    title: "ML-Powered Recommendation Engine",
    description: "Personalized recommendation system with 40% higher engagement",
    longDescription: "Developed a machine learning recommendation engine using collaborative filtering and content-based approaches. Integrated with production systems serving millions of users.",
    image: "",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "Kubernetes"],
    githubUrl: "#",
    metrics: [
      { label: "Engagement", value: "+40%" },
      { label: "Accuracy", value: "92%" },
      { label: "Response", value: "50ms" },
    ],
    codeSnippet: {
      language: "python",
      code: `# Hybrid recommendation model
class HybridRecommender:
    def __init__(self, collaborative_model, content_model):
        self.collab = collaborative_model
        self.content = content_model
        
    def predict(self, user_id: str, n_items: int = 10):
        collab_scores = self.collab.predict(user_id)
        content_scores = self.content.predict(user_id)
        
        # Weighted ensemble
        combined = 0.7 * collab_scores + 0.3 * content_scores
        return combined.argsort()[-n_items:][::-1]`,
      description: "Hybrid ML recommendation combining collaborative & content-based filtering",
    },
  },
  {
    id: "proj-3",
    title: "Microservices Architecture Platform",
    description: "Scalable microservices handling 10M+ requests/day",
    longDescription: "Architected and implemented a microservices platform with service mesh, distributed tracing, and automated scaling. Reduced infrastructure costs by 35%.",
    image: "",
    technologies: ["Go", "gRPC", "Kubernetes", "Istio", "Prometheus", "Grafana"],
    githubUrl: "#",
    metrics: [
      { label: "Requests/Day", value: "10M+" },
      { label: "Cost Saved", value: "35%" },
      { label: "Scaling", value: "Auto" },
    ],
    codeSnippet: {
      language: "go",
      code: `// gRPC service with circuit breaker
func (s *Service) GetUser(ctx context.Context, 
    req *pb.UserRequest) (*pb.UserResponse, error) {
    
    result, err := s.circuitBreaker.Execute(func() (interface{}, error) {
        return s.userRepo.FindByID(ctx, req.UserId)
    })
    
    if err != nil {
        return nil, status.Error(codes.Internal, err.Error())
    }
    
    return toProtoUser(result.(*User)), nil
}`,
      description: "Resilient gRPC service with circuit breaker pattern",
    },
  },
];

export interface Skill {
  name: string;
  category: "language" | "framework" | "database" | "cloud" | "tool" | "other";
  proficiency: number; // 1-100
  projects: string[]; // project IDs
  icon?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "language", proficiency: 95, projects: ["proj-2"] },
  { name: "TypeScript", category: "language", proficiency: 90, projects: ["proj-1"] },
  { name: "JavaScript", category: "language", proficiency: 90, projects: ["proj-1"] },
  { name: "Go", category: "language", proficiency: 80, projects: ["proj-3"] },
  { name: "Java", category: "language", proficiency: 85, projects: [] },
  { name: "SQL", category: "language", proficiency: 90, projects: ["proj-1", "proj-2"] },
  
  // Frameworks
  { name: "React", category: "framework", proficiency: 92, projects: ["proj-1"] },
  { name: "Node.js", category: "framework", proficiency: 88, projects: ["proj-1"] },
  { name: "FastAPI", category: "framework", proficiency: 85, projects: ["proj-2"] },
  { name: "Spring Boot", category: "framework", proficiency: 80, projects: [] },
  { name: "TensorFlow", category: "framework", proficiency: 75, projects: ["proj-2"] },
  
  // Databases
  { name: "PostgreSQL", category: "database", proficiency: 90, projects: ["proj-1"] },
  { name: "MongoDB", category: "database", proficiency: 85, projects: [] },
  { name: "Redis", category: "database", proficiency: 88, projects: ["proj-1", "proj-2"] },
  
  // Cloud
  { name: "AWS", category: "cloud", proficiency: 85, projects: ["proj-1", "proj-2"] },
  { name: "Kubernetes", category: "cloud", proficiency: 82, projects: ["proj-2", "proj-3"] },
  { name: "Docker", category: "cloud", proficiency: 90, projects: ["proj-1", "proj-2", "proj-3"] },
  
  // Tools
  { name: "Git", category: "tool", proficiency: 95, projects: ["proj-1", "proj-2", "proj-3"] },
  { name: "Kafka", category: "tool", proficiency: 80, projects: [] },
  { name: "GraphQL", category: "tool", proficiency: 78, projects: [] },
];

export const achievements = [
  {
    title: "Best Performance Award",
    organization: "Tech Company",
    year: "2023",
    description: "Recognized for exceptional contributions to platform scalability",
  },
  {
    title: "Hackathon Winner",
    organization: "TechFest 2022",
    year: "2022",
    description: "First place in 48-hour coding challenge among 200+ participants",
  },
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    year: "2022",
    description: "Professional certification for cloud architecture",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University Name",
    year: "2020",
    gpa: "8.5/10",
    achievements: ["Dean's List", "Technical Club Lead"],
  },
];

export const impactMetrics = {
  performanceGain: 40,
  costReduction: 35,
  deploymentSpeed: 70,
  codeQuality: 90,
  userEngagement: 45,
};
