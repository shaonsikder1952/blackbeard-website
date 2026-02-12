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
      description: "Upload samples and set rules. Blackbeard adapts to your unique voice.",
    },
    {
      icon: Globe,
      title: "Works everywhere",
      description: "Gmail, LinkedIn, Twitter, Docs—any text box becomes powerful.",
    },
    {
      icon: Zap,
      title: "One-click rewrite",
      description: "Press ⌘S and your text is rewritten. Lightning fast.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      <div className="max-w-6xl mx-auto relative">
        {/* Two-column layout: Video + Features */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT: Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.15em]">Tutorial</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                See it in action
              </h2>
              <p className="text-sm text-foreground-muted mt-1">
                Watch how Blackbeard transforms your writing
              </p>
            </div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-lg ring-1 ring-border"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <AspectRatio ratio={16 / 9}>
                {isVideoPlaying ? (
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/5OV97nC1MME?rel=0&modestbranding=1&iv_load_policy=3&fs=1&autoplay=1"
                    title="Blackbeard Tutorial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <motion.button
                    onClick={() => {
                      setIsVideoPlaying(true);
                      // Notify ambient sound to pause
                      window.dispatchEvent(new Event('videoPlaying'));
                    }}
                    className="relative w-full h-full group cursor-pointer"
                    whileHover="hover"
                  >
                    <img
                      src="https://img.youtube.com/vi/5OV97nC1MME/maxresdefault.jpg"
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
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                        variants={{
                          hover: { scale: 1.1 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(255,255,255,0.4)",
                            "0 0 0 15px rgba(255,255,255,0)",
                          ]
                        }}
                        transition={{
                          boxShadow: { duration: 2, repeat: Infinity }
                        }}
                      >
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 text-brand-primary fill-brand-primary ml-1" />
                      </motion.div>
                    </div>
                  </motion.button>
                )}
              </AspectRatio>
            </motion.div>
          </motion.div>

          {/* RIGHT: Why Blackbeard Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-4">
              <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.15em]">Benefits</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                Why Blackbeard?
              </h2>
              <p className="text-sm text-foreground-muted mt-1">
                Maintain your voice across all communications
              </p>
            </div>

            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    x: 4,
                    boxShadow: "0 8px 24px -8px hsl(245, 75%, 60%, 0.12)"
                  }}
                  className="p-4 rounded-lg bg-background border border-border hover:border-brand-primary/40 transition-colors duration-300 group flex items-start gap-4"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <feature.icon className="w-5 h-5 text-brand-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-0.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;