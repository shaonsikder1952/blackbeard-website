import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";

// Elegant diagonal line component
const DiagonalLine = ({ 
  x1, y1, x2, y2,
  duration, 
  delay,
  opacity = 0.08
}: { 
  x1: number; y1: number; x2: number; y2: number;
  duration: number; 
  delay: number;
  opacity?: number;
}) => (
  <motion.line
    x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="url(#blueGradient)"
    strokeWidth="1"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ 
      pathLength: [0, 1],
      opacity: [0, opacity, opacity * 0.7]
    }}
    transition={{
      duration,
      delay,
      ease: "easeOut",
    }}
  />
);

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-24 pb-16 bg-background overflow-hidden">
      {/* Elegant diagonal lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210, 60%, 70%)" stopOpacity="0" />
              <stop offset="30%" stopColor="hsl(210, 60%, 65%)" stopOpacity="0.6" />
              <stop offset="70%" stopColor="hsl(220, 55%, 60%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(230, 50%, 55%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Primary diagonal lines - 45 degree angle */}
          <DiagonalLine x1={-100} y1={300} x2={400} y2={-200} duration={2} delay={0.2} opacity={0.06} />
          <DiagonalLine x1={100} y1={500} x2={600} y2={0} duration={2.2} delay={0.5} opacity={0.08} />
          <DiagonalLine x1={300} y1={600} x2={800} y2={100} duration={2.4} delay={0.8} opacity={0.05} />
          <DiagonalLine x1={500} y1={700} x2={1000} y2={200} duration={2.1} delay={0.3} opacity={0.07} />
          <DiagonalLine x1={700} y1={800} x2={1200} y2={300} duration={2.3} delay={0.6} opacity={0.06} />
          <DiagonalLine x1={900} y1={900} x2={1400} y2={400} duration={2} delay={0.4} opacity={0.05} />
          
          {/* Secondary offset lines */}
          <DiagonalLine x1={-50} y1={150} x2={350} y2={-250} duration={2.5} delay={1} opacity={0.04} />
          <DiagonalLine x1={400} y1={800} x2={900} y2={300} duration={2.6} delay={1.2} opacity={0.04} />
          <DiagonalLine x1={800} y1={850} x2={1300} y2={350} duration={2.4} delay={1.1} opacity={0.03} />
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 50%, 94%), transparent)'
        }}
      />
      
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge with glow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-brand-primary/10 border border-brand-primary/20 shadow-[0_0_20px_hsl(245,75%,60%,0.15)]"
        >
          <motion.div 
            className="w-2 h-2 bg-brand-primary rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-brand-primary">Now available on Chrome Web Store</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
        >
          Rewrite any text
          <br />
          <motion.span 
            className="text-brand-primary inline-block"
            animate={{ 
              textShadow: [
                "0 0 20px hsl(245, 75%, 60%, 0)",
                "0 0 30px hsl(245, 75%, 60%, 0.3)",
                "0 0 20px hsl(245, 75%, 60%, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            in your voice
          </motion.span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-xl mx-auto mb-10"
        >
          Blackbeard is an AI Chrome extension that rewrites text to sound like you. 
          Works everywhere you write.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="brand" size="lg" className="group h-12 px-6 text-base shadow-[0_4px_20px_hsl(245,75%,60%,0.35)] hover:shadow-[0_6px_30px_hsl(245,75%,60%,0.45)] transition-shadow duration-300">
                <Chrome className="w-5 h-5 mr-2" />
                Install on Chrome
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </a>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-foreground-muted"
          >
            Free tier • 5 rewrites/day
          </motion.span>
        </motion.div>

        {/* Trust pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {['Works on Gmail', 'Works on LinkedIn', 'Works on Twitter'].map((item, index) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2 rounded-full bg-surface border border-border text-sm text-foreground-muted hover:border-brand-primary/30 hover:text-foreground transition-colors cursor-default"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
