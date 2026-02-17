import { motion } from "framer-motion";
import { useState } from "react";
import { achievements } from "@/data/portfolio-data";
import { Trophy, Award, BookOpen, Cloud, Shield, Star, CheckCircle } from "lucide-react";

const achievementIcons = [BookOpen, Cloud, Trophy, Award, Shield];
const achievementColors = [
  "from-blue-500/20 to-blue-600/10 border-blue-500/20",
  "from-amber-500/20 to-amber-600/10 border-amber-500/20",
  "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20",
  "from-purple-500/20 to-purple-600/10 border-purple-500/20",
  "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20",
];

const iconColors = [
  "text-blue-500",
  "text-amber-500",
  "text-emerald-500",
  "text-purple-500",
  "text-cyan-500",
];

export const AchievementCards = () => {
  const [unlockedIds, setUnlockedIds] = useState<Set<number>>(new Set());

  const handleUnlock = (index: number) => {
    setUnlockedIds((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  return (
    <section className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">
            <Trophy className="w-3 h-3" />
            Achievements
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Achievement <span className="gradient-text">Unlocked</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click each card to unlock — milestones earned through hard work and dedication
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[index % achievementIcons.length];
            const isUnlocked = unlockedIds.has(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => handleUnlock(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-500 ${
                    isUnlocked
                      ? `bg-gradient-to-br ${achievementColors[index % achievementColors.length]}`
                      : "bg-card border-border hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2.5 rounded-xl transition-all duration-500 ${
                        isUnlocked
                          ? `bg-background/50 ${iconColors[index % iconColors.length]}`
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {isUnlocked ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-heading font-semibold text-sm transition-colors ${
                          isUnlocked ? "text-foreground" : "text-foreground"
                        }`}>
                          {achievement.title}
                        </h3>
                        {isUnlocked && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                          </motion.div>
                        )}
                      </div>
                      <p className="text-xs text-primary font-medium mt-0.5">{achievement.subtitle}</p>

                      {isUnlocked && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-muted-foreground mt-2 leading-relaxed"
                        >
                          {achievement.description}
                        </motion.p>
                      )}

                      {!isUnlocked && (
                        <p className="text-[10px] text-muted-foreground mt-2 italic">
                          Click to unlock
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Star className="w-4 h-4 text-primary" />
            <span>{unlockedIds.size} / {achievements.length} achievements unlocked</span>
          </div>
          <div className="w-48 h-1.5 bg-secondary rounded-full mx-auto mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${(unlockedIds.size / achievements.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};