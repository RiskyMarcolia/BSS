import React from "react";
import { Globe, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold gradient-text mb-4">Berlian Sukses Sempurna</div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Platform manajemen impor berbasis AI yang membantu bisnis mengoptimalkan logistik global mereka.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-brand-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@berliansukses.com"
                className="text-gray-500 hover:text-brand-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Produk</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/products/pipe-fittings"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Pipe Fittings
                </a>
              </li>
              <li>
                <a
                  href="/products/flanges"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Flanges
                </a>
              </li>
              <li>
                <a
                  href="/products/valves"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Valves
                </a>
              </li>
              <li>
                <a
                  href="/products/components"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Industrial Components
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Solusi</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/solutions/manufacturing"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Untuk Manufaktur
                </a>
              </li>
              <li>
                <a
                  href="/solutions/distribution"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Untuk Distribusi
                </a>
              </li>
              <li>
                <a
                  href="/solutions/ecommerce"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  Untuk E-Commerce
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600 mt-0.5" />
                <span className="text-gray-600">
                  Jln. Bandengan Utara, Jl. Kp. Baru Kubur Koja No.38, RT.4/RW.15, Penjaringan, Kec. Penjaringan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14440
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-600" />
                <a href="tel:02166154484" className="text-gray-600 hover:text-brand-600 transition-colors">
                  021 – 6615484
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600" />
                <a href="mailto:berlian.bss@yahoo.com" className="text-gray-600 hover:text-brand-600 transition-colors">
                  berlian.bss@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Berlian Sukses Sempurna. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-brand-600 transition-colors text-sm"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-600 transition-colors text-sm"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
