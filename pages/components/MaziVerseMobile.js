import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MaziVerseMobile = () => {
  
    
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        loop:true,
        // autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: "slider-images",
    };


  return (
    <section id="MaziVerseMobile">
        <div className="row">
            <div className="col-md-12 text-center">
                <h2>MaziVerse</h2>
                <p className="mt-5"><span>MaziVerse</span> will be our Metaverse brand that will house different Metaverse projects. It will be a <span>futuristic gaming platform</span> for users who wants to experience <span>real-time casino games, clubbing, experience roller coster rides, and meet their favourite influencer. </span></p>
                <p className="mt-5">We are able to combine <span>Virtual reality gaming and social living experience</span> with latest decentralised Blockchain platform <span>- Polygon</span> to deliver an outstanding project for our <span>seamless multi-player gaming, and transactions.</span> </p>
                <h3 className="mt-5">Our initial rollouts will be</h3>

                <h4 className="mt-5">CASINOVERSE</h4>
                <h4 className="mt-4">PARTYVERSE</h4>
                <h4 className="mt-4">ADVENTUREVERSE</h4>
                <h4 className="mt-4">INFLUENCERVERSE</h4>

                <div className="row">
                    <div className="col-md-12" id="maziverse-mobile-slider">
                    <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="mazi-item">
                            <img src="/assets/images/influencer_banner_2 1.png" />
                        </div>
                        <div className="mazi-item">
                          <img src='/assets/images/casino_banner_1 1.png' />
                        </div>
                        <div className="mazi-item">
                        <img src='/assets/images/casino_banner_1 2.png' />
                        </div>
                        <div className="mazi-item">
                        <img src='/assets/images/influencer_banner_2 1.png' />
                        </div>
                        <div className="mazi-item">
                        <img src='/assets/images/casino_banner_1 1.png' />
                        </div>
                        <div className="mazi-item">
                        <img src='/assets/images/casino_banner_1 2.png' />
                        </div>
                      
            </Slider>
                    </div>
                </div>

              <a className="join-btn mt-4" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" />JOIN OUR TELEGRAM GROUP </a><br/>
               <hr/>
            </div>
        </div>
    </section>
  )
}

export default MaziVerseMobile