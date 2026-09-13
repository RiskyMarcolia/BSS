
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import CTAButton from "./CTAButton";

type Feature = {
  id: number;
  title: string;
  description: string;
  image: string;
  badge?: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Automated Customs Documentation",
    description: "Generate all required customs forms automatically based on your shipment details, ensuring compliance with international regulations.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "Real-Time Shipment Tracking",
    description: "Monitor your imports in real-time across the entire supply chain, from manufacturer to warehouse, with detailed milestone updates.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    title: "Duty & Tax Calculator",
    description: "Accurately estimate import duties, taxes, and fees before shipping to avoid unexpected costs and optimize your import strategy.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
  },
  {
    id: 4,
    title: "Compliance Management",
    description: "Stay compliant with constantly changing import regulations across different countries with our automated compliance checking system.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1955&q=80",
  },
];

const ProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSliderChange = (value: number[]) => {
    setActiveIndex(value[0]);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Streamline Your <span className="text-brand-600">Import Process</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover how Import Pipe simplifies and accelerates international shipping with our powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {feature.badge && (
                    <Badge className="absolute top-4 right-4 bg-brand-500 hover:bg-brand-600">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mb-8">
              <Slider
                defaultValue={[activeIndex]}
                max={features.length - 1}
                step={1}
                value={[activeIndex]}
                onValueChange={handleSliderChange}
                className="mb-12"
              />
              
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={cn(
                    "transition-all duration-500",
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute -translate-y-4"
                  )}
                >
                  {index === activeIndex && (
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <CTAButton href="/demo" className="w-full sm:w-auto">
                        See in Action
                      </CTAButton>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
