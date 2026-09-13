
import React from "react";
import { Check, FileText, Globe, Package, Ship, Truck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();

  const steps = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Initial Consultation",
      description: "Share your import requirements with our experts and receive a customized logistics plan for your business.",
      image: "/placeholder.svg",
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Shipping Coordination",
      description: "We arrange the optimal shipping method and schedule with our trusted carrier network at competitive rates.",
      image: "/placeholder.svg",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Customs Clearance",
      description: "Our customs experts handle all documentation and ensure regulatory compliance for smooth border crossing.",
      image: "/placeholder.svg",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Final Delivery",
      description: "We coordinate the final leg of transportation to deliver your goods safely to your warehouse or facility.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Our Import Process</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Experience a streamlined import journey with Berlian Sukses Sempurna's proven process
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                isMobile 
                  ? "gap-8" 
                  : index % 2 === 0 
                    ? "md:flex-row gap-12" 
                    : "md:flex-row-reverse gap-12"
              } items-center`}
            >
              <div className={`w-full md:w-1/2 ${!isMobile && (index % 2 === 0 ? "animate-fade-in-right" : "animate-fade-in-left")}`}>
                <div className="p-1 rounded-xl bg-gradient-to-br from-brand-100 to-brand-400 shadow-lg">
                  <div className="aspect-video w-full h-auto bg-white rounded-lg flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-4/5 h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className={`w-full md:w-1/2 ${!isMobile && (index % 2 === 0 ? "animate-fade-in-left" : "animate-fade-in-right")}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-semibold">{step.title}</div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="p-1 rounded-full bg-green-100 text-green-600 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">
                        {index === 0 && item === 1 && "Free consultation with import specialists"}
                        {index === 0 && item === 2 && "Detailed cost breakdown with no hidden fees"}
                        {index === 0 && item === 3 && "Personalized recommendations based on your needs"}
                        
                        {index === 1 && item === 1 && "Access to preferential shipping rates"}
                        {index === 1 && item === 2 && "Real-time tracking of ocean freight"}
                        {index === 1 && item === 3 && "Cargo consolidation options for better rates"}
                        
                        {index === 2 && item === 1 && "Expert handling of all customs documentation"}
                        {index === 2 && item === 2 && "Up-to-date knowledge of import regulations"}
                        {index === 2 && item === 3 && "Tax and duty optimization strategies"}
                        
                        {index === 3 && item === 1 && "Coordinated delivery to your warehouse"}
                        {index === 3 && item === 2 && "Quality inspection services available"}
                        {index === 3 && item === 3 && "Specialized handling for sensitive cargo"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
