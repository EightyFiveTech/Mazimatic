import { useState, useEffect} from 'react';
import Head from 'next/head'
import Navbar from './components/Navbar';
import Mainbanner from './components/Mainbanner';
import Play from './components/Play';
import Polygon from './components/Polygon';
import OurVision from './components/OurVision';
import MaziVerse from './components/MaziVerse';
import Verse from './components/Verse';
import Nftkart from './components/Nftkart';
import Collection from './components/Collection';
import Roadmap from './components/Roadmap';
import Features from './components/Features';
import Comingsoon from './components/Comingsoon';
import LoadingScreen from './components/LoadingScreen';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
//MOBILE COMPONENTS
import MainbannerMobile from './components/MainbannerMobile';
import PlayMobile from './components/PlayMobile';
import PolygonMobile from './components/PolygonMobile';
import OurVisionMobile from './components/OurVisionMobile';
import VerseMobile from './components/VerseMobile';
import MaziVerseMobile from './components/MaziVerseMobile';
import NftkartMobile from './components/NftkartMobile';
import CollectionMobile from './components/CollectionMobile';
import RoadmapMobile from './components/RoadmapMobile';
import FeaturesMobile from './components/FeaturesMobile';
import ComingsoonMobile from './components/ComingsoonMobile';
import TeamMobile from './components/TeamMobile';
import ContactMobile from './components/ContactMobile';
import FooterMobile from './components/FooterMobile';




export default function Home({ req }) {
  const [count, setCount] = useState(0)
  const [isLoaded, setIsLoaded] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);
  // if (!isMobile) {
  //   return (
  //     <div>
  //       <Head>
  //         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //         <title>Mazimatic - Casino Verse | Party Verse | Influencer Verse | Adventure Verse</title>
  //         <meta name="description" content="Welcome to Mazimatic. A one stop Metaverse hub for all types of entertainment from Casinos to Parties to meeting your favorite Influencers. Based on a Free-to-play and Play-to-earn model, users will dive in to our MaziVerse for an Experience that has never been seen and heard of." />
  //         <meta name="keywords" content="metaverse, mazimatic, party verse, influencer verse, casino verse, gaming, virtual world, augmented reality, virtual rality, crypto, cryptocurrencies, nft, nft market place, blockchain, blockchain technology, avatars, meta, metaverse technology, meta tech, metaverse token, metaverse crypto, metaverse app, polygon, bitcoin, ethereum, blochain developer." />
  //         <meta property="og:title" content="Mazimatic - Casino Verse | Party Verse | Influencer Verse | Adventure Verse" />
  //         <link rel="icon" href="/favicon.ico" />
  //         <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
  //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  //         <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
  //         <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
  //         <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  //         <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
  //         <link rel="stylesheet" href="assets/css/mobile.css" />
        
  //       </Head>
  //       {isLoaded == true ?
  //         <div className="top-wrapper">
  //           <LoadingScreen /></div> :
  //         <>
  //           <Navbar title="Navbar" id="basic-nav-dropdown" renderMenuOnMount={true} />
  //           <div className="top-wrapper">
  //             <Mainbanner />
  //           </div>
  //           <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
  //           <script src="assets/js/bootstrap.min.js" />
  //           <script src="assets/js/owl.carousel.min.js" />
  //         </>} </div>
  //   )
  // } else {
    return (
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Mazimatic - Casino Verse | Party Verse | Influencer Verse | Adventure Verse</title>
          <meta name="description" content="Welcome to Mazimatic. A one stop Metaverse hub for all types of entertainment from Casinos to Parties to meeting your favorite Influencers. Based on a Free-to-play and Play-to-earn model, users will dive in to our MaziVerse for an Experience that has never been seen and heard of." />
          <meta name="keywords" content="metaverse, mazimatic, party verse, influencer verse, casino verse, gaming, virtual world, augmented reality, virtual rality, crypto, cryptocurrencies, nft, nft market place, blockchain, blockchain technology, avatars, meta, metaverse technology, meta tech, metaverse token, metaverse crypto, metaverse app, polygon, bitcoin, ethereum, blochain developer." />
          <meta property="og:title" content="Mazimatic - Casino Verse | Party Verse | Influencer Verse | Adventure Verse" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
          <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
          <script src="assets/js/bootstrap.min.js" />
          <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
          <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
          <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="assets/css/mobile.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"></link>
        </Head>
        {isLoaded == true ?
          <div className="top-wrapper">
            <LoadingScreen /></div> :
          <>
            
            <div className="top-wrapper">
            <Navbar/>
            <Mainbanner />
            </div>
            <MainbannerMobile/>
            <Play />
            <PlayMobile/>
            <Polygon />
            <PolygonMobile/>
            <OurVision />
            <OurVisionMobile/>
            <MaziVerse />
            <MaziVerseMobile/>
            <Verse />
            <VerseMobile/>
            <Nftkart />
            <NftkartMobile/>
            <Collection />
            <CollectionMobile/>
            <Roadmap />
            <RoadmapMobile/>
            <Features />
            <FeaturesMobile/>
            <Comingsoon />
            <ComingsoonMobile/>
            <Team />
            <TeamMobile/>
            <Contact />
            <ContactMobile/>
            <Footer />
            <FooterMobile/>
            
            <script src="assets/js/owl.carousel.min.js" />
          </>} </div>
    )
  // }
}
