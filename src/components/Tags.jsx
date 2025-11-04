import React, { Children } from "react";

const features = [
  "Specialize in providing precise calibration from 0.80 mm till 4.10 mm",
  "Uniform assortments from IF till PK2 clarity, GIA standard",
  "Certified diamonds from 0.30 ct till 10.00 ct",
  "Ethical sourcing and compliance with industry standards",
];

const Features = () => {
  return (
    <div className="pt-10 flex flex-col gap-10 text-[#222]">
      <div className="flex justify-center items-center gap-3 flex-wrap m-auto">
        {features.map((feat, index) => (
          <div
            className="bg-[#1560BD] text-white text-sm text-center rounded-xl p-3 font-semibold"
            key={feat}
          >
            <h2>⚫ {feat}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
