import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : null;

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage("Contact form is not configured. Add VITE_FORMSPREE_ID to .env — see README.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);
      body.append("_replyto", formData.email);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (data.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again or email directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email lewismk744@gmail.com directly.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
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
                Get In Touch
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or need security consulting? I'd love to
              hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#00C2FF]/20 to-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#00C2FF]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href="mailto:lewismk744@gmail.com"
                  className="text-gray-400 hover:text-[#00C2FF] transition-colors"
                >
                  lewismk744@gmail.com
                </a>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#A855F7]/20 to-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#A855F7]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Nairobi, Kenya</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-gradient-to-br from-[#00C2FF]/10 to-[#A855F7]/10 border border-[#00C2FF]/30"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h4 className="font-semibold mb-2">Open to:</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Freelance Projects</li>
                  <li>• Security Consulting</li>
                  <li>• Full-time Opportunities</li>
                  <li>• Collaboration</li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm border border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00C2FF] focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00C2FF] focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00C2FF] focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/20 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00C2FF] focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3 text-green-400">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message sent! I&apos;ll get back to you soon.</span>
                  </div>
                )}
                {status === "error" && errorMessage && (
                  <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-8 py-4 bg-[#00C2FF] text-[#0D0D0D] rounded-lg font-semibold hover:bg-[#00D9FF] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,194,255,0.3)] hover:shadow-[0_0_40px_rgba(0,194,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={status === "sending" ? undefined : { scale: 1.02 }}
                  whileTap={status === "sending" ? undefined : { scale: 0.98 }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
