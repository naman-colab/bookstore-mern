import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
