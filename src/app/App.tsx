import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import { Metrics } from "./components/metrics";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      {/* Smooth scroll behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0D0D0D;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #00C2FF;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #00D9FF;
        }
      `}</style>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Metrics />
      <Contact />
      <Footer />
    </div>
  );
}
