"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type"; 

gsap.registerPlugin(useGSAP);

function Hero() {
  const headingRef = useRef(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    // Split text into characters
    const split = new SplitType(headingRef.current, { types: "chars" });
    const chars = split.chars;

    // Animate each character
    gsap.fromTo(
      chars,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <div className='px-[150px]'>
      {/* <h1 className='px-[250px] mt-[55px] font-bric font-[600] text-[82.31px] leading-[75.77px] tracking-[-1px] text-[#000000] text-center'>Dropshipping <span className='font-serif font-[400] text-[82.31px] italic leading-[75.77px]'>redefined</span> like the way you wanted</h1> */}
      <h1
      ref={headingRef}
      className="px-[250px] mt-[55px] font-bric font-[600] text-[82.31px] leading-[75.77px] tracking-[-1px] text-[#000000] text-center"
    >
      Dropshipping{" "}
      <span className="font-serif font-[400] text-[82.31px] italic leading-[75.77px]">
        redefined
      </span>{" "}
      like the way you wanted
    </h1>
      <p className='px-[390px] mt-[35px] text-center font-inter font-[600] text-[26px] leading-[35px] black-90'>Sell high-quality handmade custom leather goods under your own brand with <span className='font-inter font-[600] text-[26px] leading-[35px] hero-span'>zero inventory</span></p>
      <div className='nav-button-container mt-[35px] flex justify-center items-center gap-[10px]'>
        <button className='py-[10px] px-[15px] text-[#FFFFFF] bg-[#000000] border-[1px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px] flex items-center gap-[10px]'>Get Started for free <img src="/assets/hero-arrow.svg" alt="" /></button>
        <button className='py-[10px] text-[#000000] px-[15px] border-[1px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]'>Find Your Plan</button>
      </div>
      <p className='font-bric mt-[25px] text-[500] text-[24px] text-[#000000] leading-[100%] text-center'>Trusted by 200+ sellers around the world</p>
      <div className="rating-box">
        <div className='flex items-center justify-center mt-[25px] gap-[23px]'>
            <p className='text-[67.66px] leading-[100%] font-[400] font-[display]'>4,9</p>
            <div className='flex inline-flex flex-col gap-[3px]'>
                <div className='flex items-center gap-[4px]'>
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                </div>
                <img src="/assets/shopify.svg" alt="" />
                <p className='font-inter font-[500] text-[#737373] text-[10px]'>based on 154 reviews</p>
            </div>
        <div className='flex items-center gap-[15px]'>
            <p className='text-[67.66px] leading-[100%] font-[400] font-[display]'>5,0</p>
            <div className='flex inline-flex flex-col gap-[3px]'>
                <div className='flex items-center gap-[4px]'>
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                <img src="/assets/star.svg" alt="" />
                </div>
                <img src="/assets/trustpilot.svg" alt="" />
                <p className='font-inter font-[500] text-[#737373] text-[10px]'>based on 108 reviews</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
