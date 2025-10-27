import React from "react";
import Navbar from "./Navbar";
import { Badge, Shield } from "lucide-react";

const Landing = () => {
  return (
    <div id="home" className="relative bg-[#000366] text-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-28">
        {/* Background Image */}
        {/* <img
          src="../assets/bg11.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover "
        /> */}

        {/* Add this blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] "></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#f5f1e9] mb-2">
            KALP DIAMONDS BV
          </h1>
          <p className="text-md sm:text-lg md:text-lg text-[#ffffff] mb-6  font-semibold">
            Manufacturers, Wholesalers and Retailers of Rough and Polished Diamonds
          </p>
          <button className="border border-[#f5f1e9] text-[#f5f1e9] px-6 py-3 uppercase tracking-widest hover:bg-[#1a568d] hover:text-white transition-all duration-300">
            Get in Touch
          </button>
        </div>

        {/* Bottom Badges */}
        <div className="absolute bottom-6 w-full px-6 flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center text-white z-10">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Shield /> Certificates by GIA | IGI | HRD
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Badge /> Member of Responsible Jewellery Council (RJC 0000 5612)
          </span>
        </div>
      </div>

    </div>
  );
};

export default Landing;
