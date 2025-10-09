import React from 'react'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Trust from './components/Trust'
import WhyUsSection from './components/Service'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Landing />
      <WhyUsSection />
      <Trust />
      <About />
      <Footer />
    </div>
  )
}

export default App