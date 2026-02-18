import { motion } from "motion/react";
import { AnimatedBackground } from "./animated-background";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/5 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#00C2FF] text-sm font-medium">
              Nairobi, Kenya 🇰🇪
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            I Build <span className="text-[#00C2FF]">Secure</span>.{" "}
            <span className="text-[#A855F7]">Intelligent</span>.
            <br />
            High-Performance Systems.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto">
            Front-End & Back-End Development · Cybersecurity Expert
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm Lewis Kirega, a Front-End and Back-End Developer and Cybersecurity
            Expert. I build secure, full-stack web applications and help protect
            systems—from pixel-perfect interfaces and APIs to vulnerability
            assessment and secure coding practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-[#00C2FF] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00D9FF] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:shadow-[0_0_40px_rgba(0,194,255,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-[#00C2FF]/50 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Me
            </motion.button>
          </div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/lewiskirega"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/Lewis-Kirega"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:lewismk744@gmail.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-[#00C2FF] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
