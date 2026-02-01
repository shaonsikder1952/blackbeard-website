import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-24 pb-16 bg-background overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(245, 70%, 92%), transparent)'
        }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-primary/10 blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-brand-primary/15 blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
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
