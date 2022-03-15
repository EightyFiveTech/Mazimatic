import React, { useEffect, useRef } from 'react';

const Nftkart = () => {

    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);


  return (
    <section id="Nftkart">

<div className="nft-top-blend-div"></div>    
<div className="nft-bottom-blend-div"></div>       


<a className="join-btn" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" />JOIN OUR TELEGRAM GROUP </a>

<video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Nftvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/nft-video.mp4"
                />
</video>

    <img src="/assets/images/line.svg" className="line" />    
    
    <div className="row">
        <div className="col-md-7 left-div">
            <div className="row">
                <div className="col-md-6 left">

                 <div className="row">
                    <div className="col-md-12 nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-1.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div> 
                        <div className="col-md-12 nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-2.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>    
                     </div>

                </div>
                <div className="col-md-6 right">
                <div className="row">
                    <div className="col-md-12 nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-3.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div> 
                        <div className="col-md-12 nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-4.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>  
                        <div className="col-md-12 nft-item">
                        <h4>OG Sheep</h4>
                        <h5>@udeen_lj</h5>
                        <img src="/assets/images/nft-img-5.png" className="nft-img" />
                        <button>2.34 MATIC</button>
                        </div>    
                     </div>

                    </div>
                </div>
            </div>
        <div className="col-md-5 right-div">
        <h3>NFTKart</h3>    
<p className="first-p">MaziVerse’s exclusive <span>NFT marketplace</span> for our avatars, characters, and real-time item purchases. NFT marketplace will be open for our own creators who will help us <span>mint NFTs for our real-time use.</span> </p>
<p>Users can be able to purchase NFTs for their <span>real-time gameplay</span> which will make our multiplayer gaming more interesting.</p>
<p>NFTs could be Versace-branded casino tables to <span>Louis Vuitton chairs and Cartier Roulette wheels.</span> Customize your characters with branded or premium luxuries, select dealers, select tables, and many more interesting features. <span>Launching Video soon.</span></p>
        </div>
    </div>

    </section>
  )
}

export default Nftkart