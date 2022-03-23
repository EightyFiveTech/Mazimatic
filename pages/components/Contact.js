import React, { useEffect, useRef } from 'react';

const Contact = () => {

    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);

  return (
    <section id="Contact">
        <img src="/assets/images/line.svg" className="line-one" />
        <img src="/assets/images/line.svg" className="line-two" />
        <img src="/assets/images/contact-triangle.png" className="contact-triangle" />
        <img src="/assets/images/contact-focus.png" className="contact-focus" />
        <div className="row">
           <div className="col-md-4 col-sm-4">
           <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Contactvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/contact-video.mp4"
                />
            </video>
           </div>
            <div className="col-md-8 col-sm-8">
                <h2>Contact Us</h2>
            
            <div className="row first-row">
                <div className="col-md-6 col-sm-6">
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="col-md-6 col-sm-6">
                <select>
  <option selected value="">India</option>
  <option value="">USA</option>
  <option value="">England</option>
</select>
                </div>
            </div>

            <div className="row second-row">
                <div className="col-md-12 col-sm-12">
                <input type="text" placeholder="Enter your email Id" />
                </div>
            </div>

            <div className="row second-row">
                <div className="col-md-12 col-sm-12">
                <textarea placeholder="Write your message here..." rows="4" />
                </div>
            </div>

            </div>
        </div>
    </section>
  )
}

export default Contact