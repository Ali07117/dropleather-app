import React from 'react';
import Navbar from './components/navbar/page';
import Hero from './components/hero/page';
import Cards from './components/cards/page';
import Marquee from './components/marqueeSection/page';
import MarqueeSection from './components/marqueeSection/page';
import ConnectSection1 from './components/connectSection1/page';
import ConnectSection2 from './components/connectSection2/page';
import Idea from './components/idea/page';
import Payment from './components/payment/page';
import EasyIntegration from './components/easyIntegration/page';
import MarketingTrend from './components/marketingTrend/page';
import Footer from './components/footer/footer';



function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <MarqueeSection/>
      <div className='mt-[80px]'><ConnectSection1 img={"section1"} heading={"Connect Your Store to Dropleather"} parafirst={"Selling on"} parasecond={", or another ecommerce platform? Seamlessly connect your store and unlock the world’s first white-label leather dropshipping solution."} shopify={"shopify"} woocommerce={"WooCommerce"} cooma={","} button={"Connect Your Store"} buttonimg={"connecticonwhite"}/></div>
      <div className='mt-[40px]'><ConnectSection2/></div>
      <div className='mt-[40px]'><ConnectSection1 img={"section3"} heading={"Add Your Custom Design to Products"} parafirst={"You can print or embroider your own designs on leather jackets, bags, and more. Just choose the product, upload your artwork, and we’ll handle the rest."} button={"Start Customizing"} buttonimg={"customizingicon"}/></div>
      <Idea/>
      <Payment/>
      <EasyIntegration/>
      <MarketingTrend/>
      <Footer/>
      {/* <div className='mt-[40px]'><ConnectSection1 img={"section3"} heading={"Add Your Custom Design to Products"} parafirst={"You can print or embroider your own designs on leather jackets, bags, and more. Just choose the product, upload your artwork, and we’ll handle the rest."} button={"Start Customizing"} buttonimg={"customizingicon"}/></div> */}
    </div>
  );
}

export default page;
