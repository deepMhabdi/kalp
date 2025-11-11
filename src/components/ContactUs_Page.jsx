import React from "react";


const ContactUs_Page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-semibold tracking-tight px-4 sm:px-10 lg:px-28 pt-[90px]">
      {/* LEFT SECTION */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center gap-8 mb-16">
        
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold leading-tight tracking-tight">
          Let's get <br /> in touch
        </h1>

        {/* <p className="text-lg font-medium text-gray-700">
          Don’t be afraid <br /> to say hello with us!
        </p> */}

        <div className="space-y-6 text-gray-700 text-base">
          <div>
            <p className="font-semibold text-gray-500 uppercase tracking-wide">Phone</p>
            <p className="text-black font-semibold text-lg mt-1">+971 44301999</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500 uppercase tracking-wide">Email</p>
            <p className="text-black font-semibold text-lg mt-1">Info.kalpjewels.ae@gmail.com</p>
          </div>

          <div>
            <p className="font-semibold text-gray-500 uppercase tracking-wide">Belgium Office</p>
            <p className="text-black font-semibold text-lg mt-1 leading-tight">
              Room 117-118, Hoveniersstraat 30, Box 27, 2018 Antwerp, Belgium
            </p>
            {/* <div className="flex items-center mt-2 gap-2">
              <a
                href="#"
                className="text-black font-semibold underline hover:text-yellow-500 transition"
              >
                See on Google Map
              </a>
              <img src="https://i.postimg.cc/HLqxKdC2/image-removebg-preview-1.png" alt="" className="w-7" />
            </div> */}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION FORM */}
      <div className="w-full lg:w-[45%] flex flex-col pb-20 md:mt-48">
        <div className="bg-[#002366] text-white p-6 sm:p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border-b border-white focus:outline-none pb-2 placeholder-gray-300"
              />
              <input
                type="email"
                placeholder="E mail"
                className="bg-transparent border-b border-white focus:outline-none pb-2 placeholder-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone"
                className="bg-transparent border-b border-white focus:outline-none pb-2 placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-transparent border-b border-white focus:outline-none pb-2 placeholder-gray-300"
              />
            </div>

            <textarea
              placeholder="Tell us what you are interested in"
              className="bg-transparent border-b border-white focus:outline-none pb-2 w-full placeholder-gray-300"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#ffffff] text-[#002366] font-semibold py-3 mt-4 rounded-xl transition-all duration-200"
            >
              Send to us
            </button>
          </form>
        </div>
      </div>
    </div>
  ); 
};

export default ContactUs_Page;
