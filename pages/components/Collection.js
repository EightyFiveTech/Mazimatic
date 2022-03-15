import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Collection = () => {

    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        loop:true,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: "slider-images",
        // responsive: [
        //     {
        //         breakpoint: 900,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             adaptiveHeight: true,
        //         },
        //     },
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 5,
        //             slidesToScroll: 1,
        //         },
        //     },
        // ],

    };

  return (
    <section id="Collection">
        <div className="row">
            <div className="col-md-12 collection-inner">
                <div className="row">
                    <div className="col-md-1 text-center left">
                        <img src="/assets/images/collection-txt.svg" />
                        </div>
                    <div className="col-md-11 right" id="collection-slider">

                    <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="collection-item gradient-1">
                        <img src="/assets/images/icons/pacman.png" />
                        <h3>Art</h3>
                        <p>NFT</p>
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="/assets/images/icons/pacman.png" className="pac-top" />
                        <h3>Music</h3>
                        <p>NFT</p>
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="/assets/images/icons/pacman.png" />
                        <h3>Game</h3>
                        <p>NFT</p>
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="/assets/images/icons/pacman.png" className="pac-top" />
                        <h3>Virtual</h3>
                        <p>NFT</p>
                        </div>
                        <div className="collection-item gradient-1">
                        <img src="/assets/images/icons/pacman.png" />
                        <h3>Video</h3>
                        <p>NFT</p>
                        </div>
                        <div className="collection-item gradient-2">
                        <img src="/assets/images/icons/pacman.png" className="pac-top" />
                        <h3>Sports</h3>
                        <p>NFT</p>
                        </div>
                    </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Collection