import React from 'react'
import { Routes, Route } from "react-router-dom"

import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Trust from './components/Trust'
import WhyUsSection from './components/Service'
import Footer from './components/Footer'
import ContactUs_Page from "./components/ContactUs_Page";

const App = () => {
  return (
    <>
      <Navbar />   {/* keep navbar globally always visible */}

      <Routes>
        {/* Home page */}
        <Route 
          path="/" 
          element={
            <div>
              <Landing />
              <WhyUsSection />
              <Trust />
              <About />
              <Footer />
            </div>
          } 
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactUs_Page />} />
      </Routes>
    </>
  )
}

export default App
