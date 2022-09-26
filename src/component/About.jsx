import React from 'react'
import { NavLink } from 'react-router-dom'


const About = () => {
  return (
    <div>
     
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
            The Apple Store is a chain of retail stores owned and operated by Apple Inc. 
            The stores sell various Apple products, including Mac personal computers, iPhone smartphones,
            iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, software,
            and both Apple-branded and selected third-party accessories.
            Check out our selection of iPhone cases here at the Apple Store. 
            Shop iPhone cases that will protect your iPhone and look awesome.
            Choose from a variety of designs and Models. 
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
           <div className='col-md-6 d-flex justify-content-center'>
            <img src='/images/m.jpg' alt='About Us' height='400px' width='400px' />
           </div>
           <div className='col-md-6'>
            <form>

            </form>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About