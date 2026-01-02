import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: null,
      period: null,
      description: "Perfect for trying out",
      badge: null,
      features: [
        "5 daily rewrites",
        "Basic style adaptation", 
        "Works on major sites",
        "Community support"
      ],
      cta: "Start Free Trial",
      featured: false,
    },
    {
      name: "Premium",
      price: "$8.99",
      period: "/month",
      description: "For power users",
      badge: "Most Popular",
      features: [
        "50 rewrites per day",
        "Advanced style rules",
        "Premium AI models",
        "Priority support"
      ],
      cta: "Get Started",
      featured: true,
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h2 className="section-title">
            Simple Pricing
          </h2>
          <p className="section-description mx-auto">
            Choose the plan that works best for you. Upgrade or downgrade at any time.
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
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-primary text-brand-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-full flex items-center gap-1.5 sm:gap-2 shadow-brand">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">{plan.name}</h3>
                <div className="mb-2 sm:mb-3">
                  {plan.price ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-foreground-muted ml-1 sm:ml-2 text-sm sm:text-base lg:text-lg">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Free</div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-foreground-muted">{plan.description}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start group">
                    <div className="flex-shrink-0">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground-muted ml-2 sm:ml-3 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.featured ? "brand" : "outline"} 
                className="w-full group text-sm sm:text-base"
                size="lg"
              >
                {plan.cta}
                {plan.featured && <Zap className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:scale-110 transition-transform duration-200" />}
              </Button>

              {/* Special offer indicator for featured plan */}
              {plan.featured && (
                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-xs sm:text-sm text-brand-primary font-medium">
                    ✨ 14-day free trial included
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm sm:text-base text-foreground-subtle">
            Your data stays private, start instantly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
