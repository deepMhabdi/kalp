import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex md:flex-row flex-col'>
      {/* left */}
      <div className='w-[90vw] md:w-20 h-16 md:h-[90vh] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#EDEDED] md:block px-4'>
        <img src="https://i.postimg.cc/Y2f229jm/image-removebg-preview.png" className="h-full md:h-auto" alt="" />
      </div>

      {/* right */}
      <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans px-4 sm:px-10 md:pd-20 lg:px-40">
        {/* Left Section */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-6 mb-10">
          <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold leading-tight">
            Let's get <br /> in touch
          </h1>

          <p className="text-lg font-medium">Don't be afraid <br /> to say hello with us!</p>

          <div className="space-y-4 text-gray-600 text-md">
            <div>
              <p className="font-semibold text-gray-500">Phone</p>
              <p className="text-black font-semibold">+ (2) 578-365-379</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500">Email</p>
              <p className="text-black font-semibold ">hello@slabs.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-500">Office</p>
              <p className="text-black font-semibold  ">
                230 Norman Street New York, QC (USA) H8R 1A1
              </p>
              <div className='flex items-center'>
                <a
                  href="#"
                  className="text-black font-semibold  underline hover:text-yellow-500 transition"
                >
                  See on Google Map
                </a>
                <img className='w-9' src="https://i.postimg.cc/HLqxKdC2/image-removebg-preview-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[45%] flex flex-col pb-12">
          {/* Navbar */}
          <div className="flex justify-between items-center px-8 py-4 lg:pr-0 text-sm border-x-[3px] border-[#EDEDED]">
            {/* Desktop Navigation (hidden on small screens) */}
            <div className="hidden lg:flex w-full justify-around">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Service
              </a>
              <a href="#" className="hover:underline">
                Technology
              </a>
              <a href="#" className="font-bold underline">
                Get in touch
              </a>
            </div>
            
            {/* Mobile Menu Button (hidden on large screens) */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 focus:outline-none"
              >
                {menuOpen ? (
                  // Close (X) icon SVG
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  // Hamburger menu icon SVG
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
            
            {/* Login Button (visible on all screens) */}
            <button className="bg-[#EEFF00] px-4 lg:px-8 py-2 lg:py-3 font-semibold">
              Login
            </button>
          </div>
          
          {/* Mobile Menu (shown when menuOpen is true) */}
          {menuOpen && (
            <div className="lg:hidden bg-white border-x-[3px] border-[#EDEDED] px-8 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:underline">
                  Home
                </a>
                <a href="#" className="hover:underline">
                  Service
                </a>
                <a href="#" className="hover:underline">
                  Technology
                </a>
                <a href="#" className="font-bold underline">
                  Get in touch
                </a>
              </div>
            </div>
          )}

          {/* Info Text */}
          <div className="flex-grow p-10 border-x-[3px] border-[#EDEDED] flex items-center space-x-6 pl-0">
            <svg className='lg:translate-y-10' width="187" height="19" viewBox="0 0 187 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="9.5" x2="176" y2="9.5" stroke="black" strokeWidth="3" />
              <path d="M187 9.5L173.5 17.7272V1.27276L187 9.5Z" fill="black" />
            </svg>

            <p className="lg:translate-y-10 text-gray-500 max-w-md">
              Great! We're excited to hear from you and let's start something
              special together. <br /> Call us for any inquiry.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-black text-white p-4 sm:p-10">
            <h2 className="text-xl font-semibold mb-6">Contact</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border-b border-white focus:outline-none p-2 placeholder-white pl-0"
                />
                <input
                  type="email"
                  placeholder="E mail"
                  className="bg-transparent border-b border-white focus:outline-none p-2 placeholder-white pl-0"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-transparent border-b border-white focus:outline-none p-2 placeholder-white pl-0"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent border-b border-white focus:outline-none p-2 placeholder-white pl-0"
                />
              </div>
              <textarea
                placeholder="Tell us about your interested in"
                className="bg-transparent border-b border-white focus:outline-none p-2 w-full placeholder-white pl-0"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#EEFF00] text-black font-semibold py-3 mt-4 hover:bg-yellow-400 transition"
              >
                Send to us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default App