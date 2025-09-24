import { Feather, Globe, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Feather,
      title: "Style tuned to you",
      description: "Upload samples + set rules, Blackbeard adapts",
    },
    {
      icon: Globe,
      title: "Works everywhere",
      description: "Gmail, LinkedIn, Twitter, Docs— any text box",
    },
    {
      icon: Zap,
      title: "One-click rewrite",
      description: "Press ⌘S. Rewrite and your text is ready to send",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Blackbeard?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="feature-icon flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-foreground-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Features;