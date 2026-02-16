import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio-data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const learningJourney = [
  {
    semester: "Sem 1",
    period: "Aug '23",
    dsa: 15,
    web: 10,
    cloud: 0,
    ai: 0,
    milestone: "Started B.Tech CSE at SRM",
  },
  {
    semester: "Sem 2",
    period: "Jan '24",
    dsa: 30,
    web: 25,
    cloud: 5,
    ai: 5,
    milestone: "C++, Java fundamentals",
  },
  {
    semester: "Sem 3",
    period: "Jun '24",
    dsa: 45,
    web: 50,
    cloud: 15,
    ai: 10,
    milestone: "Wipro Internship",
  },
  {
    semester: "Sem 4",
    period: "Aug '24",
    dsa: 55,
    web: 65,
    cloud: 25,
    ai: 20,
    milestone: "Cognizant @ IIT Roorkee",
  },
  {
    semester: "Sem 5",
    period: "Mar '25",
    dsa: 70,
    web: 80,
    cloud: 45,
    ai: 40,
    milestone: "Infosys Intern · AWS Captain",
  },
  {
    semester: "Sem 6",
    period: "Aug '25",
    dsa: 80,
    web: 88,
    cloud: 65,
    ai: 60,
    milestone: "AWS Certified · ICAIES Published",
  },
  {
    semester: "Now",
    period: "2026",
    dsa: 88,
    web: 92,
    cloud: 75,
    ai: 72,
    milestone: "Full-stack & AI ready",
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const data = learningJourney.find((d) => d.semester === label);
  return (
    <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-lg text-sm">
      <p className="font-semibold text-foreground mb-1">{data?.milestone}</p>
      <p className="text-xs text-muted-foreground mb-2">{data?.period}</p>
      {payload.map((entry: any) => (
        <div key={entry.name} className="flex justify-between gap-4">
          <span style={{ color: entry.color }}>{entry.name}</span>
          <span className="font-mono text-foreground">{entry.value}%</span>
        </div>
      ))}
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">💻 Tech Stack</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit refined through internships and real-world projects
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {techStack.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bento-card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary/60 text-secondary-foreground border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Engineering Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="bento-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  📈 Engineering Growth Trajectory
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Skill progression across 4 years of B.Tech — from fundamentals to production-ready
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full border border-border/50">
                  9.7 CGPA · 3 Internships · AWS Certified
                </span>
              </div>
            </div>

            <div className="h-[320px] sm:h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={learningJourney}
                  margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="gradDSA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradWeb" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradCloud" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradAI" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34d399" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis
                    dataKey="semester"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="dsa"
                    name="DSA & Fundamentals"
                    stroke="hsl(var(--primary))"
                    fill="url(#gradDSA)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="web"
                    name="Web & Mobile Dev"
                    stroke="#22d3ee"
                    fill="url(#gradWeb)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="cloud"
                    name="Cloud & DevOps"
                    stroke="#a78bfa"
                    fill="url(#gradCloud)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="ai"
                    name="AI / ML"
                    stroke="#34d399"
                    fill="url(#gradAI)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Milestone markers */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Wipro", sub: "Full-Stack Dev", period: "Jun '24" },
                { label: "Cognizant", sub: "SWE @ IIT Roorkee", period: "Aug '24" },
                { label: "Infosys", sub: "Android Dev", period: "Mar '25" },
                { label: "AWS Certified", sub: "Cloud Practitioner", period: "2025" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-3 rounded-lg bg-secondary/40 border border-border/30"
                >
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                  <p className="text-xs text-primary mt-1">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
