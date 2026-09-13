
import React, { useState, useEffect, useCallback } from "react";
import CTAButton from "./CTAButton";
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import ProductCard from "./product/ProductCard";
import CarouselNavigation from "./carousel/CarouselNavigation";
import { products } from "@/data/products";

const AUTO_SLIDE_INTERVAL = 5000;

const ImageSlider = () => {
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 768px)': { slidesToScroll: 3 },
      '(min-width: 1024px)': { slidesToScroll: 4 }
    }
  });

  const autoPlaySlides = useCallback(() => {
    if (!emblaApi || !autoPlayEnabled) return;
    emblaApi.scrollNext();
  }, [emblaApi, autoPlayEnabled]);

  const pauseAutoPlay = () => {
    setAutoPlayEnabled(false);
    setTimeout(() => {
      setAutoPlayEnabled(true);
    }, 8000);
  };

  useEffect(() => {
    const timer = setInterval(autoPlaySlides, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [autoPlaySlides]);

  useEffect(() => {
    if (emblaApi) {
      // Fix: The emblaApi.on method expects two arguments: the event name and the callback function
      emblaApi.on("pointerDown", () => pauseAutoPlay());
    }
    return () => {
      if (emblaApi) {
        emblaApi.off("pointerDown", () => {});
      }
    };
  }, [emblaApi]);

  const handlePrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      pauseAutoPlay();
    }
  };

  const handleNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      pauseAutoPlay();
    }
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Our <span className="gradient-text">Featured Products</span>
          </h2>
          <p className="text-md text-gray-600 leading-relaxed mb-6">
            Explore our selection of premium import and logistics solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {products.map((product) => (
                <div key={product.id} className="relative min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] p-2">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
          
          <CarouselNavigation 
            onPrevClick={handlePrev}
            onNextClick={handleNext}
          />
          
          <div className="mt-8 text-center">
            <CTAButton href="/products" variant="outline" className="text-brand-600 border-brand-300 hover:bg-brand-50">
              View All Products
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
