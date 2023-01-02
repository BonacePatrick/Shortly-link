import React from 'react'
import Cta from '../Pages/Cta'
import FeatureBox from '../Pages/FeatureBox'
import Footer from '../Pages/Footer'
import Shorten from '../Pages/Shorten'
import Stats from '../Pages/Stats'
import Hero from './Hero'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Shorten/>
    <Stats/>
    <FeatureBox/>
    <Cta/>
    <Footer/>
    </>
  )
}

export default Home