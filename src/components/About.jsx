import { Building, Factory, Globe } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div id="about" className="max-w-7xl mx-auto py-1 md:py-10 flex flex-col gap-10 px-5 mt-10">
      <div className="flex justify-between items-center flex-col md:flex-row gap-4 lg:gap-0">
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center ">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            <h1>Where are we</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl max-w-2xl font-semibold tracking-tight">
              We have a Global presence across all major ports around the World
            </h1>
            <p className="text-gray-600 text-sm font-semibold tracking-tight max-w-2xl">
              Kalp Diamonds is a legacy built over three generations of expertise and trust.
              We craft and curate the finest rough and polished diamonds, with mastery in manufacturing, wholesale, and retail.
              Every stone reflects our commitment to pristine quality, offered at unmatched value.
            </p>
          </div>
        </div>
        <div>
          <img
            src="../assets/smalldiamonds.png"
            alt=""
            className="lg:h-52 rounded-2xl h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row pb-5 gap-5 justify-center">

        <div className="h-64 rounded-xl w-full bg-[#305ddd] p-5 flex flex-col gap-4 justify-center items-center">
          <div className="p-4 flex justify-center items-center h-28 w-28">
            <img
              src="../assets/Belgium.png"
              alt="Antwerp"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl font-semibold tracking-tighter text-gray-200">
              BELGIUM
            </p>
            <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Head Office & Global Trading Hub
            </p>
          </div>
        </div>

        <div className="h-64 rounded-xl w-full bg-[#305ddd] p-5 flex flex-col gap-4 justify-center items-center">
          <div className="p-4 flex justify-center items-center h-28 w-28">
            <img
              src="../assets/India.png"
              alt="Antwerp"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl font-semibold tracking-tighter text-gray-200">
              INDIA
            </p>
            <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Manufacturing Hub
            </p>
          </div>
        </div>


        <div className="h-64 rounded-xl w-full bg-[#305ddd] p-5 flex flex-col gap-4 justify-center items-center">
          <div className="p-4 flex justify-center items-center h-28 w-28">
            <img
              src="../assets/Dubai.png"
              alt="Antwerp"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl font-semibold tracking-tighter text-gray-200">
              DUBAI
            </p>
            <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Middle East Market
            </p>
          </div>
        </div>


        <div className="h-64 rounded-xl w-full bg-[#305ddd] p-5 flex flex-col gap-4 justify-center items-center">
          <div className="p-4 flex justify-center items-center h-28 w-28">
            <img
              src="../assets/China.png"
              alt="Antwerp"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl font-semibold tracking-tighter text-gray-200 items-center text-center">
              HONG KONG, CHINA & TAIWAN
            </p>
            <p className="w-fit border-2 text-sm py-1 px-2 border-gray-400 text-gray-300 rounded-3xl">
              Serving Far East Market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
