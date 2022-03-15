import React, { useEffect, useRef } from 'react';

const Polygon = () => {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },5000)
    }, []);


  return (
    <section id="Polygon">
        <video autoPlay ref={videoRef}
            width="250"
            loop
            muted id="Polygonvideo">
                <source
                    src="https://mazimatic.s3.ap-south-1.amazonaws.com/polygon-video.mp4"
                />
        </video> 
     
     <div className="blend-div-top"></div>
     <div className="blend-div-bottom"></div>

     <div className="row">
         <div className="col-md-12 text-center">
             <img src="/assets/images/together.svg" className="together" />
             <img src="/assets/images/together-with-polygon.svg" className="together-with-polygon" />
         </div>
     </div>

    </section>
  )
}

export default Polygon