import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for background blur when scrolling
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#1560BD]/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-3 text-white font-medium">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="../assets/logo.png"
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <h1 className="text-lg md:text-2xl font-bold whitespace-nowrap leading-none">
            Kalp Diamonds
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-20 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-yellow-300 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-yellow-300 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("trust")}
            className="hover:text-yellow-300 transition-colors"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-yellow-300 transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#155793] transition"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#305ddd]/95 backdrop-blur-md text-white flex flex-col items-center gap-4 py-6">
          <button
            onClick={() => {
              scrollToSection("home");
              setIsOpen(false);
            }}
            className="hover:text-yellow-300 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("services");
              setIsOpen(false);
            }}
            className="hover:text-yellow-300 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection("trust");
              setIsOpen(false);
            }}
            className="hover:text-yellow-300 transition-colors"
          >
            Why Us
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="hover:text-yellow-300 transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => {
              scrollToSection("footer");
              setIsOpen(false);
            }}
            className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#305ddd] transition"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
