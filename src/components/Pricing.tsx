import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out",
      features: [
        "5 rewrites per day",
        "Basic style adaptation",
        "Works on major sites",
      ],
      cta: "Get Started",
      featured: false,
      disabled: false,
    },
    {
      name: "Premium",
      price: "$8.99",
      period: "/month",
      description: "For power users",
      features: [
        "Unlimited rewrites",
        "Advanced Style DNA",
        "Premium AI models",
        "Priority support",
      ],
      cta: "Upgrade Now",
      featured: true,
      disabled: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-primary/5 blur-3xl rounded-full" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.15em]">Pricing</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
            Simple, transparent pricing
          </h2>
          <p className="text-sm text-foreground-muted mt-1">
            Start free, upgrade when you need more
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className={`relative p-5 sm:p-8 rounded-xl border transition-all duration-300 ${plan.featured
                ? 'bg-background border-brand-primary shadow-[0_0_40px_hsl(245,75%,60%,0.15)] ring-1 ring-brand-primary'
                : 'bg-background border-border hover:border-brand-primary/30 hover:shadow-lg'
                }`}
            >
              {plan.featured && (
                <motion.div
                  className="absolute -top-3 left-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="px-3 py-1 text-xs font-semibold text-brand-primary-foreground bg-brand-primary rounded-full shadow-[0_0_15px_hsl(245,75%,60%,0.4)]">
                    Recommended
                  </span>
                </motion.div>
              )}

              <div className="mb-5 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-foreground-muted mb-3 sm:mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-2xl font-bold text-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>$</span>
                  <motion.span
                    className="text-3xl sm:text-4xl font-bold text-foreground"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {plan.price.replace('$', '')}
                  </motion.span>
                  {plan.period && (
                    <span className="text-foreground-muted ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-sm sm:text-base text-foreground-muted">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={plan.featured ? "brand" : "outline"}
                  className={`w-full ${plan.featured ? 'shadow-[0_4px_20px_hsl(245,75%,60%,0.3)]' : ''}`}
                  size="lg"
                  disabled={plan.disabled}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-foreground-muted mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Cancel anytime. No questions asked.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
