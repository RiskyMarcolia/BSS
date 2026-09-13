
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ImageSlider from '@/components/ImageSlider';
import ProductSlider from '@/components/ProductSlider';
import TestimonialSlider from '@/components/TestimonialSlider';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Hero />
      <ImageSlider />
      <Features />
      <ProductSlider />
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Index;
