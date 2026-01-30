import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden bg-background">
      {/* Purple gradient fading to white */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(245, 70%, 88%) 0%, hsl(250, 50%, 94%) 40%, hsl(0, 0%, 100%) 70%, hsl(0, 0%, 100%) 100%)'
        }}
      />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Trust indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm animate-fade-in-up">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-foreground-muted font-medium">Trusted by 10k+ users</span>
        </div>

        {/* Hero headline with serif font */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="hero-text">
            Rewrite Any Text
            <br />
            In Your Voice
          </h1>
          
          <p className="hero-description mx-auto">
            Blackbeard is an AI Chrome extension that rewrites text
            to sound like you. Perfect for Gmail, LinkedIn, Twitter, and anywhere you write.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2 sm:pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
            <Button variant="brand" size="lg" className="group text-sm sm:text-base">
              <Chrome className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Install on Chrome
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 font-medium">
            Dead simple • Transparent pricing • 5 free rewrites per day
          </p>
        </div>

        {/* Trust indicators */}
        <div className="pt-4 sm:pt-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-2 sm:gap-3 bg-surface border border-border px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-foreground">Free tier available</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-surface border border-border px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-xs sm:text-sm font-medium text-foreground">Works everywhere</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-surface border border-border px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-xs sm:text-sm font-medium text-foreground">Privacy focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
