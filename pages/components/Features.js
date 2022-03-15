import React, { useEffect, useRef } from 'react';

const Features = () => {

    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);

  return (
    <section id="Features">
        <img src="/assets/images/features-focus-1.png" className="features-focus-1" />
        <img src="/assets/images/features-focus-2.png" className="features-focus-2" />

       <img src="/assets/images/left-lines.png" className="left-lines" />
       <img src="/assets/images/right-lines.png" className="right-lines" />

        
        <img src="/assets/images/line.svg" className="bottom-line" />
        <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Featuresvideo2">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/features-video-2.mp4"
                />
            </video>
     <div className="row">
        <div className="col-md-12 text-center">
            <h2>Features</h2>
            <h3>CASINO VERSE</h3>
            <img src="/assets/images/line.svg" className="top-line" />
            </div> 
         </div>   

     <div className="features-outer">
     <img src="/assets/images/line.svg" className="middle-line" />
      <div className="row features-inner">
          <div className="col-md-4 video-div">
          <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Featuresvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/features-video.mp4"
                />
            </video>
              </div>
          <div className="col-md-4 text-div">
              <h4>PROTOTYPE</h4>
              <p>90 days</p>
              <ul>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Select Characters/Avatars</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 American Roulette</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Invite Friends</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Real Time voice chat</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Feel the casino environment</li>
              </ul>
              </div>
          <div className="col-md-4 text-div">
          <h4>FINAL BUILD</h4>
              <p>8-9 months</p>
              <ul>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Select Characters/Avatars</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Customize Avatars</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Poker/Rummy/Slot Machine/ American Roulette</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Connect Wallet</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Buy Avatars/Characters</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Buy Chips</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Real-time Voice Chats</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Real Life game experience</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Ambient Lightings</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Select Dealers</li>
                  <li>-&nbsp;&nbsp;&nbsp;&nbsp;	 Change tables/machines ( Free Play )</li>
              </ul>
              </div>
          </div>
          </div>

        </section>
  )
}

export default Features