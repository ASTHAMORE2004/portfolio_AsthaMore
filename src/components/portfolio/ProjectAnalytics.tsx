import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Activity } from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { company: "Wipro", performance: 45, engagement: 45 },
  { company: "Cognizant", performance: 35, engagement: 30 },
  { company: "Infosys", performance: 30, engagement: 30 },
];

const skillRadar = [
  { skill: "Frontend", level: 92 },
  { skill: "Backend", level: 85 },
  { skill: "Cloud", level: 78 },
  { skill: "AI/ML", level: 80 },
  { skill: "Mobile", level: 88 },
  { skill: "Design", level: 75 },
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
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="section-label mb-4 inline-flex">
            <BarChart3 className="w-3 h-3" />
            Analytics
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Project <span className="gradient-text">Analytics</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-clean p-5"
          >
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />Internship Performance
            </h3>
            <p className="text-xs text-muted-foreground mb-4">Improvement metrics across companies</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={performanceData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="company" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} axisLine={false} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} axisLine={false} unit="%" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="performance" name="Performance" fill="hsl(var(--primary))" radius={[3, 3, 0, 0]} />
                <Bar dataKey="engagement" name="Engagement" fill="hsl(200, 100%, 50%)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="card-clean p-5"
          >
            <h3 className="font-heading text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />Skill Proficiency
            </h3>
            <p className="text-xs text-muted-foreground mb-4">Core competencies across domains</p>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={skillRadar}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Proficiency" dataKey="level" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.15} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};