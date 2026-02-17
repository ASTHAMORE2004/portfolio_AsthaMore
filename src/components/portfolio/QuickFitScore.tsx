import { motion } from "framer-motion";
import { useState } from "react";
import { Target, CheckCircle, Circle } from "lucide-react";

interface RoleSkills {
  role: string;
  required: string[];
  nice: string[];
}

const roles: RoleSkills[] = [
  {
    role: "Frontend Developer",
    required: ["JavaScript", "React Native", "CSS", "HTML", "Redux", "Git"],
    nice: ["Angular", "Flutter", "Unit Testing", "API Testing"],
  },
  {
    role: "Backend Developer",
    required: ["Python", "FastAPI", "MySQL", "MongoDB", "RESTful APIs", "Git"],
    nice: ["AWS", "Docker", "System Design"],
  },
  {
    role: "Full-Stack Developer",
    required: ["JavaScript", "React Native", "Python", "FastAPI", "MongoDB", "MySQL", "Git"],
    nice: ["AWS", "Redux", "Docker", "Angular", "Flutter"],
  },
  {
    role: "Mobile Developer",
    required: ["React Native", "JavaScript", "Redux", "Git"],
    nice: ["Flutter", "Expo", "Unit Testing"],
  },
];

// Astha's actual skills
const asthaSkills = new Set([
  "C++", "Java", "JavaScript", "Python",
  "React Native", "Angular", "Flutter", "FastAPI",
  "AWS", "AWS S3", "MySQL", "MongoDB", "Vercel",
  "Git", "Docker", "Redux", "VS Code",
  "DSA & System Design", "Operating Systems", "OOPS", "Networking",
  "HTML", "CSS", "RESTful APIs", "Expo", "Unit Testing", "API Testing",
  "System Design",
]);

export const QuickFitScore = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const getScore = (role: RoleSkills) => {
    const requiredMatch = role.required.filter((s) => asthaSkills.has(s)).length;
    const niceMatch = role.nice.filter((s) => asthaSkills.has(s)).length;
    const total = requiredMatch / role.required.length * 70 + (niceMatch / role.nice.length) * 30;
    return Math.round(total);
  };

  const selected = roles.find((r) => r.role === selectedRole);

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
            <Target className="w-3 h-3" />
            For Recruiters
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">
            Quick Fit <span className="gradient-text">Score</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a role to see how well my skills match your requirements
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Role Selection */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {roles.map((role) => {
              const score = getScore(role);
              const isSelected = selectedRole === role.role;
              return (
                <button
                  key={role.role}
                  onClick={() => setSelectedRole(role.role)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <div className="text-2xl font-heading font-bold text-primary mb-1">{score}%</div>
                  <div className="text-xs font-medium text-foreground">{role.role}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Breakdown */}
          {selected && (
            <motion.div
              key={selected.role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-clean p-6"
            >
              <h3 className="font-heading font-semibold text-foreground mb-1">{selected.role}</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Match score: <span className="text-primary font-bold">{getScore(selected)}%</span>
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Required Skills
                  </h4>
                  <div className="space-y-2">
                    {selected.required.map((skill) => {
                      const has = asthaSkills.has(skill);
                      return (
                        <div key={skill} className="flex items-center gap-2 text-sm">
                          {has ? (
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
                          )}
                          <span className={has ? "text-foreground" : "text-muted-foreground"}>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Nice to Have
                  </h4>
                  <div className="space-y-2">
                    {selected.nice.map((skill) => {
                      const has = asthaSkills.has(skill);
                      return (
                        <div key={skill} className="flex items-center gap-2 text-sm">
                          {has ? (
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-muted-foreground/40 flex-shrink-0" />
                          )}
                          <span className={has ? "text-foreground" : "text-muted-foreground"}>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};