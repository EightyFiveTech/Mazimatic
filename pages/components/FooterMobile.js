import React from 'react'

const FooterMobile = () => {
  return (
    <section id="FooterMobile">

        <img src="./assets/images/footer-mobile-bg.svg" className="footer-mobile-bg" />
    
    <div className="row">
        <div className="col-md-12 text-center top-div">
        <a href="#" className="to-top-a">BACK TO TOP</a>
                <br/>
        <a href="#"><img src="/assets/images/to-top.svg" className="to-top-img" /></a>
        <br/>

        <img src="/assets/images/footer-mobile-logo.svg" className="footer-mobile-logo" />
         
         <div className="row link-row">
         <div className="col-md-12">
                <a href="#OurVisionMobile"><p>Our Vision</p></a>
                <a href="#MaziVerseMobile"><p>MetaVerse</p></a>
                <a href="#NftkartMobile"><p>NFTKart</p></a>
                <a href="#RoadmapMobile"><p>RoadMap</p></a>
                <a href="#FeaturesMobile"><p>Features</p></a>
            </div>
         </div>


         <select className="mt-3">
          <option>English</option>
          </select>


        </div>

        <div className="col-md-12 bottom-div text-center">
            <p className="mt-5">Copyright   |   MaziMatic 2022</p>

            <a href="/privacy-policy">Privacy Policy |</a>
            <a href="/terms-and-conditions">Terms & Conditions |</a>
            <a href="/disclaimer">Disclaimer </a>
        </div>
    </div>

    </section>
  )
}

export default FooterMobile