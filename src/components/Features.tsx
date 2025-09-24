import { Feather, Globe, Zap } from "lucide-react";

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
    <section className="py-32 px-6 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Why Blackbeard?
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            The smartest way to maintain your voice across all your communications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Enhanced icon with gradient background */}
              <div className="relative mx-auto mb-8">
                <div className={`feature-icon bg-gradient-to-br ${feature.color} shadow-2xl`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-br from-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-foreground-muted leading-relaxed text-lg max-w-sm mx-auto">
                {feature.description}
              </p>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional visual elements */}
        <div className="flex justify-center mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface/50 border border-border/50 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground-muted">Real-time adaptation to your style</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;