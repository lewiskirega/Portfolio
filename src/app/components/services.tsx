import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Code, Shield, Search, Lock } from "lucide-react";

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Code,
      title: "Secure Web Development",
      description:
        "Building modern, responsive web applications with security-first principles. Clean code, optimized performance, and bulletproof architecture.",
      features: [
        "Custom Web Applications",
        "React/Next.js Development",
        "Secure API Integration",
        "Performance Optimization",
      ],
      color: "#00C2FF",
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments to identify vulnerabilities before attackers do. Detailed reports with actionable recommendations.",
      features: [
        "Web Application Testing",
        "Network Security Analysis",
        "Social Engineering Tests",
        "Detailed Vulnerability Reports",
      ],
      color: "#A855F7",
    },
    {
      icon: Shield,
      title: "Vulnerability Assessment",
      description:
        "Systematic evaluation of security weaknesses in your systems. Proactive identification and remediation of potential threats.",
      features: [
        "Code Security Audits",
        "Infrastructure Review",
        "Compliance Assessment",
        "Risk Analysis",
      ],
      color: "#00C2FF",
    },
    {
      icon: Lock,
      title: "System Hardening",
      description:
        "Strengthening your systems against attacks. Implementation of security best practices and defense-in-depth strategies.",
      features: [
        "Server Configuration",
        "Access Control Setup",
        "Encryption Implementation",
        "Security Monitoring",
      ],
      color: "#A855F7",
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 bg-[#0A0A0A]">
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
                What I Offer
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Security & Services
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive security solutions and web development services to
              protect and empower your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}40, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="inline-flex w-14 h-14 mb-6 rounded-xl items-center justify-center transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        border: `1px solid ${service.color}30`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7 transition-transform group-hover:scale-110"
                        style={{ color: service.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.1 + featureIndex * 0.05,
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
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
