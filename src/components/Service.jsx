import React from 'react';
import Features from './Tags';

const WhyUsSection = () => {
  return (
    <div id='services' className="pb-10 px-4 sm:px-6 lg:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-2 items-center ">
            <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
            <h1>What we Serve</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-center md:text-4xl max-w-2xl font-semibold tracking-tight">
              From rough to polished, we offer comprehensive diamond solutions          </h1>

          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-10">

          {/* Feature 1 - Personalized approach */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-4xl sm:text-4xl font-light text-gray-400">01</span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-xl font-semibold tracking-tight text-gray-600 mb-4">
                  Rough Diamonds
                </h3>
                <p className="text-gray-600 text-base  leading-relaxed">
                  Ethical sourcing & first-hand pricing from trusted mining corporations.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="https://cdn.shopify.com/s/files/1/0073/0621/5477/files/Gemini_Generated_Image_qhjnjkqhjnjkqhjn_480x480.jpg?v=1726208301"
                alt="Family discussing home plans with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 2 - Expert guidance */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-4xl sm:text-4xl font-light text-gray-400">02</span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-xl font-semibold tracking-tight text-gray-600 mb-4">
                  Polished Diamonds
                </h3>
                <p className="text-gray-600 text-base  leading-relaxed">
                  Global reach & flexible assortments with certified quality.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <img
                src="../assets/diamond2.png"
                alt="Real estate professionals working with documents and house models"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Feature 3 - Seamless experience */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-3xl sm:text-4xl font-light text-gray-400">03</span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl sm:text-xl font-semibold tracking-tight text-gray-600 mb-4">
                  Custom Requirements
                </h3>
                <p className="text-gray-600 text-base  leading-relaxed">
                  Tailored diamonds by shape, color, clarity to your specifications.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="https://img.freepik.com/premium-photo/diamond-classic-cut_103577-3381.jpg?semt=ais_incoming&w=740&q=80"
                alt="Happy family signing documents with real estate agent"
                className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
        <Features />
      </div>
    </div>
  );
};

export default WhyUsSection;