import { useState, useEffect, useRef} from 'react';

const MainbannerMobile = () => {
    const videoRef = useRef(null);
    useEffect(() => {
      if(videoRef){
        videoRef.current.play();
      }
    }, []);
  return (
    <section id="MainbannerMobile">
        <video ref={videoRef} autoPlay
            width="250"
            loop
            muted id="Bannervideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/video.mp4"
                />
        </video>
        <div className="row">
            <div className="col-md-12 text-center">
                <a href="https://instagram.com/mazimatic.official?utm_medium=copy_link"  className="social"><img src="./assets/images/icons/mobile-instagram.svg" /></a>
                <a className="social" href="https://t.me/mazimatic"><img src="./assets/images/icons/mobile-telegram.svg" /></a>
                <a className="social" href="https://www.linkedin.com/company/mazimatic"><img src="./assets/images/icons/mobile-twitter.svg" /></a>

                <p className="wel_p mt-4">Welcome to Mazimatic<img src="/assets/images/icons/hand.svg" /></p>
                <h1>Play more<br/><span>Live More!</span></h1>
                <p className="title_p">Blending the <span>metaverse</span> with the <span>real world</span></p>

                <img src="/assets/images/characters.png" className="characters-img-mobile" />
                <div className="bottom-blend"></div>
            </div>
        </div>

    </section>
  )
}

export default MainbannerMobile