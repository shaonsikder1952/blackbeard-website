import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        {/* Hero headline */}
        <div className="space-y-4">
          <h1 className="hero-text leading-tight">
            Rewrite any text in your
            <br />
            voice — instantly
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Blackbeard is an AI Chrome extension that rewrites text
            to sound like you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button variant="brand" size="lg" className="group">
            <Chrome className="w-5 h-5 mr-2" />
            Install on Chrome
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="pt-8">
          <p className="text-sm text-foreground-subtle mb-4">Trusted by thousands of users</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-xs font-medium">5 rewrites/day</div>
            <div className="w-1 h-1 bg-foreground-subtle rounded-full" />
            <div className="text-xs font-medium">No signup required</div>
            <div className="w-1 h-1 bg-foreground-subtle rounded-full" />
            <div className="text-xs font-medium">Privacy focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;