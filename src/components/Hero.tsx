import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-24 bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(245, 70%, 92%), transparent)'
        }}
      />
      
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-brand-primary/10 border border-brand-primary/20">
          <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-brand-primary">Now available on Chrome Web Store</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Rewrite any text
          <br />
          <span className="text-brand-primary">in your voice</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-xl mx-auto mb-10">
          Blackbeard is an AI Chrome extension that rewrites text to sound like you. 
          Works everywhere you write.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://chromewebstore.google.com/detail/blackbeard-ai-rewriter/iglodhieknpcndnhbjdflklohidmbfon" target="_blank" rel="noopener noreferrer">
            <Button variant="brand" size="lg" className="group h-12 px-6 text-base">
              <Chrome className="w-5 h-5 mr-2" />
              Install on Chrome
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <span className="text-sm text-foreground-muted">
            Free tier • 5 rewrites/day
          </span>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {['Works on Gmail', 'Works on LinkedIn', 'Works on Twitter'].map((item) => (
            <div key={item} className="px-4 py-2 rounded-full bg-surface border border-border text-sm text-foreground-muted">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
