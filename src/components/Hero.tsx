import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import LogoMarquee from "./LogoMarquee";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-16 overflow-hidden bg-background">
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

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Hero Content - Tighter spacing */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-brand-primary/5 border border-brand-primary/20"
          >
            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
            <span className="text-xs font-semibold text-brand-primary">Now available on Chrome Web Store</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-5"
          >
            Rewrite any text{" "}
            <span className="text-brand-primary">in your voice</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground-muted leading-relaxed max-w-xl mb-8"
          >
            Blackbeard is an AI Chrome extension that rewrites text to sound like you. Works everywhere you write.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
              <Button variant="brand" size="lg" className="h-12 px-8 text-base shadow-brand hover:scale-[1.02] transition-transform group">
                <Chrome className="mr-2 w-5 h-5" />
                Install on Chrome
                <ArrowRight className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </Button>
            </a>
            <span className="text-sm text-foreground-muted">Free tier • 5 rewrites/day</span>
          </motion.div>
        </div>

        {/* Video + Logo Marquee Section */}
        <div className="relative max-w-4xl mx-auto">
          {/* Video Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-surface">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-brand-primary/50" />
                </div>
              </div>

              {/* Video - Original aspect ratio */}
              <div className="relative aspect-video bg-background">
                <video
                  src="/hero-demo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Glow behind video */}
            <div className="absolute -inset-8 bg-brand-primary/[0.03] blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Logo Marquee - Right side of video */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-0 top-0 bottom-0 w-24 flex flex-col items-center justify-center -mr-28 hidden lg:flex"
          >
            <div className="text-[10px] font-semibold text-foreground-muted tracking-widest uppercase mb-4 rotate-90 origin-center whitespace-nowrap">
              Works on
            </div>
            <LogoMarquee />
          </motion.div>
        </div>

        {/* Mobile Logo Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 lg:hidden"
        >
          <div className="text-[10px] font-semibold text-foreground-muted tracking-widest uppercase text-center mb-3">
            Works on
          </div>
          <LogoMarquee horizontal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
