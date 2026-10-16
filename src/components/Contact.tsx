import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, Sparkles, AlertCircle } from "lucide-react";
import { artistInfo } from "../data";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in your name, email, and message before sending.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    // Set submitted state for prototype demonstration
    setSubmitted(true);
    setErrorMsg("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(artistInfo.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-secondaryBg relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-accent text-xs font-mono uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-primaryText">
            Have a story worth telling?
          </h2>
          <p className="text-base sm:text-lg text-mutedText font-light leading-relaxed">
            For music, film, creative collaborations, and professional inquiries, let's start a conversation.
          </p>
        </div>

        {/* Two-Column Grid: Direct Info + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Status */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="p-8 rounded-2xl bg-surfaceBg border border-surfaceBorder space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                  Direct Inquiries
                </span>
                <h3 className="font-serif text-2xl font-bold text-primaryText">
                  Official Contact
                </h3>
                <p className="text-xs text-mutedText font-light leading-relaxed">
                  Whether planning an original soundtrack, cinematic film direction, or artistic co-creation, reach out directly.
                </p>
              </div>

              {/* Email Box with One-Click Copy */}
              <div className="p-4 rounded-xl bg-background border border-surfaceBorder flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-primaryText truncate">
                    {artistInfo.contactEmail}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg border border-surfaceBorder hover:border-accent text-xs font-mono text-mutedText hover:text-accent flex items-center space-x-1.5 transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Response Time */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-surfaceBorder text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-mutedText/70 block">Location</span>
                  <span className="text-primaryText font-serif">{artistInfo.location}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-mutedText/70 block">Availability</span>
                  <span className="text-accent font-serif">Open for Projects</span>
                </div>
              </div>
            </div>

            {/* Prototype notice badge */}
            <div className="p-4 rounded-xl bg-background/50 border border-surfaceBorder text-xs text-mutedText space-y-1">
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Prototype Notice
              </p>
              <p className="font-light">
                This inquiry form is currently configured as a high-fidelity frontend prototype. You can also send messages straight via email using the button above.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-surfaceBg border border-surfaceBorder shadow-2xl text-left">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/40 flex items-center justify-center text-accent">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primaryText">
                      Message Received
                    </h3>
                    <p className="text-sm text-mutedText max-w-md font-light">
                      Thank you for reaching out, <strong>{formData.name}</strong>. In production, this connects to the artist's official inbox at {artistInfo.contactEmail}.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full border border-surfaceBorder hover:border-accent text-xs font-mono uppercase tracking-wider text-mutedText hover:text-accent transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {errorMsg && (
                      <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center space-x-2 text-xs text-red-200">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-[11px] font-mono uppercase tracking-wider text-mutedText block"
                        >
                          Your Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Elena Roy"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-surfaceBorder text-primaryText placeholder-mutedText/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-[11px] font-mono uppercase tracking-wider text-mutedText block"
                        >
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="elena@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-surfaceBorder text-primaryText placeholder-mutedText/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-[11px] font-mono uppercase tracking-wider text-mutedText block"
                      >
                        Project Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Original Score Collaboration / Film Project"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-surfaceBorder text-primaryText placeholder-mutedText/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-[11px] font-mono uppercase tracking-wider text-mutedText block"
                      >
                        Message & Details <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, timeline, and vision..."
                        className="w-full px-4 py-3 rounded-xl bg-background border border-surfaceBorder text-primaryText placeholder-mutedText/40 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accentHover text-background font-medium tracking-wider uppercase text-xs rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-accent/15"
                      >
                        <span>Send Collaboration Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
