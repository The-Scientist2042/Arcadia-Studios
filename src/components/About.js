import React,{ useEffect } from 'react';
import gsap from 'gsap'

function About() {

  useEffect(
    () => {
        const tl = gsap.timeline();
        tl.from('#home',{opacity:0, duration:.8, x:60, })
        tl.from('#abouttitle',{opacity:0, duration:.5, y:-30})
        tl.from('#aboutContent',{opacity:0, duration:.8, x:60})
    },[]
)
  
  return (
    <div id="owner">
      <div id='landingContainer' className=' container-fluid '>
        <div id="home" className='row'>
            <div id="about">
              <div id="abouttitle">
                Roadmap
              </div>
              <div className='row' id="aboutContent">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div class='one '>
                        <h1>
                          Phase One
                        </h1>
                        <p>
                          <ul>
                              <li>
                                Open Our Discord And Twitter For Everyone
                              </li>
                              <li>
                                Build Our Community
                              </li>
                              <li>
                                Marketing And Collabs
                              </li>    
                          </ul>
                        </p>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class='two '>
                      <h1>
                          Phase Two
                        </h1>
                        <p>
                          <ul>
                              <li>
                                Announce Mint Details Gen 1
                              </li>
                              <li>
                                Secondary Market Listing
                              </li>
                              <li>
                                Setup Holder Verification
                              </li>    
                              <li>
                                Start Working On Tools For The Project (i.e Copytrading...)
                              </li>  
                          </ul>
                        </p>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class='three '>
                      <h1>
                          Phase Three
                        </h1>
                        <p>
                          <ul>
                              <li>
                                Launch Gen 2 For Holders
                              </li>
                              <li>
                                Launch Merch
                              </li>
                              <li>
                                Get Our Casino And Games Site Open
                              </li>    
                              <li>
                                Collaborations With Bigger Projects
                              </li>  
                          </ul>
                        </p>
                      </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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

export default About