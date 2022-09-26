import React from 'react'
import Header from './Header'
import Product from './Product'

const Home = () => {
  return (
    <div>
     
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item">
            <img src="/images/f.jpg" class="d-block w-100" alt="Iphone" height="500px" />
              <div class="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div class="carousel-item">
            <img src="/images/i.jpg" class="d-block w-100"  alt="Airpods" height="500px" />
              <div class="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div class="carousel-item active">
            <img src="/images/j.jpg" class="d-block w-100" alt="Iphone" height="500px" />
              <div class="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div class="carousel-item">
            <img src="/images/c.jpg" class="d-block w-100"  alt="Macbook" height="500px" />
              <div class="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div class="carousel-item">
            <img src="/images/e.jpeg" class="d-block w-100"  alt="Applewatch" height="500px" />
              <div class="carousel-caption d-none d-md-block">
              </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  )
}

export default Home