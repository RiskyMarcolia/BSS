
import React from "react";
import { Badge } from "@/components/ui/badge";
import CTAButton from "../CTAButton";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  badge?: string;
}

const ProductCard = ({ image, title, price, badge }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative pt-[75%] overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <Badge className="absolute top-2 right-2 bg-brand-500 text-white z-10">
            {badge}
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-brand-600 font-medium mb-3">{price}</p>
        <CTAButton href="/product-details" className="w-full text-sm py-1">
          View Details
        </CTAButton>
      </div>
    </div>
  );
};

export default ProductCard;
