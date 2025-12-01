import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navH, setNavH] = useState(0);
  const navRef = useRef(null);

  const location = useLocation();

  const navigate = useNavigate();

  // Track navbar height (handles responsive changes)
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavH(navRef.current.getBoundingClientRect().height);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Blur + bg when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with offset for fixed navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = section.getBoundingClientRect();
    const targetTop = window.scrollY + rect.top - navH - 8; // small 8px breathing room

    if (prefersReduced) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname === "/contact"
        ? "bg-[#002366]/90 backdrop-blur-md shadow-md"
        : "bg-transparent"
        }`}

    >
      <div className="flex justify-between items-center px-6 md:px-10 py-3 text-white font-medium">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="../assets/logo2.png"
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
          <button onClick={() => navigate("/")} className="text-lg md:text-2xl font-bold whitespace-nowrap leading-none">
            Kalp Diamonds BV
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 lg:space-x-20 items-center">
          <button
            onClick={() => {
              if (location.pathname === "/contact") navigate("/");
              else scrollToSection("home");
            }}
            className="hover:text-yellow-300 transition-colors"
          >
            Home
          </button>

          <button onClick={() => scrollToSection("services")} className="hover:text-yellow-300 transition-colors">Services</button>
          <button onClick={() => scrollToSection("trust")} className="hover:text-yellow-300 transition-colors">Why Us</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-yellow-300 transition-colors">About Us</button>
          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=swapnil@kalpdiamonds.com",
                "_blank"
              )
            }
            className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#155793] transition"
          >
            Contact Us
          </button>

        </div>

        {/* Hamburger */}
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
              if (location.pathname === "/contact") {
                setIsOpen(false);
                navigate("/");
              } else scrollToSection("home");
            }}
            className="hover:text-yellow-300 transition-colors"
          >
            Home
          </button>

          <button onClick={() => scrollToSection("services")} className="hover:text-yellow-300 transition-colors">Services</button>
          <button onClick={() => scrollToSection("trust")} className="hover:text-yellow-300 transition-colors">Why Us</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-yellow-300 transition-colors">About Us</button>
          <button
           onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=swapnil@kalpdiamonds.com",
                "_blank"
              )
            }
            className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-[#155793] transition"
          >
            Contact Us
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
