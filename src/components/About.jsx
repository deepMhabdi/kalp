import { Building, Factory, Globe } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto py-1 md:py-10 flex flex-col gap-10 px-5 mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10 lg:gap-12">
        {/* Left Text Section */}
        <div className="flex flex-col gap-4 items-start md:w-[65%]">
          <div className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            <h1>Where are we</h1>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl max-w-2xl font-semibold tracking-tight leading-snug">
              We have a Global presence across all major ports around the World
            </h1>
            <p className="text-gray-600 text-sm font-semibold tracking-tight max-w-2xl leading-relaxed">
              Kalp Diamonds is a legacy built over three generations of expertise and trust.
              We craft and curate the finest rough and polished diamonds, with mastery in manufacturing, wholesale, and retail.
              Every stone reflects our commitment to pristine quality, offered at unmatched value.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-[35%] flex justify-center md:justify-end">
          <img
            src="https://img.freepik.com/premium-photo/diamond-classic-cut_103577-3381.jpg?semt=ais_incoming&w=740&q=80"
            alt="Diamonds"
            className="h-64 md:h-60 lg:h-64 rounded-2xl object-cover"
          />
        </div>
      </div>


      <div className="flex flex-col md:flex-row pb-5 gap-5 justify-center">

        <div className="relative h-64 rounded-xl w-full bg-[#002366] p-5 flex flex-col gap-4 justify-center items-center group overflow-hidden transition-all duration-300">
          {/* Normal content */}
          <div className="p-4 flex justify-center items-center h-28 w-28 transition-transform duration-300 group-hover:scale-105">
            <img
              src="../assets/Belgium.png"
              alt="Taiwan"
              className="object-contain h-full w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-center transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xl font-semibold tracking-tighter text-gray-200 text-center">
              BELGIUM
            </p>
            {/* <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Far East Market
            </p> */}
          </div>

          {/* Hidden overlay (Address) */}
          <div className="absolute inset-0 bg-[#1e3a8a]/90 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold">Belgium Office</p>
            {/* <p className="text-sm text-center mt-2 px-4">
              Room 117-118, Hoveniersstraat 30, Box 27, 2018 Antwerp, Belgium
            </p> */}
            <br />
            <p className="text-sm text-center mt-2 px-4">
              +32 3 400 4328
              <br />
              +32 475 973 948
              <br />
              <br />
              swapnil@kalpdiamonds.com
            </p>
          </div>
        </div>

        <div className="relative h-64 rounded-xl w-full bg-[#002366] p-5 flex flex-col gap-4 justify-center items-center group overflow-hidden transition-all duration-300">
          {/* Normal content */}
          <div className="p-4 flex justify-center items-center h-28 w-28 transition-transform duration-300 group-hover:scale-105">
            <img
              src="../assets/India.png"
              alt="Taiwan"
              className="object-contain h-full w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-center transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xl font-semibold tracking-tighter text-gray-200 text-center">
              INDIA
            </p>
            {/* <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Far East Market
            </p> */}
          </div>

          {/* Hidden overlay (Address) */}
          <div className="absolute inset-0 bg-[#1e3a8a]/90 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold">India Office</p>
            {/* <p className="text-sm text-center mt-2 px-4">
              340, 341,
              Diamond Village, Jadakhadi,
              Mahidharpura, Surat.
            </p> */}
            <br />
            <p className="text-sm text-center mt-2 px-4">
              Mumbai: +91 22 23630999
              <br />
              Surat: +91 261 2609977
              <br />
              <br />
              hitul@glacialdiamonds.com
            </p>
          </div>
        </div>


        <div className="relative h-64 rounded-xl w-full bg-[#002366] p-5 flex flex-col gap-4 justify-center items-center group overflow-hidden transition-all duration-300">
          {/* Normal content */}
          <div className="p-4 flex justify-center items-center h-28 w-28 transition-transform duration-300 group-hover:scale-105">
            <img
              src="../assets/Dubai.png"
              alt="Taiwan"
              className="object-contain h-full w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-center transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xl font-semibold tracking-tighter text-gray-200 text-center">
              DUBAI
            </p>
            {/* <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Far East Market
            </p> */}
          </div>

          {/* Hidden overlay (Address) */}
          <div className="absolute inset-0 bg-[#1e3a8a]/90 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold">Dubai Office</p>
            {/* <p className="text-sm text-center mt-2 px-4">
              Kalp Jewels FZCO
              27 I, Gold Tower, Cluster I,
              Jumeirah Lake Towers (JLT),
              Dubai, United Arab Emirates
            </p> */}
            <br />
            <p className="text-sm text-center mt-2 px-4">
              +971 44301999
              <br />
              Info.kalpjewels.ae@gmail.com
            </p>
          </div>
        </div>


        <div className="relative h-64 rounded-xl w-full bg-[#002366] p-5 flex flex-col gap-4 justify-center items-center group overflow-hidden transition-all duration-300">
          {/* Normal content */}
          <div className="p-4 flex justify-center items-center h-28 w-28 transition-transform duration-300 group-hover:scale-105">
            <img
              src="../assets/China.png"
              alt="Taiwan"
              className="object-contain h-full w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-center transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xl font-semibold tracking-tighter text-gray-200 text-center">
              HONG KONG
            </p>
            {/* <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Far East Market
            </p> */}
          </div>

          {/* Hidden overlay (Address) */}
          <div className="absolute inset-0 bg-[#1e3a8a]/90 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold">Hong Kong Office</p>
            {/* <p className="text-sm text-center mt-2 px-4">
              GD HK LTD
              Unit c, 18/F, No 8 Hart Avenue , Tsim Sha Tsui, Kowloon, Hong Kong
            </p> */}
            <br />
            <p className="text-sm text-center mt-2 px-4">
              +85226239440
              <br />
              gdhklimited@gmail.com
            </p>
          </div>
        </div>

        {/* <div className="relative h-64 rounded-xl w-full bg-[#002366] p-5 flex flex-col gap-4 justify-center items-center group overflow-hidden transition-all duration-300">
          
          <div className="p-4 flex justify-center items-center h-28 w-28 transition-transform duration-300 group-hover:scale-105">
            <img
              src="../assets/Taiwan.png"
              alt="Taiwan"
              className="object-contain h-full w-full"
            />
          </div>

          <div className="flex flex-col gap-2 items-center transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xl font-semibold tracking-tighter text-gray-200 text-center">
              Taiwan
            </p>
            <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Far East Market
            </p>
          </div>

          
          <div className="absolute inset-0 bg-[#1e3a8a]/90 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg font-semibold">Taiwan Office</p>
            <p className="text-sm text-center mt-2 px-4">
              GLACIAL TRADING CO
              10F-1,NO 233,XIN-YI ROAD,SECTION 4,
              DA AN DISTRICT, TAIPEI 106658,TAIWAN ROC.106
            </p>
            <br />
            <p className="text-sm text-center mt-2 px-4">
              +8860227095400
              EMAIL-glacial28848082@gmail.com
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
