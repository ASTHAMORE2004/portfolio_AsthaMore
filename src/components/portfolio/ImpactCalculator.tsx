import { motion } from "framer-motion";
import { Calculator, TrendingUp, Zap, DollarSign, Clock, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { impactMetrics } from "@/data/portfolio-data";

const baseMetrics = [
  { id: "performance", label: "Performance Optimization", icon: Zap, base: 40, unit: "%" },
  { id: "cost", label: "Cost Reduction", icon: DollarSign, base: 35, unit: "%" },
  { id: "deployment", label: "Deployment Speed", icon: Clock, base: 70, unit: "%" },
  { id: "quality", label: "Code Quality Score", icon: TrendingUp, base: 90, unit: "%" },
];

export const ImpactCalculator = () => {
  const [projectScale, setProjectScale] = useState(50); // 1-100 scale
  const [teamSize, setTeamSize] = useState(5);
  const [duration, setDuration] = useState(6); // months

  const calculateProjectedImpact = (baseValue: number) => {
    const scaleFactor = 1 + (projectScale / 100) * 0.5;
    const teamFactor = 1 + Math.log10(teamSize) * 0.2;
    const durationFactor = Math.min(1 + (duration / 12) * 0.3, 1.5);
    return Math.round(baseValue * scaleFactor * teamFactor * durationFactor);
  };

  const calculateROI = () => {
    const baseROI = 250;
    return Math.round(baseROI * (1 + projectScale / 100) * (1 + teamSize / 10));
  };

  const calculateTimeSaved = () => {
    const baseHours = 200;
    return Math.round(baseHours * (projectScale / 50) * (duration / 6));
  };

  return (
    <section id="impact" className="py-24 bg-card/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Tool</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Impact <span className="gradient-text">Calculator</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Project the potential gains based on my past performance metrics
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Controls */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-6 rounded-2xl"
            >
              <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Project Parameters
              </h3>

              {/* Project Scale */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Complexity Scale
                  <span className="float-right text-primary font-bold">{projectScale}%</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={projectScale}
                  onChange={(e) => setProjectScale(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_10px_hsl(174_84%_50%/0.5)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Simple</span>
                  <span>Complex</span>
                </div>
              </div>

              {/* Team Size */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Team Size
                  <span className="float-right text-primary font-bold">{teamSize} members</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_10px_hsl(174_84%_50%/0.5)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Solo</span>
                  <span>Large Team</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Duration
                  <span className="float-right text-primary font-bold">{duration} months</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_10px_hsl(174_84%_50%/0.5)]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 month</span>
                  <span>2 years</span>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="text-center p-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold gradient-text">{calculateROI()}%</div>
                  <div className="text-xs text-muted-foreground">Projected ROI</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-primary/10">
                  <div className="text-2xl font-bold gradient-text">{calculateTimeSaved()}h</div>
                  <div className="text-xs text-muted-foreground">Time Saved</div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {baseMetrics.map((metric, index) => {
                const projectedValue = calculateProjectedImpact(metric.base);
                const Icon = metric.icon;
                
                return (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-elevated p-4 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{metric.label}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold gradient-text">{projectedValue}{metric.unit}</span>
                        <span className="block text-xs text-muted-foreground">
                          Base: {metric.base}{metric.unit}
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(projectedValue, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}

              <p className="text-sm text-muted-foreground text-center pt-4">
                * Projections based on historical performance data from previous projects
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
