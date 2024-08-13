import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default page

