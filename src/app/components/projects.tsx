import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Portfolio",
      description:
        "This site — a React + TypeScript portfolio with animated background and full-stack sections. Built from a Figma design.",
      tech: ["React", "TypeScript", "Vite", "Tailwind", "Motion"],
      url: "https://github.com/lewiskirega/Portfolio",
      gradient: "from-[#00C2FF] to-[#0080FF]",
    },
    {
      title: "HybridGuard",
      description:
        "Security-focused project built with Python. Combines defensive tooling and automation for safer systems.",
      tech: ["Python"],
      url: "https://github.com/lewiskirega/HybridGuard",
      gradient: "from-[#A855F7] to-[#7C3AED]",
    },
    {
      title: "OpenVAS Greenbone via Docker",
      description:
        "Run OpenVAS/Greenbone Community Edition in Docker for vulnerability scanning and security assessments.",
      tech: ["Docker", "OpenVAS", "Security"],
      url: "https://github.com/lewiskirega/OpenVAS-Greenbone-Community-Edition-via-Docker",
      gradient: "from-[#00C2FF] to-[#A855F7]",
    },
    {
      title: "lewiskirega-portfolio",
      description:
        "Earlier portfolio site showcasing front-end skills with custom CSS and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/lewiskirega/lewiskirega-portfolio",
      gradient: "from-[#7C3AED] to-[#00C2FF]",
    },
    {
      title: "Lily Period Tracker",
      description:
        "Period tracking app to help users track cycles, symptoms, and health data. Built for privacy and ease of use.",
      tech: ["React", "JavaScript", "Web App"],
      url: "https://github.com/lewiskirega/lily-period-tracker",
      gradient: "from-[#00C2FF] to-[#06B6D4]",
    },
    {
      title: "Phishing Detector",
      description:
        "Security tool to detect phishing attempts and suspicious URLs. Helps users and systems identify potential threats.",
      tech: ["Python", "Security", "Detection"],
      url: "https://github.com/lewiskirega/Phishing-Detector",
      gradient: "from-[#A855F7] to-[#00C2FF]",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6">
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
                Portfolio
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A selection of secure, high-performance systems built with modern
              technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="relative h-full p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 overflow-hidden"
                  animate={{
                    rotateX: hoveredIndex === index ? 5 : 0,
                    rotateY: hoveredIndex === index ? 5 : 0,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-br ${project.gradient} opacity-10 flex items-center justify-center`}
                    >
                      <div className="text-3xl">🔒</div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00C2FF] hover:bg-[#00C2FF]/10 transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 pointer-events-none`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
