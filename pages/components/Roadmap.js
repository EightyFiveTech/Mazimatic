import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Roadmap = () => {

    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        loop:true,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 8000,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: "slider-images",
    };

  return (
    <section id="Roadmap">
        <img src="/assets/images/roadmap-bg.svg" className="roadmap-bg" />
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>Roadmap</h2>
                <h3>HOW WE ARE GOING TO GO ABOUT ACHIEVING THIS?</h3>
            </div>
        </div>
      
      
      <div className="row">
          <div className="col-md-12" id="roadmap-slider">

          <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="roadmap-item">
                        <img src="/assets/images/done.svg" className="done" />
                        <h3>Q1</h3>
                        <p><img src="/assets/images/check.svg"/>Website development and launch.</p> 
                        <p><img src="/assets/images/check.svg" />Project System and architecture designing.</p>
                        <p><img src="/assets/images/check.svg" />Token smart contracts creation and deployment.</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Whitepaper.</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Metaverse prototyping.</p>
                        
                        </div>
                        <div className="roadmap-item">
              <h3>Q2</h3>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Decentralised exchange deployment.</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Mazimatic token presale and private sale</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Metaverse prototype testing and deployment</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />Investors & Advisors on Boarding</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Metaverse final project development initiation</p>
                        </div>
                        <div className="roadmap-item">
                        <h3>Q3</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Metaverse Launch preparations</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Marketing hype and branding</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft: -18, marginTop: -12 }} />NFTkart launch</p>
              <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>On boarding creators</p>
                        </div>
                        <div className="roadmap-item">
                        <h3>Q4</h3>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Casino Verse Testing – Desktop, VR, and other devices</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>NFTkart integration in Casino Verse</p>
                        <p><img src="/assets/images/loader.gif" style={{ height: 60, width: 60, marginLeft:-18, marginTop:-12}}/>Testing and Launch</p>
                        </div>
            </Slider>

          </div>
      </div>


    </section>
  )
}

export default Roadmap