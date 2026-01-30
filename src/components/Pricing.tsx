import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: null,
      description: "Perfect for trying out",
      badge: null,
      features: [
        "5 free rewrites/day",
        "Basic style adaptation", 
        "Works on major sites",
        "Community support"
      ],
      cta: "Current Plan",
      featured: false,
      isCurrentPlan: true,
    },
    {
      name: "Premium",
      price: "$8.99",
      period: "/mo",
      description: "For power users",
      badge: "RECOMMENDED",
      features: [
        "Unlimited Rewrites",
        "Advanced Style DNA",
        "Premium AI models",
        "Priority support"
      ],
      cta: "Upgrade",
      featured: true,
      isCurrentPlan: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Select <span className="bg-gradient-to-r from-brand-primary to-purple-500 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-foreground-muted mx-auto">
            Unlock full potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''} animate-fade-in-up`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Badge for featured plan */}
              {plan.badge && (
                <div className="absolute -top-3 left-4">
                  <div className="bg-brand-primary text-brand-primary-foreground px-3 py-1 text-xs font-bold rounded-md uppercase tracking-wide">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-foreground-muted ml-1 text-lg">{plan.period}</span>
                  )}
                </div>
                
                {/* Divider */}
                <div className="h-px bg-border mb-4"></div>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground-muted ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {plan.isCurrentPlan ? (
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                  disabled
                >
                  {plan.cta} ✓
                </Button>
              ) : (
                <Button 
                  variant="brand" 
                  className="w-full group"
                  size="lg"
                >
                  {plan.cta}
                  <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 sm:mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-foreground-subtle">
            Your data stays private, start instantly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
