import React from "react";
import WhyUs from "./Feature";

const Trust = () => {
  return (
    <div id="trust" className="max-w-7xl mx-auto pb-10 flex flex-col gap-10 px-5 mt-10">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2 items-center ">
          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
          <h1>Why Trust Us</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-center md:text-4xl max-w-2xl font-semibold tracking-tight">
            Providing Excellence and Expertise in Every Solution
          </h1>
          <p className="text-gray-600 text-center text-sm font-semibold tracking-tight max-w-2xl">
            We are a certified member of the Responsible Jewellery Council (RJC
            0000 5612). For the past 30 years, we've built our legacy by
            offering pristine quality at fair prices with transparency and
            trust.
          </p>
        </div>
      </div>
      <div>
                <WhyUs />
      </div>
    </div>
  );
};

export default Trust;
