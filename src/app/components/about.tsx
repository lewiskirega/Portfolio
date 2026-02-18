import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Calendar, Code, Shield, Trophy } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const timeline = [
    {
      icon: Code,
      year: "2020",
      title: "Started Web Development",
      description: "Began journey into front-end and back-end development with modern web technologies",
    },
    {
      icon: Shield,
      year: "2022",
      title: "Full-Stack & Cybersecurity Focus",
      description: "Building APIs and scalable apps alongside security practices and vulnerability assessment",
    },
    {
      icon: Trophy,
      year: "2024",
      title: "Developer & Cybersecurity Expert",
      description: "Full-stack systems and security consulting for clients worldwide",
    },
    {
      icon: Calendar,
      year: "2026",
      title: "Current",
      description: "Full-stack development, security audits, and secure system design",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Photo */}
            <div className="relative">
              <motion.div
                className="relative aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lewis.png"
                  alt="Lewis Kirega"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay for brand alignment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-6 -right-6 px-6 py-4 rounded-xl bg-[#0D0D0D]/90 backdrop-blur-md border border-[#00C2FF]/30"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-[#00C2FF]">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-xl bg-[#0D0D0D]/90 backdrop-blur-md border border-[#A855F7]/30"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="text-3xl font-bold text-[#A855F7]">5+ Years</div>
                <div className="text-sm text-gray-400">Experience</div>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div>
              <motion.div
                className="inline-block mb-4 px-4 py-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/5"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <span className="text-[#00C2FF] text-sm font-medium">About Me</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Full-Stack Development & Cybersecurity
              </h2>

              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Based in Nairobi, Kenya, I'm a Front-End and Back-End Developer
                and Cybersecurity Expert. I build full-stack web applications
                and help secure them—from UI and APIs to vulnerability
                assessment, secure coding, and security best practices.
              </p>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                I specialize in modern JavaScript frameworks, Node.js, REST and
                GraphQL APIs, databases, and responsive front-ends—as well as
                secure coding, penetration testing, and security audits. Every
                project gets both strong engineering and a security-minded
                approach.
              </p>

              {/* Timeline */}
              <div className="space-y-6">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C2FF]/20 to-[#A855F7]/20 border border-white/10 flex items-center justify-center group-hover:border-[#00C2FF] transition-all duration-300">
                        <Icon className="w-5 h-5 text-[#00C2FF]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-semibold text-[#00C2FF]">
                            {item.year}
                          </span>
                          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                        </div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
