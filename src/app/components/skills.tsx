import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Code2, Database, Lock, Server } from "lucide-react";

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      icon: Code2,
      title: "Front-End Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
      ],
      color: "#00C2FF",
    },
    {
      icon: Server,
      title: "Back-End & Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "C++", level: 75 },
        { name: "Node.js", level: 82 },
      ],
      color: "#A855F7",
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      skills: [
        { name: "Secure Coding", level: 90 },
        { name: "Vulnerability Testing", level: 87 },
        { name: "Network Security", level: 85 },
        { name: "Penetration Testing", level: 83 },
      ],
      color: "#00C2FF",
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: [
        { name: "SQL", level: 88 },
        { name: "Git/GitHub", level: 93 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 85 },
      ],
      color: "#A855F7",
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[#00C2FF] text-sm font-medium">
                Skills & Technologies
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A comprehensive skill set spanning front-end and back-end
              development, cybersecurity, databases, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                        border: `1px solid ${category.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                            }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
