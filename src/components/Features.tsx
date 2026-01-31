import { useState } from "react";
import { Feather, Globe, Zap, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Features = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const features = [
    {
      icon: Feather,
      title: "Style tuned to you",
      description: "Upload samples and set rules. Blackbeard adapts to your unique writing voice.",
    },
    {
      icon: Globe,
      title: "Works everywhere",
      description: "Gmail, LinkedIn, Twitter, Docs—any text box becomes instantly more powerful.",
    },
    {
      icon: Zap,
      title: "One-click rewrite",
      description: "Press ⌘S and your text is rewritten. Lightning fast, seamless workflow.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Video Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              See it in action
            </h2>
            <p className="text-lg text-foreground-muted">
              Watch how Blackbeard transforms your writing
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-xl ring-1 ring-border">
              <AspectRatio ratio={16 / 9}>
                {isVideoPlaying ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/G4-TCyp8S08?rel=0&modestbranding=1&iv_load_policy=3&fs=1&autoplay=1"
                    title="Blackbeard Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative w-full h-full group cursor-pointer"
                  >
                    <img
                      src="https://img.youtube.com/vi/G4-TCyp8S08/maxresdefault.jpg"
                      alt="Tutorial video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-brand-primary fill-brand-primary ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Why Blackbeard?
          </h2>
          <p className="text-lg text-foreground-muted max-w-xl mx-auto">
            The smartest way to maintain your voice across all communications
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-background border border-border hover:border-brand-primary/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
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
