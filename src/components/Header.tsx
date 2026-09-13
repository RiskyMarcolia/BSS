
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from "./CTAButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  const navigationItems = [
    {
      name: "Produk",
      href: "#",
      submenu: [
        { name: "Pipe Fittings", href: "/products/pipe-fittings" },
        { name: "Flanges", href: "/products/flanges" },
        { name: "Valves", href: "/products/valves" },
        { name: "Industrial Components", href: "/products/components" },
      ],
    },
    {
      name: "Proyek",
      href: "#projects",
      submenu: null,
    },
    {
      name: "Tentang Kami",
      href: "#about",
      submenu: null,
    },
    {
      name: "News & Carrier",
      href: "#",
      submenu: [
        { name: "News", href: "/news" },
        { name: "Carrier", href: "/carrier" },
      ],
    },
    {
      name: "Unduhan",
      href: "#",
      submenu: [
        { name: "Katalog", href: "/downloads/catalog" },
        { name: "Dokumen", href: "/downloads/documents" },
      ],
    },
    {
      name: "Hubungi Kami",
      href: "#contact",
      submenu: null,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-100`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-900">Berlian Sukses Sempurna</span>
        </a>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {isMobileMenuOpen && (
              <div className="fixed inset-0 bg-white z-40 pt-20 px-6 pb-6 animate-fade-in-up overflow-y-auto">
                <div className="flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 pb-3">
                      {item.submenu ? (
                        <div>
                          <button 
                            onClick={() => toggleSubmenu(item.name)} 
                            className="flex w-full justify-between items-center py-2 text-lg font-medium"
                          >
                            {item.name}
                            <ChevronDown size={18} className={`transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          
                          {activeSubmenu === item.name && (
                            <div className="ml-4 mt-2 flex flex-col gap-2">
                              {item.submenu.map((subItem) => (
                                <a 
                                  key={subItem.name}
                                  href={subItem.href} 
                                  className="py-2 text-gray-600 hover:text-brand-600 transition-colors"
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a 
                          href={item.href} 
                          className="py-2 block text-lg font-medium hover:text-brand-600 transition-colors" 
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-4">
                    <CTAButton href="/signup" className="w-full">
                      Mulai Sekarang
                    </CTAButton>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button 
                        className="flex items-center gap-1 text-brand-700 hover:text-brand-600 transition-colors font-medium"
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeSubmenu === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 py-2 animate-fade-in-up">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                              onClick={() => setActiveSubmenu(null)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-brand-700 hover:text-brand-600 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
            <CTAButton href="/signup" className="shadow-md hover:shadow-lg">Mulai Sekarang</CTAButton>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
