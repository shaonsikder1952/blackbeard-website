import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
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
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals",
      badge: null,
      features: [
        "100 rewrites/day",
        "Advanced style rules",
        "Priority support", 
        "Advanced AI model",
        "Custom shortcuts"
      ],
      cta: "Start Free Trial",
      featured: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For power users",
      badge: "Most Popular",
      features: [
        "Unlimited rewrites",
        "Team collaboration", 
        "Custom integrations",
        "Analytics dashboard",
        "Premium AI models",
        "API access"
      ],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Unlimited",
      price: "$29",
      period: "/month",
      description: "For businesses",
      badge: null,
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "White-label solution", 
        "Dedicated support",
        "Custom AI training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Simple Pricing
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Choose the plan that works best for you. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-primary text-brand-primary-foreground px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-2 shadow-brand">
                    <Star className="w-4 h-4 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{plan.name}</h3>
                <div className="mb-3">
                  {plan.price ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-foreground-muted ml-2 text-lg">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-5xl font-bold text-foreground">Free</div>
                  )}
                </div>
                <p className="text-foreground-muted">{plan.description}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start group">
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-brand-primary mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <span className="text-foreground-muted ml-3 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.featured ? "brand" : "outline"} 
                className="w-full group"
                size="lg"
              >
                {plan.cta}
                {plan.featured && <Zap className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />}
              </Button>

              {/* Special offer indicator for featured plan */}
              {plan.featured && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-brand-primary font-medium">
                    ✨ 14-day free trial included
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-foreground-subtle">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;