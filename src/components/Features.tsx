import { useState } from "react";
import { Feather, Globe, Zap, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Video Section */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              See it in action
            </motion.h2>
            <motion.p 
              className="text-lg text-foreground-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Watch how Blackbeard transforms your writing
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-xl ring-1 ring-border"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
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
                  <motion.button
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative w-full h-full group cursor-pointer"
                    whileHover="hover"
                  >
                    <img
                      src="https://img.youtube.com/vi/G4-TCyp8S08/maxresdefault.jpg"
                      alt="Tutorial video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/40"
                      variants={{
                        hover: { backgroundColor: "rgba(0,0,0,0.5)" }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg"
                        variants={{
                          hover: { scale: 1.1 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(255,255,255,0.4)",
                            "0 0 0 20px rgba(255,255,255,0)",
                          ]
                        }}
                        transition={{
                          boxShadow: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 text-brand-primary fill-brand-primary ml-1" />
                      </motion.div>
                    </div>
                  </motion.button>
                )}
              </AspectRatio>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Blackbeard?
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground-muted max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The smartest way to maintain your voice across all communications
          </motion.p>
        </div>

        <motion.div 
          className="grid sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px -15px hsl(245, 75%, 60%, 0.15)"
              }}
              className="p-6 rounded-xl bg-background border border-border hover:border-brand-primary/40 transition-colors duration-300 group"
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
