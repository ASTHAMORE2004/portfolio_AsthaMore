import { motion } from "framer-motion";
import { useMemo } from "react";

// Generate mock GitHub activity data (365 days)
const generateHeatmapData = () => {
  const data: { date: string; count: number }[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    // Weighted random: more activity on weekdays, some patterns
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseChance = isWeekend ? 0.3 : 0.65;
    const hasActivity = Math.random() < baseChance;
    const count = hasActivity ? Math.floor(Math.random() * 8) + 1 : 0;
    data.push({
      date: date.toISOString().split("T")[0],
      count,
    });
  }
  return data;
};

const getColor = (count: number, isDark: boolean) => {
  if (count === 0) return isDark ? "hsl(222 20% 12%)" : "hsl(220 14% 93%)";
  if (count <= 2) return "hsl(217 91% 60% / 0.25)";
  if (count <= 4) return "hsl(217 91% 60% / 0.5)";
  if (count <= 6) return "hsl(217 91% 60% / 0.75)";
  return "hsl(217 91% 60%)";
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const GitHubHeatmap = () => {
  const data = useMemo(() => generateHeatmapData(), []);
  const totalContributions = data.reduce((sum, d) => sum + d.count, 0);
  const currentStreak = useMemo(() => {
    let streak = 0;
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].count > 0) streak++;
      else break;
    }
    return streak;
  }, [data]);

  // Organize into weeks (columns)
  const weeks: { date: string; count: number }[][] = [];
  let currentWeek: { date: string; count: number }[] = [];

  // Pad the first week
  const firstDayOfWeek = new Date(data[0].date).getDay();
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push({ date: "", count: -1 });
  }

  data.forEach((d) => {
    currentWeek.push(d);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  // Determine if dark mode by checking document class
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="section-label mb-4 inline-flex">Activity</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Consistency is key — here's my coding activity over the past year
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-clean p-6 max-w-4xl mx-auto"
        >
          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div>
              <div className="text-2xl font-heading font-bold text-foreground">{totalContributions}</div>
              <div className="text-xs text-muted-foreground">contributions in the last year</div>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-primary">{currentStreak}</div>
              <div className="text-xs text-muted-foreground">day current streak</div>
            </div>
          </div>

          {/* Heatmap */}
          <div className="overflow-x-auto">
            <div className="inline-flex flex-col gap-0.5 min-w-[700px]">
              {/* Month labels */}
              <div className="flex gap-0.5 mb-1 ml-8">
                {weeks.map((week, wi) => {
                  if (wi % 4 === 0 && week[0]?.date) {
                    const monthIdx = new Date(week[0].date).getMonth();
                    return (
                      <div key={wi} className="text-[10px] text-muted-foreground" style={{ width: 52 }}>
                        {months[monthIdx]}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Grid rows (7 days) */}
              {[0, 1, 2, 3, 4, 5, 6].map((dayIdx) => (
                <div key={dayIdx} className="flex items-center gap-0.5">
                  <div className="w-7 text-[10px] text-muted-foreground text-right pr-1">
                    {dayIdx === 1 ? "Mon" : dayIdx === 3 ? "Wed" : dayIdx === 5 ? "Fri" : ""}
                  </div>
                  {weeks.map((week, wi) => {
                    const cell = week[dayIdx];
                    if (!cell || cell.count === -1) {
                      return <div key={wi} className="w-[11px] h-[11px]" />;
                    }
                    return (
                      <div
                        key={wi}
                        className="w-[11px] h-[11px] rounded-[2px] transition-colors"
                        style={{ backgroundColor: getColor(cell.count, isDark) }}
                        title={`${cell.date}: ${cell.count} contributions`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-1 mt-4">
            <span className="text-[10px] text-muted-foreground mr-1">Less</span>
            {[0, 2, 4, 6, 8].map((level) => (
              <div
                key={level}
                className="w-[11px] h-[11px] rounded-[2px]"
                style={{ backgroundColor: getColor(level, isDark) }}
              />
            ))}
            <span className="text-[10px] text-muted-foreground ml-1">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};