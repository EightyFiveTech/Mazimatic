import React from 'react'

const Play = () => {
  return (
  <section id="Play">
     <div className="blend-div"></div>

      <div className="row play-outer">
          <div className="col-md-4 col-sm-4">
              <img src="/assets/images/left-lines.svg" className="left-lines-img"/>
              <img src="/assets/images/pie.svg" className="left-pie-img" />
              <h3 className="blue-text left-h3">BUY</h3>
              <p className="left-p">Purchase your favourite 
Avatars & customize 
them to suit your looks.</p>
              </div>
          <div className="col-md-4 col-sm-4 play-div">
              <img src="/assets/images/shield.svg" className="shield-img" />
              <img src="/assets/images/big-pie.svg" className="big-pie-img" />
              <img src="/assets/images/play-char.png" className="play-char-img" />
              <h3 className="white-txt middle-h3">PLAY</h3>
              <p className="middle-p">Play with purchased 
avatars in real time 
with your friends</p>
              </div>
          <div className="col-md-4 col-sm-4">
          <img src="/assets/images/right-lines.svg" className="right-lines-img"/>
          <img src="/assets/images/pie.svg" className="right-pie-img" />
              <h3 className="blue-text right-h3">EARN</h3>
              <p className="right-p">Win rewards like real casino gaming. Enjoy multi-player gaming with your friends.</p>
              </div>
          </div>
    </section>
  )
}

export default Play