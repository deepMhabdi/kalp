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
        {/* Desktop Image */}
        <img
          src="../assets/bg_image.png"
          alt="Hero Background Desktop"
          className="absolute inset-0 w-full h-full object-center object-cover hidden md:block"
        />

        {/* Mobile Image */}
        <img
          src="../assets/kalpbg_mobile.png"
          alt="Hero Background Mobile"
          className="absolute inset-0 w-full h-full object-center object-cover block md:hidden"
        />


        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-4 max-w-3xl mb-20 mr-auto ml-10 text-left -mt-24 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#f5f1e9] mb-2">
            KALP DIAMONDS BV
          </h1>
          <p className="text-md sm:text-lg md:text-lg text-[#ffffff] mb-6 font-semibold">
            Manufacturers, Wholesalers and Retailers of Polished Diamonds
          </p>
          {/* <button className="border border-[#f5f1e9] text-[#f5f1e9] px-6 py-3 uppercase tracking-widest hover:bg-[#1a568d] hover:text-white transition-all duration-300">
    Get in Touch
  </button> */}
        </div>



        {/* Bottom Badges */}
        <div className="absolute bottom-6 w-full px-6 flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center text-white z-10">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Shield /> Certificates by GIA | IGI | HRD
          </span>
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Badge /> Uniform Assortments from 0.005 ct till 0.30 ct
          </span>
        </div>
      </div>

    </div>
  );
};

export default Landing;
