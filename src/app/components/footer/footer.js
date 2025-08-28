'use client'

import React, { useState, useEffect } from "react";
import FooterUnderline from '../footerunderline/page';

const countries = [
  { name: "US English", flag: "/assets/usflag.svg" },
  { name: "Português (BR)", flag: "/assets/brazil.svg" },
  { name: "English (CA)", flag: "/assets/canadian.svg" },
  { name: "Norsk", flag: "/assets/dansk.svg" },
  { name: "Dansk", flag: "/assets/denmark.svg" },
  { name: "Eesti", flag: "/assets/estonian.svg" },
  { name: "Suomi", flag: "/assets/finnish.svg" },
  { name: "Français", flag: "/assets/french.svg" },
  { name: "Deutsch", flag: "/assets/german.svg" },
  { name: "Nederlands", flag: "/assets/holand.svg" },
  { name: "Italiano", flag: "/assets/italian.svg" },
  { name: "Latviešu", flag: "/assets/latvia.svg" },
  { name: "Lietuvių", flag: "/assets/lithuania.svg" },
  { name: "Português (PT)", flag: "/assets/portugal.svg" },
  { name: "Español", flag: "/assets/spain.svg" },
  { name: "Svenska", flag: "/assets/sweeden.svg" },
  { name: "UK English", flag: "/assets/uk.svg" },
];

