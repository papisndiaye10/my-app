import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='bg-dark text-white pt-5 pb-4'>
          <div className='container text-center text-md-left'>
            <div className='row text-center text-md-left'>
              <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>APPLE STORE</h5>
                <p>The Apple Store is a chain of retail stores owned and operated by Apple Inc.
                 The stores sell various Apple products, including Mac personal computers, iPhone smartphones,
                 iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, 
                </p>
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Products</h5>
                <p> Iphone</p>
                <p>Mac Book</p>
                <p>Apple Watch</p>
                <p>AirPods</p>
                <p>Ipad</p>
              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3' >
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>UseFul links</h5>
                <p>
                  <NavLink to='/' className='text-white'>REGISTER</NavLink>
                </p>
                <p>
                  <NavLink to='/about' className='text-white'>ABOUT</NavLink>
                </p>
                <p>
                  <NavLink to='/cart' className='text-white'>CART</NavLink>
                </p>
                <p>
                  <NavLink to='/contact' className='text-white'>HELP</NavLink>
                </p>
              </div>
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>CONTACT</h5>
                <p>
                  <i className='fa-solid fa-house mr-3'></i>Dakar, Medina rue 5x16, Sen
                </p>
                <p>
                  <i className='fa-solid fa-envelope mr-3'></i>Papisndiaye081@gmail.com
                </p>
                <p>
                  <i className='fa-solid fa-phone mr-3'></i>+221771617696
                </p>
                <p>
                  <i className='fa-solid fa-print mr-3'></i>+221338213481
                </p>
              </div>

              <hr className='mb-4' />
              <div className='row align-items-center'>
                <div className='col-md-7 col-lg-8'>
                  <p>Copyright 2022, All rights reserved by:
                      <strong className='text-warning'>Abdoulaye Ndiaye</strong>
                  </p>
                </div>
                <div className='col-md-5 col-lg-4'>
                  <div className='text-center text-md-right'>
                    <ul className='list-unstyled list-inline'>
                      <li className='list-inline-item'>
                        <NavLink to="/" className="btn-floating btn-sm text-white">
                             <i className='fab fa-facebook'/>
                        </NavLink>
                      </li>
                      <li className='list-inline-item'>
                        <NavLink to="/" className="btn-floating btn-sm text-white">
                             <i className='fab fa-twitter'></i>
                        </NavLink>
                      </li>
                      <li className='list-inline-item'>
                        <NavLink to="/" className="btn-floating btn-sm text-white">
                             <i className='fab fa-google-plus'></i>
                        </NavLink>
                      </li>
                      <li className='list-inline-item'>
                        <NavLink to="/" className="btn-floating btn-sm text-white">
                             <i className='fab fa-linkedin'></i>
                        </NavLink>
                      </li>
                      <li className='list-inline-item'>
                        <NavLink to="/" className="btn-floating btn-sm text-white">
                             <i className='fab fa-instagram'></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer