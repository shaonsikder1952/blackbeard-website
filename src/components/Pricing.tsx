import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Plans & Pricing
          </h2>
          <p className="text-lg text-foreground-muted">
            Choose the plan that works for you
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-200 ${
                plan.featured 
                  ? 'bg-background border-brand-primary shadow-lg ring-1 ring-brand-primary' 
                  : 'bg-background border-border hover:border-border hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-xs font-semibold text-brand-primary-foreground bg-brand-primary rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-foreground-muted mb-4">{plan.description}</p>
              <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-foreground">$</span>
                  <span className="text-4xl font-bold text-foreground">{plan.price.replace('$', '')}</span>
                  {plan.period && (
                    <span className="text-foreground-muted ml-1">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-foreground-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.featured ? "brand" : "outline"} 
                className="w-full"
                size="lg"
                disabled={plan.disabled}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-foreground-muted mt-8">
          Cancel anytime. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
