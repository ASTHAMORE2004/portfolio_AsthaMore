import { motion } from "framer-motion";
import { BarChart3, PieChart as PieIcon, TrendingUp, Activity } from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area,
} from "recharts";

const performanceData = [
  { company: "Wipro", performance: 45, loadTime: 25, engagement: 45 },
  { company: "Cognizant", performance: 35, loadTime: 30, engagement: 30 },
  { company: "Infosys", performance: 30, loadTime: 25, engagement: 30 },
];

const techDistribution = [
  { name: "React / RN", value: 35 },
  { name: "Python / FastAPI", value: 25 },
  { name: "Cloud / AWS", value: 15 },
  { name: "AI / ML", value: 15 },
  { name: "DevOps", value: 10 },
];

const skillRadar = [
  { skill: "Frontend", level: 92 },
  { skill: "Backend", level: 85 },
  { skill: "Cloud", level: 78 },
  { skill: "AI/ML", level: 80 },
  { skill: "Mobile", level: 88 },
  { skill: "System Design", level: 75 },
];

const projectGrowth = [
  { month: "Jan", impact: 20 },
  { month: "Mar", impact: 35 },
  { month: "May", impact: 50 },
  { month: "Jul", impact: 65 },
  { month: "Sep", impact: 78 },
  { month: "Nov", impact: 90 },
];

const COLORS = [
  "hsl(217, 91%, 60%)",
  "hsl(200, 100%, 50%)",
  "hsl(270, 70%, 60%)",
  "hsl(150, 70%, 50%)",
  "hsl(40, 90%, 55%)",
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
      <p className="text-sm font-medium text-foreground">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="text-xs text-muted-foreground">
          {entry.name}: <span className="text-primary font-semibold">{entry.value}%</span>
        </p>
      ))}
    </div>
  );
};

export const ProjectAnalytics = () => {
  return (
    <section id="analytics" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Visual Insights</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-driven breakdown of my technical contributions and growth metrics
          </p>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Performance Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-elevated p-6 rounded-2xl"
          >
            <h3 className="font-heading text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Internship Performance
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Improvement metrics across companies</p>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={performanceData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 20%, 14%)" />
                <XAxis dataKey="company" tick={{ fill: "hsl(222, 10%, 55%)", fontSize: 12 }} axisLine={false} />
                <YAxis tick={{ fill: "hsl(222, 10%, 55%)", fontSize: 12 }} axisLine={false} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="performance" name="Performance" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="engagement" name="Engagement" fill="hsl(200, 100%, 50%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Tech Distribution Pie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated p-6 rounded-2xl"
          >
            <h3 className="font-heading text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <PieIcon className="w-5 h-5 text-primary" />
              Tech Stack Distribution
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Expertise allocation across domains</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={techDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >
                  {techDistribution.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [`${value}%`, "Share"]}
                  contentStyle={{
                    background: "hsl(222, 47%, 6%)",
                    border: "1px solid hsl(222, 20%, 14%)",
                    borderRadius: "8px",
                    color: "hsl(0, 0%, 98%)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {techDistribution.map((item, i) => (
                <div key={item.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS[i] }} />
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skill Radar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-elevated p-6 rounded-2xl"
          >
            <h3 className="font-heading text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Skill Proficiency Radar
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Core competencies across domains</p>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={skillRadar}>
                <PolarGrid stroke="hsl(222, 20%, 14%)" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(222, 10%, 55%)", fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="hsl(217, 91%, 60%)"
                  fill="hsl(217, 91%, 60%)"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Growth Area Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated p-6 rounded-2xl"
          >
            <h3 className="font-heading text-lg font-bold text-foreground mb-1 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Impact Growth Trajectory
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Cumulative project impact over time</p>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={projectGrowth}>
                <defs>
                  <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 20%, 14%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(222, 10%, 55%)", fontSize: 12 }} axisLine={false} />
                <YAxis tick={{ fill: "hsl(222, 10%, 55%)", fontSize: 12 }} axisLine={false} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="impact"
                  name="Impact"
                  stroke="hsl(217, 91%, 60%)"
                  fill="url(#impactGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
