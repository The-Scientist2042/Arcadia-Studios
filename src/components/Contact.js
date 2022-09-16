import React from 'react'
import gsap from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { ops } from '../Utilities/contactApproved'
import one from './1.png'
import two from './2.png'
import three from './3.png'


function Contact() {
  
  return (
    <div>
      <div id="owner">
      <div id='landingContainer' className='container-fluid'>
          <div id="home" className='row'>
            <div id="contact" className='row'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={one} class="d-block " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Toxic Faction</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={two} class="d-block " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Water Faction</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={three} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Fire Faction</h5>
        <p>Some representative placeholder content for the third slide.</p>
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
            </div>
          </div> 
              
               
            
          
        </div>
    </div>
    </div>
  )
}

export default Contact