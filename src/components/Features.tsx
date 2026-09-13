
import React from "react";
import { 
  BarChart3, 
  FileCheck, 
  FileSearch, 
  Globe, 
  ShieldCheck, 
  Ship, 
  TrendingUp, 
  Truck 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="flex flex-col p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-brand-600 text-white py-2 px-4 rounded-md hover:bg-brand-700 transition-colors">
        Learn More
      </button>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Customs Documentation",
      description: "Streamline your import process with our automated customs documentation service, ensuring compliance and minimizing delays.",
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "International Shipping",
      description: "Get your products across borders with our reliable international shipping solutions, offering competitive rates and real-time tracking.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities and negotiate better rates with our market intelligence tools.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Inland Transportation",
      description: "Seamless coordination of ground transportation from port to warehouse with reliable partners.",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description: "Stay updated with changing import regulations and ensure all shipments meet legal requirements.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Access our extensive network of agents in 75+ countries to support your international trade needs.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Cargo Insurance",
      description: "Protect your valuable shipments with comprehensive insurance coverage at competitive rates.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track KPIs and optimize your supply chain with detailed reports and actionable insights.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Import Services</span> for Your Business
          </h2>
          <p className="text-gray-600 text-lg">
            Berlian Sukses Sempurna provides end-to-end solutions for all your international shipping and import needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
