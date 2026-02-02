import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import LogoMarquee from "./LogoMarquee";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start pt-32 pb-24 overflow-hidden bg-white">
      {/* Precise Diagonal Grid Background - Matching Screenshot Aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(45deg, #e2e8f0 0.5px, transparent 0.5px), 
                           linear-gradient(-45deg, #e2e8f0 0.5px, transparent 0.5px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Premium Top Center Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-primary/[0.04] blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* TOP SECTION: Centered Text & CTA - EXACT MATCH TO SCREENSHOT */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full bg-[#f0f7ff] border border-[#e0e7ff] shadow-sm transform-gpu"
          >
            <div className="w-2 h-2 bg-[#3b82f6] rounded-full shadow-[0_0_8px_#3b82f6]" />
            <span className="text-[12px] font-bold text-[#3b82f6] tracking-tight">Now available on Chrome Web Store</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[88px] font-extrabold tracking-tight text-[#1a1c2d] leading-[1.05] mb-8"
          >
            Rewrite any text <br className="hidden sm:block" />
            <span className="text-brand-primary">
              in your voice
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-500 leading-relaxed max-w-3xl mb-14"
          >
            Blackbeard is an AI Chrome extension that rewrites text to <br className="hidden sm:block" />
            sound like you. Works everywhere you write.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full"
          >
            <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
              <Button variant="brand" size="lg" className="h-16 px-12 text-xl shadow-[0_20px_40px_-5px_hsla(245,75%,60%,0.3)] hover:scale-[1.03] transition-all duration-300 transform-gpu group">
                <Chrome className="mr-3 w-6 h-6" />
                Install on Chrome
                <ArrowRight className="ml-3 w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </a>
            <div className="text-base font-semibold text-slate-400 tracking-tight">
              Free tier • 5 rewrites/day
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Side-by-Side Media Display */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-[1400px] mx-auto overflow-visible">
          {/* LEFT: Video Frame with Precise Vertical Crop Only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative z-10"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-black/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] bg-white">
              {/* Sleek Browser Bar Aesthetic */}
              <div className="flex items-center gap-2 px-8 py-4 bg-[#fcfdfe] border-b border-black/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
              </div>

              {/* VIDEO CONTAINER: PRECISION VERTICAL ZOOM TO HIDE INTERNAL BLACK LINES */}
              <div className="relative aspect-[16/8.3] bg-white overflow-hidden flex items-center justify-center translate-z-0">
                <video
                  src="/hero-demo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[100%] h-[105%] object-cover transform-gpu scale-y-[1.06] scale-x-[1.02]"
                />

                {/* Edge Softening Gradients - Subtler to avoid washing out UI */}
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-20" />
                <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-20" />
              </div>
            </div>

            {/* Blending glow behind component */}
            <div className="absolute -inset-20 bg-brand-primary/[0.04] blur-[100px] rounded-full -z-10" />
          </motion.div>

          {/* RIGHT: Logo Flow Section (Wisprflow Inspired) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="relative flex flex-col items-center justify-center min-h-[500px] overflow-visible"
          >
            <div className="mb-8 text-[12px] font-bold text-slate-400 tracking-[0.3em] uppercase pointer-events-none select-none">
              Rewrite works on
            </div>

            <div className="w-full flex items-center justify-center">
              <LogoMarquee />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
