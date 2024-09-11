import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
const Courses = () => {

  return (
    <div>
    <div className='fixed top-0 z-50'>

<Navbar/>
    </div>
    
    
      <div className=''>

      <Course/>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses
