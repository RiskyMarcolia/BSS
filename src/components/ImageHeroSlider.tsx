import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const images = [
  {
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    title: "Solusi Total untuk Industri Migas",
    description: "Produk berkualitas tinggi untuk kebutuhan industri Anda",
    badge: "Best Seller"
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    title: "Kualitas Terdepan untuk Manufaktur",
    description: "Komponen terbaik untuk proses produksi yang optimal",
    badge: "Premium"
  },
  {
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
    title: "Layanan Terpercaya Sejak 2017",
    description: "Dipercaya oleh berbagai perusahaan terkemuka di Indonesia",
    badge: "Terpercaya"
  }
];

const AUTO_SLIDE_INTERVAL = 6000;

const ImageHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      pauseAutoPlay();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      pauseAutoPlay();
    }
  }, [emblaApi]);

  const autoPlaySlides = useCallback(() => {
    if (!emblaApi || !autoPlayEnabled) return;
    emblaApi.scrollNext();
  }, [emblaApi, autoPlayEnabled]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const pauseAutoPlay = () => {
    setAutoPlayEnabled(false);
    setTimeout(() => {
      setAutoPlayEnabled(true);
    }, 8000);
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      emblaApi.on("pointerDown", pauseAutoPlay);
      onSelect();
    }
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
        emblaApi.off("pointerDown", pauseAutoPlay);
      }
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const timer = setInterval(autoPlaySlides, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [autoPlaySlides]);

  return (
    <section className="relative w-full overflow-hidden bg-white">

      <div className="embla w-full" ref={emblaRef}>
        <div className="flex h-[200px] md:h-[300px] lg:h-[400px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] relative min-w-0 h-full"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 z-10" />
              <div className="absolute inset-0 flex flex-col justify-center items-start z-20 p-8 md:p-16 lg:p-24">
                <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  {image.badge && (
                    <Badge
                      className="mb-6 px-4 py-1.5 text-sm font-medium bg-brand-500 text-white hover:bg-brand-600"
                    >
                      {image.badge}
                    </Badge>
                  )}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-white leading-tight">
                    {image.title}
                  </h2>
                  <p className="text-base md:text-lg text-white/90 mb-6 max-w-2xl">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all focus:outline-none"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all focus:outline-none"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all",
              currentSlide === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            )}
            onClick={() => {
              if (emblaApi) {
                emblaApi.scrollTo(index);
                pauseAutoPlay();
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageHeroSlider;
