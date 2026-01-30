import { useState } from "react";
import { Feather, Globe, Zap, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Features = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const features = [
    {
      icon: Feather,
      title: "Style tuned to you",
      description: "Upload samples + set rules, Blackbeard adapts to your unique writing voice and tone.",
    },
    {
      icon: Globe,
      title: "Works everywhere",
      description: "Gmail, LinkedIn, Twitter, Docs— any text box becomes instantly more powerful.",
    },
    {
      icon: Zap,
      title: "One-click rewrite",
      description: "Press ⌘S. Rewrite and your text is ready to send. Lightning fast, seamless workflow.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Tutorial Video Section */}
        <div className="text-center mb-20 sm:mb-28 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            See It <span className="bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-lg text-foreground-muted mb-10 sm:mb-14">
            Watch how Blackbeard transforms your writing in seconds
          </p>
          
          {/* Video with elegant frame */}
          <div className="max-w-3xl mx-auto relative">
            {/* Decorative gradient behind video */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/20 via-purple-400/10 to-transparent rounded-3xl blur-2xl"></div>
            
            {/* Video container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50">
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
                    {/* Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/G4-TCyp8S08/maxresdefault.jpg"
                      alt="Tutorial video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 text-brand-primary fill-brand-primary ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Why Blackbeard Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Why <span className="bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">Blackbeard</span>?
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-foreground-muted mx-auto max-w-2xl">
            The smartest way to maintain <span className="text-foreground font-medium">your voice</span> across all your communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group relative animate-fade-in-up p-8 rounded-2xl bg-white border border-border hover:border-brand-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Icon */}
              <div className="relative mb-5">
                <div className="feature-icon">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-border shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground-muted">Real-time adaptation to your style</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
