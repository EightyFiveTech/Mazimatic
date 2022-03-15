import React from 'react'

const VerseMobile = () => {
    function showverse1(e) {
        var verseDiv = document.getElementById("verse-mobile-div");
        verseDiv.style.display = "none";
        var verseDiv1 = document.getElementById("verse-mobile-1-div");
        verseDiv1.style.opacity = "1";
        verseDiv1.style.position  = "relative";

      }  
      
      function showverse2(e) {
        var verseDiv = document.getElementById("verse-mobile-div");
        verseDiv.style.display = "none";
        var verseDiv2 = document.getElementById("verse-mobile-2-div");
        verseDiv2.style.opacity = "1";
        verseDiv2.style.position  = "relative";

      } 

      function showverse3(e) {
        var verseDiv = document.getElementById("verse-mobile-div");
        verseDiv.style.display = "none";
        var verseDiv3 = document.getElementById("verse-mobile-3-div");
        verseDiv3.style.opacity = "1";
        verseDiv3.style.position  = "relative";

      } 

      function showverse4(e) {
        var verseDiv = document.getElementById("verse-mobile-div");
        verseDiv.style.display = "none";
        var verseDiv4 = document.getElementById("verse-mobile-4-div");
        verseDiv4.style.opacity = "1";
        verseDiv4.style.position  = "relative";

      } 

      function showDefaultVerse(e) {
        var verseDiv = document.getElementById("verse-mobile-div");
        verseDiv.style.display = "inline-block";
       var verseDiv1 = document.getElementById("verse-mobile-1-div");
       verseDiv1.style.opacity = "0";
       verseDiv1.style.position = "absolute";
       var verseDiv2 = document.getElementById("verse-mobile-2-div");
       verseDiv2.style.opacity = "0";
       verseDiv2.style.position = "absolute";
       var verseDiv3 = document.getElementById("verse-mobile-3-div");
       verseDiv3.style.opacity = "0";
       verseDiv3.style.position = "absolute";
       var verseDiv4 = document.getElementById("verse-mobile-4-div");
       verseDiv4.style.opacity = "0";
       verseDiv4.style.position = "absolute";
      }  
  return (
    <section id="VerseMobile">
        <div className="row">
         <div className="col-md-12 text-center">
         <img src="/assets/images/left-multi-arrows.svg" className="left-multi-arrows" />
             <h2>Choose the VERSE you<br/> want to explore!</h2>
             <img src="/assets/images/right-multi-arrows.svg" className="right-multi-arrows" />
             </div>
         </div>

     <div id="verse-mobile-div">
      <div className="row verse-mobile-div" >
        <div className="col-6 text-center" onClick ={showverse1}>
            <img src="/assets/images/verse-1.png" />
            <button>CASINO VERSE</button>
            </div>  
        <div className="col-6 text-center" onClick ={showverse2}>
        <img src="/assets/images/verse-2.png" />
           <button>PARTY VERSE</button>
            </div>  
        <div className="col-6 text-center" onClick ={showverse3}>
        <img src="/assets/images/verse-3.png" />
            <button>ADVENTURE VERSE</button>
            </div>  
        <div className="col-6 text-center" onClick ={showverse4}>
        <img src="/assets/images/verse-4.png" /> 
            <button>INFLUENCER VERSE</button> 
            </div>  
          </div>   
    </div>

            <div className="verse-mobile-divs" id="verse-mobile-1-div">
            <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                <div className="row">
                  <div className="col-12 text-center">
                  <img src="/assets/images/verse-1.png" className="main-img" />
                      </div>  
                  <div className="col-12 text-center">
                      <h3>CASINO VERSE</h3>
                      <p>It will be a <span>virtual casino</span> where users can play, win and earn.<span>Invite friends, family</span>, or anyone anywhere in the world to play in a virtual world in a real time voice chats. <span>Feel and experience the real life casinos</span>  in the virtual world.</p>
                      </div>  
                  <div className="col-12 text-center">                     
                      <img src="/assets/images/casino-img-1.png" className="right-img-1" />
                      <img src="/assets/images/casino-img-2.png" className="right-img-2" />
                      </div>  
                </div>
            </div>

            <div className="verse-mobile-divs" id="verse-mobile-2-div">
            <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                <div className="row">
                  <div className="col-12 text-center">
                  <img src="/assets/images/verse-2.png" className="main-img" />
                      </div>  
                  <div className="col-12 text-center">
                      <h3>PARTY VERSE</h3>
                      <p>It will be a <span>virtual club</span> where users can <span>party, enjoy, and listen to artists.</span> A platform where artists can <span>perform</span> and users can join in a virtual world. </p>
                      </div>  
                  <div className="col-12 text-center">                     
                      <img src="/assets/images/party-img-1.png" className="right-img-1" />
                      <img src="/assets/images/party-img-2.png" className="right-img-2" />
                      </div>  
                </div>
            </div>

            <div className="verse-mobile-divs" id="verse-mobile-3-div">
            <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                <div className="row">
                  <div className="col-12 text-center">
                  <img src="/assets/images/verse-3.png" className="main-img" />
                      </div>  
                  <div className="col-12 text-center">
                      <h3>ADVENTURE VERSE</h3>
                      <p>It will be a <span>virtual adventure world.</span> Users can enjoy the <span>roller coster rides, games, and many more adventurous activities.</span> Everything in a virtual world. </p>
                      </div>  
                  <div className="col-12 text-center">                      
                      <img src="/assets/images/adventure-img-1.png" className="right-img-1" />
                      <img src="/assets/images/adventure-img-2.png" className="right-img-2" />
                      </div>  
                </div>
            </div>

            <div className="verse-mobile-divs" id="verse-mobile-4-div">
            <img src="/assets/images/close.svg" className="close" onClick ={showDefaultVerse}  />
                <div className="row">
                  <div className="col-12 text-center">
                  <img src="/assets/images/verse-4.png" className="main-img" />
                      </div>  
                  <div className="col-12 text-center">
                      <h3>INFLUENCER VERSE</h3>
                      <p>It will be a virtual world where <span>users can meet their influencers,</span> talk to them in real time. Yes, now it’s possible to meet your <span>influencers in the virtual world.</span></p>
                      </div>  
                  <div className="col-12 text-center">                    
                      <img src="/assets/images/influencer-img-1.png" className="right-img-1" />
                      <img src="/assets/images/influencer-img-2.png" className="right-img-2" />
                      </div>  
                </div>
            </div>


    </section>
  )
}

export default VerseMobile