import React from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';

const Disclaimer = () => {
  return (
    <div>
    <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Mazimatic - Disclaimer</title>
          <meta name="description" content="Welcome to Mazimatic. A one stop Metaverse hub for all types of entertainment from Casinos to Parties to meeting your favorite Influencers. Based on a Free-to-play and Play-to-earn model, users will dive in to our MaziVerse for an Experience that has never been seen and heard of." />
          <meta name="keywords" content="metaverse, mazimatic, party verse, influencer verse, casino verse, gaming, virtual world, augmented reality, virtual rality, crypto, cryptocurrencies, nft, nft market place, blockchain, blockchain technology, avatars, meta, metaverse technology, meta tech, metaverse token, metaverse crypto, metaverse app, polygon, bitcoin, ethereum, blochain developer." />
          <meta property="og:title" content="Mazimatic - Casino Verse | Party Verse | Influencer Verse | Adventure Verse" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
          <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
          <script src="assets/js/bootstrap.min.js" />
          <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
          <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
          <link rel="stylesheet" href="assets/css/mobile.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"></link>
        </Head>
    
        <Navbar/>

      <section id="Disclaimer">
          <div className="row">
              <div className="col-md-12">
              <h1>Disclaimer for Mazimatic</h1>

<p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at mazimatic.official@gmail.com. Our Disclaimer was generated with the help of the <a href="https://www.termsfeed.com/disclaimer-generator/">Disclaimer Generator</a>.</p>

<h2>Disclaimers for Mazimatic</h2>

<p>All the information on this website - https://mazimatic.com/ - is published in good faith and for general information purpose only. Mazimatic does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Mazimatic), is strictly at your own risk. Mazimatic will not be liable for any losses and/or damages in connection with the use of our website.</p>

<p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

<p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>

<h2>Consent</h2>

<p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

<h2>Update</h2>

<p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
              </div>
          </div>
      </section>  

      <Footer />
      <FooterMobile/>
            


    </div>
  )
}

export default Disclaimer