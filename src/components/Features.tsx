import { Feather, Globe, Zap } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Features = () => {
  const features = [
    {
      icon: Feather,
      title: "Style tuned to you",
      description: "Upload samples + set rules, Blackbeard adapts to your unique writing voice and tone.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Globe,
      title: "Works everywhere",
      description: "Gmail, LinkedIn, Twitter, Docs— any text box becomes instantly more powerful.",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "One-click rewrite",
      description: "Press ⌘S. Rewrite and your text is ready to send. Lightning fast, seamless workflow.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto">
        {/* Tutorial Video Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-fade-in-up">
          <h2 className="section-title mb-8 sm:mb-10">
            Tutorial Video
          </h2>
          <div className="max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-brand-primary/5 bg-surface/30 backdrop-blur-sm">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/u31qwQUeGuM?rel=0&modestbranding=1&iv_load_policy=3&fs=1"
                  title="Blackbeard Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Why Blackbeard Section */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h2 className="section-title">
            Why Blackbeard?
          </h2>
          <p className="section-description mx-auto">
            The smartest way to maintain your voice across all your communications
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 sm:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group relative animate-fade-in-up w-full max-w-md"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Enhanced icon with gradient background */}
              <div className="relative mb-6 sm:mb-8">
                <div className={`feature-icon bg-gradient-to-br ${feature.color} shadow-2xl`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="feature-title group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="feature-description max-w-sm">
                {feature.description}
              </p>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional visual elements */}
        <div className="flex justify-center mt-16 sm:mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-surface/50 border border-border/50 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-foreground-muted">Real-time adaptation to your style</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;