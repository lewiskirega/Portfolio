import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              Lewis <span className="text-[#00C2FF]">Kirega</span>
            </h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Securing the Web. Engineering the Future.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/lewiskirega"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/Lewis-Kirega"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Mk_Expertwriter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:lewismk744@gmail.com"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00C2FF]/10 hover:border-[#00C2FF] transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#00C2FF] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#00C2FF] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#00C2FF] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Lewis Kirega. All rights reserved. Built with security
            and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
