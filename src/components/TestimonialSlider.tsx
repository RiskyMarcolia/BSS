
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  location?: string;
  featured?: boolean;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Manajer Operasional",
    company: "Global Imports Ltd",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Berlian Sukses Sempurna telah merevolusi cara kami menangani pengiriman internasional. Platform ini intuitif, dan layanan pelanggannya luar biasa. Proses impor kami sekarang 3x lebih cepat.",
    rating: 5,
    location: "Jakarta",
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Direktur Supply Chain",
    company: "TechSource Inc",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Kami telah mencoba beberapa solusi impor, tetapi Berlian Sukses Sempurna jauh lebih unggul. Fitur dokumentasi otomatis saja telah menghemat banyak waktu kami dalam mengurus berkas.",
    rating: 5,
    location: "Surabaya",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Koordinator Logistik",
    company: "Rodriguez Shipping",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Sebagai bisnis kecil, melacak impor menjadi semakin rumit. Berlian Sukses Sempurna menyederhanakan semuanya dengan dashboard dan pelacakan real-time mereka. Sangat direkomendasikan!",
    rating: 5,
    location: "Bandung",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "Pacific Trade Partners",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "Fitur kepatuhan di Berlian Sukses Sempurna telah membantu kami menavigasi regulasi internasional yang kompleks dengan mudah. Ini telah menjadi game-changer bagi bisnis impor kami yang berkembang.",
    rating: 4,
    location: "Medan",
  },
  {
    id: 5,
    name: "Jessica Wong",
    role: "Import Manager",
    company: "Global Technologies",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    content: "Berlian Sukses Sempurna memahami kebutuhan unik bisnis kami dan menyediakan solusi yang disesuaikan. Layanan pelanggan mereka sangat responsif, dan platform mereka intuitif.",
    rating: 5,
    location: "Makassar", 
    featured: true,
  },
];

const TestimonialSlider = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(testimonials[0]);

  return (
    <div id="testimonials" className="w-full px-4 py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full opacity-40 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full opacity-40 blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Featured testimonial */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 animate-fade-in-left">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 text-brand-200 opacity-40">
                    <Quote size={80} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-6 w-6",
                            i < activeTestimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          )}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                      "{activeTestimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                        <AvatarImage src={activeTestimonial.avatar} alt={activeTestimonial.name} />
                        <AvatarFallback>{activeTestimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-semibold text-lg">{activeTestimonial.name}</h3>
                        <p className="text-gray-600">
                          {activeTestimonial.role}, {activeTestimonial.company}
                        </p>
                        {activeTestimonial.location && (
                          <p className="text-sm text-brand-600">{activeTestimonial.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 animate-fade-in-right">
                <div className="p-1 rounded-2xl bg-gradient-to-br from-brand-300 to-blue-300 shadow-lg">
                  <div className="bg-white rounded-xl p-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Apa Kata Klien Kami</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Dipercaya oleh importir di seluruh Indonesia untuk mengelola rantai pasok internasional mereka
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {testimonials.map((testimonial) => (
                        <button
                          key={testimonial.id}
                          onClick={() => setActiveTestimonial(testimonial)}
                          className={cn(
                            "p-1 rounded-full transition-all",
                            activeTestimonial.id === testimonial.id
                              ? "ring-2 ring-brand-500 scale-110"
                              : "opacity-70 hover:opacity-100"
                          )}
                        >
                          <Avatar className="h-12 w-12 border-2 border-white">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Lebih Banyak Testimonial</h2>
                <p className="text-lg text-muted-foreground">Apa yang klien kami katakan tentang layanan kami</p>
              </div>
              <div className="flex gap-3">
                <CarouselPrevious className="static translate-y-0 h-10 w-10 border-brand-300 text-brand-600 hover:bg-brand-100 hover:text-brand-700 shadow-sm" />
                <CarouselNext className="static translate-y-0 h-10 w-10 border-brand-300 text-brand-600 hover:bg-brand-100 hover:text-brand-700 shadow-sm" />
              </div>
            </div>
            
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-gray-200 shadow-sm h-full hover:shadow-md transition-all duration-300 card-hover-effect">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12 border border-gray-200">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-base">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          {Array(5)
                            .fill(null)
                            .map((_, index) => (
                              <Star
                                key={index}
                                className={cn(
                                  "h-4 w-4",
                                  index < testimonial.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "fill-gray-200 text-gray-200"
                                )}
                              />
                            ))}
                        </div>
                      </div>
                      <p className="text-gray-700 flex-grow leading-relaxed">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
