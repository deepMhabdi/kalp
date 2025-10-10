import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for background blur when scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#155793]/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 text-white font-medium">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Kalp Diamonds</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-20 items-center">
          <a href="#destinations" className="hover:text-yellow-300">
            Home 
          </a>
          <a href="#services" className="hover:text-yellow-300">
            Services
          </a>
          <a href="#about" className="hover:text-yellow-300">
            About Us
          </a>
          <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#155793] transition">
            Contact Us
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#155793]/95 text-white flex flex-col items-center gap-4 py-6">
          <a
            href="#destinations"
            className="hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>

          <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#155793] transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