function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  
    // Disable scrolling when dropdown is open
    useEffect(() => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isOpen]);
  
    const handleSelect = (country) => {
      setSelectedCountry(country);
      setIsOpen(false); // close dropdown and hide overlay
    };
    return (
        <>
        
        <div className='bg-[#000000] pt-[60px] footer-main-container min-h-[100px] px-[100px]'>
            <div className='flex justify-between footer-inner-container gap-[40px]'>
                <div className="left footer-left">
                    <p className='font-[display] font-[800] footer-logo-text text-[37.47px] leading-[56.21px] text-[#FFFFFF]'>WHITE LOGO</p>
                    <p className='font-inter text-[16px] leading-[20px] footer-left-para text-[#FFFFFF] mt-[25px] w-[640px]'>DropLeather Inc powers a global network for white-label leather products, connecting brands with our artisans worldwide. Together, we turn ideas into beautifully handcrafted realities, bringing creativity, quality, and customization to life for businesses everywhere.</p>
                    <div className='mt-[25px] flex footer-social items-center gap-[24px]'>
                        <img className="cursor-pointer" src="/assets/instagram.svg" alt="" />
                        <img className="cursor-pointer" src="/assets/facebook.svg" alt="" />
                        <img className="cursor-pointer" src="/assets/youtube.svg" alt="" />
                        <img className="cursor-pointer" src="/assets/x.svg" alt="" />
                        <img className="cursor-pointer" src="/assets/linkedin.svg" alt="" />
                    </div>
                    <div className="flex flex-col footer-content-flex">
                    <div>

                    <p className='font-inter font-[500] text-[16px] leading-[20px] text-[#FFFFFF] mt-[35px]'>Get our apps</p>
                    <div className='flex items-center gap-[10px] mt-[25px]'>
                        <img className="cursor-pointer" src="/assets/apple.svg" alt="" />
                        <img className="cursor-pointer" src="/assets/google.svg" alt="" />
                    </div>
                    </div>
                    <div>

                    <p className='font-bric text-[12px] font-[500] leading-[20px] text-[#FFFFFF] mt-[25px]'>Payment methods we accept:</p>
                    <div className='flex items-center mt-[15px] gap-[10px]'>
                        <img src="/assets/visa.svg" alt="" />
                        <img src="/assets/master.svg" alt="" />
                        <img src="/assets/american.svg" alt="" />
                        <img src="/assets/discover.svg" alt="" />
                        <img src="/assets/club.svg" alt="" />
                        <img src="/assets/paypal.svg" alt="" />
                        <img src="/assets/applepay.svg" alt="" />
                        <img src="/assets/klarna.svg" alt="" />
                    </div>
                    </div>
                    </div>
                </div>
                <div className="right footer-right pt-[20px] flex gap-[50px]">
                <div className="flex gap-[50px] footer-right-1">
                    <div>
                        <h3 className='font-bric footer-line-text-heading mb-[20px] font-[500] text-nowrap text-[16px] leading-[100%] text-[#FFFFFF]'>Create custom products</h3>
                        <div className='flex footer-text-box  flex-col gap-[2px]'>

                        <FooterUnderline text={"White label Products"}/>
                        <FooterUnderline text={"Design your own"}/>
                        <FooterUnderline text={"Shipping and Delivery"}/>
                        <FooterUnderline text={"Returns Policy"}/>
                        <FooterUnderline text={"Quality"}/>
                        <FooterUnderline text={"Design Maker"}/>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bric footer-line-text-heading mb-[20px] font-[500] text-nowrap text-[16px] leading-[100%] text-[#FFFFFF]'>Integrations</h3>
                        <div className='flex footer-text-box flex-col gap-[2px]'>
                        <FooterUnderline text={"Shopify"}/>
                        <FooterUnderline text={"Etsy"}/>
                        <FooterUnderline text={"WooCommerce"}/>
                        <FooterUnderline text={"TikTok Shop"}/>
                        <FooterUnderline text={"BigCommerce"}/>
                        <FooterUnderline text={"Amazon"}/>
                        <FooterUnderline text={"eBay"}/>
                        <FooterUnderline text={"PrestaShop"}/>
                        <FooterUnderline text={"Wix"}/>
                        <FooterUnderline text={"Squarespace"}/>
                        </div>
                    </div>
                    </div>
                    <div className="flex gap-[50px] footer-right-2">
                    <div>
                        <h3 className='font-bric footer-line-text-heading mb-[20px] font-[500] text-nowrap text-[16px] leading-[100%] text-[#FFFFFF]'>Explore</h3>
                        <div className='flex footer-text-box flex-col gap-[2px]'>
                        <FooterUnderline text={"Blog"}/>
                        <FooterUnderline text={"Dropleather Academy"}/>
                        <FooterUnderline text={"Newsroom"}/>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bric footer-line-text-heading mb-[20px] font-[500] text-nowrap text-[16px] leading-[100%] text-[#FFFFFF]'>Our Company</h3>
                        <div className='flex footer-text-box flex-col gap-[2px]'>
                        <FooterUnderline text={"About Us"}/>
                        <FooterUnderline text={"Jobs"}/>
                        <FooterUnderline text={"Become a investor"}/>
                        <FooterUnderline text={"Affiliates Program"}/>
                        <FooterUnderline text={"Blogs"}/>
                        <FooterUnderline text={"Talk to Sales"}/>
                        <FooterUnderline text={"Merchant protection"}/>
                        <FooterUnderline text={"Careers"}/>
                        <FooterUnderline text={"Become an Ambassador"}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className='flex justify-end relative'>
        <div className='h-screen layer hidden w-[100%] glass fixed bottom-[0px] left-[0px] z-[9]'></div>
                <div className='p-[10px] relative country-select z-[10] cursor-pointer bg-[#FFFFFF] rounded-[8.95px] flex inline-flex items-center gap-[10px]'>
                    <img src="/assets/usflag.svg" alt="" />
                    <p className='font-bric font-[500] text-[16px] leading-[20px] #000000'>US English</p>
                    <img src="/assets/languagearrow.svg" alt="" />
                </div>
            </div> */}
            {/* ========== */}
            <div className='bg-[#000000] pt-[60px] footer-button-container min-h-[100px] px-[0px]'>
        {/* Footer content above ... */}

        <div className="flex justify-end relative ">
          {/* Overlay Layer */}
          {isOpen && (
            <div
              className="h-screen w-full glass fixed bottom-0 left-0 z-[9]"
              onClick={() => setIsOpen(false)} // click on overlay closes dropdown
            ></div>
          )}

          {/* Country Dropdown */}
          {isOpen && (
            <div className="absolute bottom-full mb-2 right-0 z-[10] bg-white rounded-[8.95px] shadow-lg overflow-hidden h-[250px] overflow-y-auto w-[200px]">
              {countries.map((country, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(country)}
                  className="p-[10px] cursor-pointer flex items-center gap-[10px] hover:bg-[#f0f0f0]"
                >
                  <img src={country.flag} alt={country.name} className="w-[20px] h-[20px]" />
                  <p className="font-bric font-[500] text-[16px] leading-[20px] text-black">
                    {country.name}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Country Select Button */}
          <div
            className="p-[10px] relative z-[10] cursor-pointer bg-white rounded-[8.95px] flex items-center gap-[10px] shadow-md"
            onClick={() => setIsOpen(!isOpen)} // toggle dropdown
          >
            <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-[20px] h-[20px]" />
            <p className="font-bric font-[500] text-[16px] leading-[20px] text-black">
              {selectedCountry.name}
            </p>
            <img
              src="/assets/languagearrow.svg"
              alt="arrow"
              className={`w-[12px] h-[12px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </div>

        {/* Footer bottom links ... */}
      </div>
            {/* ========== */}
            <div className='flex flex-wrap footer-bottom items-center justify-center gap-[16px] pb-[35px]'>
            <FooterUnderline text={"Contact us"}/>
                {/* <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Contact us</p> */}
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                {/* <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Legal</p> */}
            <FooterUnderline text={"Legal"}/>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                {/* <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Trust</p> */}
            <FooterUnderline text={"Trust"}/>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                <img src="/assets/footertoggle.svg" alt="" />
                {/* <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Privacy policy</p> */}
            <FooterUnderline text={"Privacy policy"}/>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                {/* <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Cookie policy</p> */}
            <FooterUnderline text={"Cookie policy"}/>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                {/* <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Sitemap</p> */}
            <FooterUnderline text={"Sitemap"}/>
            </div>
        </div>
        </>
    );
}

export default Footer;
