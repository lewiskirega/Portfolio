import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useInView } from "./use-in-view";
import { useEffect } from "react";
import { Award, GitBranch, Shield, Users } from "lucide-react";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [count, value, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export function Metrics() {
  const [ref, isInView] = useInView({ threshold: 0.5 });

  const metrics = [
    {
      icon: GitBranch,
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      description: "Secure applications delivered",
      color: "#00C2FF",
    },
    {
      icon: Shield,
      value: 200,
      suffix: "+",
      label: "Security Tests Conducted",
      description: "Vulnerabilities identified & fixed",
      color: "#A855F7",
    },
    {
      icon: Users,
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      description: "Worldwide partnerships",
      color: "#00C2FF",
    },
    {
      icon: Award,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      description: "Building secure systems",
      color: "#A855F7",
    },
  ];

  return (
    <section id="metrics" className="relative py-32 px-6">
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
                By The Numbers
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Track Record of Excellence
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Proven results in secure web development and cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 text-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Background gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${metric.color}, transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="inline-flex w-12 h-12 mb-4 rounded-lg items-center justify-center mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${metric.color}20, ${metric.color}10)`,
                        border: `1px solid ${metric.color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: metric.color }} />
                    </div>

                    {/* Counter */}
                    <div
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{ color: metric.color }}
                    >
                      {isInView && <Counter value={metric.value} />}
                      {metric.suffix}
                    </div>

                    {/* Label */}
                    <div className="text-lg font-semibold mb-1">
                      {metric.label}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500">{metric.description}</p>
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
