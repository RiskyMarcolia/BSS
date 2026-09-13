
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselNavigation = ({ onPrevClick, onNextClick }: CarouselNavigationProps) => {
  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      <button 
        onClick={onPrevClick}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-200 shadow-sm"
        aria-label="Previous products"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button 
        onClick={onNextClick}
        className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all duration-200 shadow-sm"
        aria-label="Next products"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CarouselNavigation;
