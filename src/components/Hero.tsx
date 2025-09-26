import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Enhanced background with subtle animation */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Trust indicator - animated */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-surface/50 border border-border/50 backdrop-blur-sm animate-fade-in-up">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-foreground-muted">Trusted by 50k+ users</span>
        </div>

        {/* Hero headline with enhanced typography */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="hero-text">
            Rewrite any text in your
            <br />
            <span className="relative">
              voice — instantly
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-accent rounded-full animate-pulse-glow"></div>
            </span>
          </h1>
          
          <p className="hero-description mx-auto">
            Blackbeard is an AI Chrome extension that rewrites text
            to sound like you. Perfect for Gmail, LinkedIn, Twitter, and anywhere you write.
          </p>
        </div>

        {/* Enhanced CTA with better styling */}
        <div className="pt-2 sm:pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button variant="brand" size="lg" className="group animate-pulse-glow text-sm sm:text-base">
            <Chrome className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Install on Chrome
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <p className="text-xs sm:text-sm text-foreground-subtle mt-3">
            Free to install • No signup required • 5 rewrites daily
          </p>
        </div>

        {/* Enhanced trust indicators with better layout */}
        <div className="pt-8 sm:pt-10 lg:pt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-foreground-muted">Free tier available</span>
            </div>
            <div className="hidden sm:block w-px h-3 sm:h-4 bg-border"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-xs sm:text-sm font-medium text-foreground-muted">Works everywhere</span>
            </div>
            <div className="hidden sm:block w-px h-3 sm:h-4 bg-border"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-xs sm:text-sm font-medium text-foreground-muted">Privacy focused</span>
            </div>
          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;