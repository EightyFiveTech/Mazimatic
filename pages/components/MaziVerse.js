import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MaziVerse = () => { 
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "slider-images",
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 1580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],

    };
    return (
        <section id="mazi-verse">
            <div className="maziverse-inner">
                <hr style={{ width: 100 + '%', position: 'absolute', bottom: -25 + 'px', opacity: 0.1 }} />
                {/* <img src="/assets/images/Rectangle 255.svg" className='rect-255' /> */}
                <div className="left">
                    <h1>MaziVerse</h1>
                    <br /><br />
                    <p className="first-p"><span>MaziVerse</span> will be our Metaverse brand that will house
                        different Metaverse projects. It will be a <span>futuristic gaming platform </span>
                        for users who wants to experience <span>real-time casino games, clubbing, experience roller
                            coster rides, and meet their favourite influencer.</span>
<br></br><br></br>
                        We are able to combine <span>Virtual reality gaming
                            and social living experience</span> with latest decentralised
                        Blockchain platform <span>- Polygon</span> to deliver an outstanding project for our
                        <span> seamless multi-player gaming, and transactions.</span> </p>
                </div>
                <div className="right">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2>Our initial rollouts will be</h2>
                    <div className="row1 met">
                        <div className="section1">
                            <img src="/assets/images/_.png" /> &nbsp;&nbsp;
                            <p>CASINOVERSE</p>
                        </div>
                        <div className="section2">
                            <img src="/assets/images/_.png" /> &nbsp;&nbsp;
                            <p>ADVENTUREVERSE</p>
                        </div>
                    </div>
                    <div className="row2 met">
                        <div className="section3">
                            <img src="/assets/images/_.png" /> &nbsp;&nbsp;
                            <p>PARTYVERSE</p>
                        </div>
                        <div className="section4">
                            <img src="/assets/images/_.png" /> &nbsp;&nbsp;
                            <p>INFLUENCERVERSE</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maziverse-outer">

                <div className='wrapper slider'>
                    <img src="/assets/images/Rectangle 246.svg" className='w-images' />
                    <div style={{ position: 'absolute', top: -3 + '%', right: 10 + '%' }}>
                        <button onClick={() => sliderRef?.slickPrev()}>
                            <img style={{ width: 20 + '%' }} src="/assets/images/lt.png" />
                        </button>
                        <button onClick={() => sliderRef?.slickNext()}>
                            <img style={{ width: 20 + '%' }} src="/assets/images/gt.png" />
                        </button>
                    </div>
                    <Slider ref={c => setSliderRef(c)} {...settings} >
                        <div className="parent-prototype">
                            <img src='/assets/images/influencer_banner_2 1.png' />
                            <div className='prototype'>
                                <p>Prototyping</p>
                            </div>

                        </div>
                        <div className="parent-prototype">
                            <img src='/assets/images/casino_banner_1 1.png' />
                            <div className='prototype'>
                                <p>Prototyping</p>
                            </div>
                        </div>
                        <div className="parent-prototype">
                            <img src='/assets/images/casino_banner_1 2.png' />
                            <div className='prototype'>
                                <p>Prototyping</p>
                            </div>
                        </div>

                        <div className="parent-prototype">
                            <img src='/assets/images/influencer_banner_2 1.png' />
                            <div className='prototype'>
                                <p>Prototyping</p>
                            </div>
                        </div>
                        <div className="parent-prototype">
                            <img src='/assets/images/casino_banner_1 1.png' />
                            <div className='prototype'>
                                <p>Prototyping</p>
                            </div>
                        </div>
                        <div className="parent-prototype">
                            <img src='/assets/images/casino_banner_1 2.png' />
                            <div className='prototype'>

                                <p>Prototyping</p>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className='outers'>
                    <div className='outer-left'>
                        <h2>Play more, live more...</h2>
                    </div>
                    <div className='outer-right'>
                        <div className="telegram">
                        <a className="join-btn" rel="noopener noreferrer" href="https://t.me/mazimatic" target="_blank"><img src="/assets/images/icons/plane.svg" /> JOIN OUR TELEGRAM GROUP </a>
                    
                        </div>
                    </div>
                    

                </div>
                <img src="/assets/images/line.svg" className="line m" />

            </div>
        </section>
    );
}

export default MaziVerse;

