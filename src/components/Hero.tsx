import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import LogoMarquee from "./LogoMarquee";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 overflow-hidden bg-background">
      {/* Subtle diagonal grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(45deg, hsl(var(--border)) 0.5px, transparent 0.5px), 
                           linear-gradient(-45deg, hsl(var(--border)) 0.5px, transparent 0.5px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/[0.03] blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full bg-brand-primary/5 border border-brand-primary/20"
          >
            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
            <span className="text-[10px] sm:text-xs font-semibold text-brand-primary">Now available on Chrome Web Store</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-5"
          >
            Rewrite any text{" "}
            <span className="text-brand-primary">in your voice</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl mb-6 sm:mb-8 px-2"
          >
            Blackbeard is an AI Chrome extension that rewrites text to sound like you. Works everywhere you write.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
              <Button variant="brand" size="lg" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base shadow-brand hover:scale-[1.02] transition-transform group">
                <Chrome className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Install on Chrome
                <ArrowRight className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Button>
            </a>
            <span className="text-xs sm:text-sm text-foreground-muted">Free tier • 5 rewrites/day</span>
          </motion.div>
        </div>

        {/* Video Section - Full width on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
             className="relative w-full max-w-[360px] sm:max-w-[440px] mx-auto lg:mx-0 lg:flex-1"
          >
            {/* Video container - tighter crop to hide black bars */}
             <div className="relative aspect-[16/8.6] overflow-hidden rounded-xl sm:rounded-2xl border border-border/60 shadow-[0_20px_40px_-12px_hsl(0_0%_0%_/0.12)] bg-surface">
              <video
                src="/hero-demo.mov"
                autoPlay
                loop
                muted
                playsInline
                 className="absolute inset-0 h-full w-full object-cover object-[50%_42%] transform-gpu scale-[1.14] sm:scale-[1.12] lg:scale-[1.10]"
              />
            </div>
          </motion.div>

          {/* Logo Marquee Section - Single instance for all screen sizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-center justify-center py-4 lg:py-8 lg:flex-1"
          >
            <div className="text-[10px] sm:text-[11px] font-semibold text-foreground-muted tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Rewrite works on
            </div>
            <LogoMarquee />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;