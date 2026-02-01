import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";

// Animated flowing line component
const FlowingLine = ({ 
  d, 
  duration, 
  delay, 
  strokeWidth = 1.5,
  opacity = 0.15
}: { 
  d: string; 
  duration: number; 
  delay: number;
  strokeWidth?: number;
  opacity?: number;
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke="url(#lineGradient)"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ 
      pathLength: [0, 1, 1, 0],
      opacity: [0, opacity, opacity, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.4, 0.6, 1]
    }}
  />
);

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-24 pb-16 bg-background overflow-hidden">
      {/* Animated flowing lines background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(245, 75%, 60%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(245, 75%, 60%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(245, 75%, 60%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(245, 75%, 70%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(245, 75%, 70%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(245, 75%, 70%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Elegant flowing curves */}
          <FlowingLine 
            d="M-100,200 Q200,100 400,250 T800,200 T1300,150" 
            duration={12} 
            delay={0}
            strokeWidth={2}
            opacity={0.12}
          />
          <FlowingLine 
            d="M-50,400 Q150,300 350,400 T750,350 T1250,400" 
            duration={15} 
            delay={2}
            strokeWidth={1.5}
            opacity={0.1}
          />
          <FlowingLine 
            d="M1300,100 Q1000,200 800,150 T400,200 T-100,250" 
            duration={14} 
            delay={4}
            strokeWidth={1.5}
            opacity={0.08}
          />
          <FlowingLine 
            d="M-100,600 Q200,500 500,550 T900,500 T1300,550" 
            duration={16} 
            delay={1}
            strokeWidth={1}
            opacity={0.06}
          />
          <FlowingLine 
            d="M1300,700 Q1000,600 700,650 T300,600 T-100,700" 
            duration={13} 
            delay={3}
            strokeWidth={1.5}
            opacity={0.1}
          />
          
          {/* Subtle accent lines */}
          <FlowingLine 
            d="M600,0 Q550,200 600,400 T650,800" 
            duration={18} 
            delay={5}
            strokeWidth={1}
            opacity={0.05}
          />
          <FlowingLine 
            d="M300,-50 Q350,150 300,350 T350,750" 
            duration={20} 
            delay={7}
            strokeWidth={0.8}
            opacity={0.04}
          />
          <FlowingLine 
            d="M900,-50 Q850,200 900,400 T850,850" 
            duration={17} 
            delay={6}
            strokeWidth={0.8}
            opacity={0.04}
          />
        </svg>
      </div>
      
      {/* Subtle gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(245, 70%, 92%), transparent)'
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
