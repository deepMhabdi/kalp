import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section id="footer" className="py-20 bg-[#155793] text-white mt-20 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">
            Looking for the finest calibrated & certified diamonds?
          </h2>
          <p className="text-lg opacity-90">
            Get in touch with our diamond experts for personalized consultation and premium quality stones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("footer")}
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition flex items-center justify-center"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition flex items-center justify-center"
            >
              View Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#155793] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-sm flex items-center justify-center">
                  <span className="font-serif font-bold text-lg">K</span>
                </div>
                <span className="font-serif text-xl font-semibold">Kalp Diamonds</span>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                3rd Generation Diamantaires with 30+ years of legacy in ethical diamond sourcing and manufacturing.
              </p>
              <div className="text-sm font-medium">RJC Member: 0000 5612</div>
            </div>

            {/* Quick Links */}
            {/* <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="opacity-80 hover:text-gray-200 transition-colors">About Us</a></li>
                <li><a href="/services" className="opacity-80 hover:text-gray-200 transition-colors">Services</a></li>
                <li><a href="/rough-diamonds" className="opacity-80 hover:text-gray-200 transition-colors">Rough Diamonds</a></li>
                <li><a href="/polished-diamonds" className="opacity-80 hover:text-gray-200 transition-colors">Polished Diamonds</a></li>
              </ul>
            </div> */}

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Manufacturers</li>
                <li>Wholesale</li>
                <li>Retail</li>
                <li>Custom Requirements</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-10 w-8 mt-0.5 text-gray-300" />
                <span className="opacity-80">Room 117, Hoveniersstraat 30, Box 27, 2018 Antwerp, Belgium</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-300" />
                <span className="opacity-80">+32 3 400 4328</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-300" />
                <span className="opacity-80">+32 475 973 948</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-300" />
                <span className="opacity-80">swapnil@kalpdiamonds.com</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Kalp Diamonds. All rights reserved. | Certified by GIA | IGI | HRD</p>
          </div>
        </div>
      </footer>
    </>
  )
}


export default Footer