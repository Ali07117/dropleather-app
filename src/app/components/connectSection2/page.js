'use client'

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ConnectSection2(props) {
    const headingRef = useRef(null);
    const mainContainerRef = useRef(null);

    useGSAP(() => {
        const chars = headingRef.current.querySelectorAll(".char");

        gsap.fromTo(
            chars,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.01,
                duration: 0.6,
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
        <div ref={mainContainerRef} className='mx-[150px] px-[0px] py-[40px] connect-section-1-container connect-section-2-container flex rounded-[35px] main-container bg-gradient-to-r from-[#232522] to-[#232522]'>
            <div className='w-[50%] connect-section-1-right relative min-h-[100%] flex items-center justify-center'>
                <div className='w-[90%]'>
                    {/* <p className='font-bric font-[500] text-[35px] leading-[52px] text-[#FFFFFF]'>Connect Your Store to Dropleather</p> */}
                    {/* ✅ Animated Heading */}
                    <p
                        ref={headingRef}
                        className="font-bric font-[500] connect-section-1-heading text-[35px] leading-[100%] text-[#FFFFFF] overflow-hidden"
                    >
                        {"Connect Your Store to Dropleather".split("").map((char, i) => (
                            <span key={i} className="char inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </p>
                    <p className='font-inter font-[400] connect-section-1-para text-[18px] leading-[25px] text-[#FFFFFF] mt-[12px]'>Selling on <span className='font-inter underline connect-section-1-para decoration-solid decoration-1 underline-offset-[2px] decoration-[#FFFFFF] font-[600] text-[18px] leading-[25px]'>Shopify</span>, <span className='font-inter underline connect-section-1-para decoration-solid decoration-1 underline-offset-[2px] decoration-[#FFFFFF] font-[600] text-[18px] leading-[25px]'>WooCommerce</span>, or another ecommerce platform? Seamlessly connect your store and unlock the world’s first white-label leather dropshipping solution.</p>
                    <div className="connect-section-1-button-box">
                    <button className='py-[10px] px-[15px] connect-section-1-button text-[#000000] bg-[#FFFFFF] border-[1px] mt-[20px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px] flex items-center gap-[10px]'> <img src={`/assets/connecticonblack.svg`} alt="" /> Connect Your Store</button>
                    </div>
                </div>
                <div className=' h-[40px] connect-section-2-arrow cursor-pointer px-[10px] absolute bottom-[0px] left-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px]  group'>
                    <p className=' font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px]  transition-all duration-500 ease-in-out  group-hover:opacity-100 group-hover:translate-x-[0px] '>Explore </p>
                    <img className='group-hover:rotate-[45deg] duration-500 group-hover:translate-x-[-0px] translate-x-[-35px]' src="/assets/connectarrow.svg" alt="" />
                </div>
            </div>
            <div className='w-[50%] h-[100%] connect-section-1-left flex items-center justify-center'>
                <img
                className="connect-section-1-container"
                 src="/assets/section2.svg" alt="" />
            </div>
        </div>
    );
}

export default ConnectSection2;
