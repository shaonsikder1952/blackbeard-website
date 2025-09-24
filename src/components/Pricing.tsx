import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: null,
      period: null,
      description: "5 rewrites/day",
      features: ["5 daily rewrites", "Basic style adaptation", "Works on major sites"],
      cta: "Get Started",
      featured: false,
    },
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals",
      features: ["Unlimited rewrites", "Custom style rules", "Priority support", "Advanced AI model"],
      cta: "Start Free Trial",
      featured: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For power users",
      features: ["Everything in Starter", "Team collaboration", "Custom integrations", "Analytics dashboard"],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Unlimited",
      price: "$29",
      period: "/month",
      description: "For businesses",
      features: ["Everything in Pro", "Unlimited team members", "API access", "Dedicated support"],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-foreground-muted">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''} animate-fade-in-up`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.price ? (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-foreground-muted ml-1">{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold">Free</div>
                  )}
                </div>
                <p className="text-sm text-foreground-muted">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? "brand" : "outline"} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Pricing;