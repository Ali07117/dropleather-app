'use client'

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
gsap.registerPlugin(ScrollTrigger);


function MarketingTrend() {
  const headingRef = useRef(null);
  const mainContainerRef = useRef(null);

  useGSAP(() => {
    const chars = headingRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top 60%",  // play animation when main-container hits 60%
          toggleActions: "play none none reverse",
          // 👆 when scrolling back, reverse animation (reset to opacity:0, y:50)
          end: "top 100%",   // reset when main-container hits top 100%
        },
      }
    );
  }, { scope: headingRef });
  return (
    <div ref={mainContainerRef} className='mx-[150px] pt-[80px]'>
      <div className='flex justify-between items-center'>
        <div>
          <p ref={headingRef} className='font-bric font-[600] text-[32px] leading-[100%] text-[#000000]'>
            {"Comprehensive resources to build your online business".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <p className='font-inter font-[400] text-[18px] text-[#000000]'>Latest leather marketing trends, sales tips, and ad strategies to grow your brand and boost customer reach.</p>
        </div>
        <div>
          <p className='flex font-inter text-[15px] font-[600] underline gap-[8px]'>Explore Leather Marketing Blogs <img src="/assets/trendarrow.svg" alt="" /></p>
        </div>
      </div>
      <div className="mt-[50px]">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}   // 👈 No gap at all
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div className="h-[524px] card-shadow max rounded-[16.42px] border border-[#E4E5E7] px-[27px] pt-[28px]">
              <p className="font-bric font-[600] text-[27.37px] leading-[30px] tracking-[-0.27px] text-[#222325]">
                How White-Label Leather Dropshipping Works?
              </p>
              <p className="font-inter font-[400] text-[20px] leading-[30px] tracking-[-0.19px] text-[#404145] mt-[24px]">
                Discover how you can sell premium leather goods under your brand without holding any stock.
              </p>
              <img className="mt-[35px]" src="/assets/marketingimage1.svg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[524px] card-shadow rounded-[16.42px] border border-[#E4E5E7] px-[27px] pt-[28px]">
              <p className="font-bric font-[600] text-[27.37px] leading-[30px] tracking-[-0.27px] text-[#222325]">
                Why Leather Is the Next Big Thing in E-commerce ?
              </p>
              <p className="font-inter font-[400] text-[20px] leading-[30px] tracking-[-0.19px] text-[#404145] mt-[24px]">
                Learn why leather goods are a growing market and how your store can stand out.
              </p>
              <img className="mt-[35px]" src="/assets/marketingimage2.svg" alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[524px] card-shadow rounded-[16.42px] border border-[#E4E5E7] px-[27px] pt-[28px]">
              <p className="font-bric font-[600] text-[27.37px] leading-[30px] tracking-[-0.27px] text-[#222325]">
                Printing vs Embroidery: Which is Best for Leather?
              </p>
              <p className="font-inter font-[400] text-[20px] leading-[30px] tracking-[-0.19px] text-[#404145] mt-[24px]">
                Compare UV printing and embroidery to choose the right customization method for your designs.
              </p>
              <img className="mt-[35px]" src="/assets/marketingimage3.svg" alt="" />
            </div>
          </SwiperSlide>

          {/* repeat more SwiperSlide if needed */}
        </Swiper>
      </div>
    </div>
  );
}

export default MarketingTrend;
