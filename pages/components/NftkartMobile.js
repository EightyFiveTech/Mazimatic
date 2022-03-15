import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NftkartMobile = () => {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);


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
   <section id="NftkartMobile">

<video autoPlay ref={videoRef}
            loop
            muted id="NftvideoMobile">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-video.mp4"
                />
</video>

       <div className="row">
           <div className="col-md-12 text-center">
               <h2>NFTKart</h2>
                <br/>
               <p className="mt-5">MaziVerse’s exclusive <span>NFT marketplace</span> for our avatars, characters, and real-time item purchases. NFT marketplace will be open for our own creators who will help us <span>mint NFTs for our real-time use.</span> </p>
               <p className="mt-4">Users can be able to purchase NFTs for their <span>real-time gameplay</span> which will make our multiplayer gaming more interesting.</p>
               <p className="mt-4 mb-5">NFTs could be Versace-branded casino tables to <span>Louis Vuitton chairs and Cartier Roulette wheels.</span> Customize your characters with branded or premium luxuries, select dealers, select tables, and many more interesting features. <span>Launching Video soon.</span></p>
                <br/>
               <a className="join-btn mt-4" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" />JOIN OUR TELEGRAM GROUP </a><br/>
               <hr/>
               <br/>


               
           </div>
       </div>

    <div className="row">
        <div className="col-md-12" id="nft-mobile-slider">
        <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-1.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>
                        <div className="nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-2.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>
                        <div className="nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-3.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>
                        <div className="nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-4.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>
                        <div className="nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-5.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>
            </Slider>
        </div>
    </div>


   </section>
  )
}

export default NftkartMobile