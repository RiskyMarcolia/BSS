
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButton from "./CTAButton";

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started",
}) => {
  return (
    <Card className={`relative h-full flex flex-col ${
      isPopular ? "border-brand-400 shadow-lg" : ""
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="inline-block bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="mt-4 flex items-baseline">
          <span className="text-3xl md:text-4xl font-extrabold">{price}</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="p-1 rounded-full bg-green-100 text-green-600 mt-0.5 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6">
        <CTAButton 
          href={`/contact?plan=${name.toLowerCase()}`} 
          className={`w-full ${
            isPopular 
              ? "gradient-bg hover:opacity-90 border-0" 
              : "bg-white text-brand-600 border-brand-300 hover:bg-brand-50"
          }`}
          variant={isPopular ? "default" : "outline"}
        >
          {buttonText}
        </CTAButton>
      </CardFooter>
    </Card>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Standard",
      price: "From $1,500",
      description: "Perfect for small businesses with occasional imports",
      features: [
        "Up to 5 shipments per month",
        "Basic customs documentation",
        "Standard shipping rates",
        "Email support",
        "Online tracking portal",
      ],
      buttonText: "Get Quote",
    },
    {
      name: "Business",
      price: "From $3,500",
      description: "Ideal for growing businesses with regular import needs",
      features: [
        "Up to 15 shipments per month",
        "Complete customs handling",
        "Preferential shipping rates",
        "Dedicated account manager",
        "24/7 customer support",
        "Import compliance monitoring",
      ],
      isPopular: true,
      buttonText: "Get Quote",
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "Comprehensive solution for high-volume importers",
      features: [
        "Unlimited shipments",
        "Priority customs clearance",
        "Negotiated carrier contracts",
        "Supply chain consulting",
        "Advanced reporting dashboard",
        "Regulatory compliance guarantee",
        "Dedicated support team",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Import Service <span className="gradient-text">Packages</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the service level that best fits your import volume and business requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              isPopular={tier.isPopular}
              buttonText={tier.buttonText}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Need a customized import solution for your specific requirements?
          </p>
          <CTAButton href="/contact" variant="outline" className="text-brand-600 border-brand-300">
            Schedule a Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
