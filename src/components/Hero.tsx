import React from "react";
import { ArrowRight, Ship, BarChart, FileCheck, ChevronDown, Building2, Users, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTAButton from "./CTAButton";

const Hero = () => {
  const scrollToFeatures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/80 via-white to-accentBrand-50/80 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-sm font-medium bg-brand-100 text-brand-800 hover:bg-brand-200 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Stockis dan Pemasok Terkemuka Sejak 2017
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            <span className="gradient-text">Solusi Total</span> untuk Industri Migas dan Manufaktur
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
            PT. Berlian Sukses Sempurna (BSS) adalah pemasok utama untuk industri minyak dan gas, petrokimia, pertambangan, kilang minyak, dan pabrik-pabrik lainnya di Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
            <CTAButton href="/contact" className="gradient-bg hover:opacity-90 border-0 shadow-lg hover:shadow-xl">
              Hubungi Kami
            </CTAButton>
            <CTAButton href="#about" variant="outline" className="text-brand-600 border-brand-300 hover:bg-brand-50">
              Tentang Kami
            </CTAButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            <div className="flex flex-col items-center p-5 rounded-xl glass-effect-light card-hover-effect">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-3">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-gray-900">Berdiri Sejak 2017</h3>
            </div>

            <div className="flex flex-col items-center p-5 rounded-xl glass-effect-light card-hover-effect">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-gray-900">Solusi Total</h3>
            </div>

            <div className="flex flex-col items-center p-5 rounded-xl glass-effect-light card-hover-effect">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-3">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-gray-900">Kualitas Terpercaya</h3>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto opacity-0 animate-fade-in-up bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200 shadow-lg" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi distributor stockist terlengkap dengan product yang berkualitas untuk seluruh pelanggan di Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <span>Menyediakan produk berkualitas dari merk terpercaya, layanan kelas satu, serta solusi inovatif bagi seluruh pelanggan</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <span>Menjadi perusahaan dengan tingkat produktivitas dan efektivitas prima serta secara dinamis terus beradaptasi terhadap perubahan yang ada</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Hormat kami,</span><br />
                Boy Sandi – Direktur
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToFeatures}
            className="flex flex-col items-center text-gray-500 hover:text-brand-600 transition-colors animate-bounce"
            aria-label="Scroll down to see more"
          >
            <span className="text-sm mb-1">Lihat Lebih Banyak</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
