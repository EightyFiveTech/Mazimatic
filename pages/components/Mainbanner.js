import { useState, useEffect, useRef} from 'react';

const Mainbanner = () => {
    const videoRef = useRef(null);
    useEffect(() => {
      if(videoRef){
        videoRef.current.play();
      }
    }, []);
 
  return (
   <section id="Mainbanner">
       <video ref={videoRef} autoPlay
            width="250"
            loop
            muted id="Bannervideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/video.mp4"
                />
        </video>
       <div className="row">
           <div className="col-md-1 col-sm-1 col-lg-1"></div>
           <div className="col-md-12 col-sm-12 col-lg-5 ">
           <p className="welcome_p">Welcome to Mazimatic<img src="/assets/images/icons/hand.svg" /></p> 
            </div>
           <div className="col-md-12 col-sm-12 col-lg-6"></div>
           </div>

           <div className="row">
           <div className="col-md-12 col-sm-12 col-lg-1"></div>
           <div className="col-md-12 col-sm-12 col-lg-5">
               <h1><a href="https://instagram.com/mazimatic.official?utm_medium=copy_link"><img src="/assets/images/icons/mobile-instagram.svg" /> Play more</a></h1>
               <h1 className="blue-text"><a href="https://t.me/mazimatic"><img src="/assets/images/icons/telegram.svg" /></a> Live More!</h1>
                  <p className="title_p"><a href="https://www.linkedin.com/company/mazimatic"><img src="/assets/images/icons/twitter.svg" /></a><p style={{ paddingLeft: 20 }} >Blending the <span>metaverse</span> with the <span>real world.</span></p></p>
            </div>
           <div className="col-md-12 col-sm-12 col-lg-6">
           <img src="/assets/images/characters.png" className="characters-img" />
               </div>
           </div>   
       
    </section>
  )
}

export default Mainbanner