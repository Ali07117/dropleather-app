'use client'

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function EasyIntegration() {
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
                stagger: 0.01,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    start: "top 70%",  // play animation when main-container hits 60%
                    toggleActions: "play none none reverse",
                    // 👆 when scrolling back, reverse animation (reset to opacity:0, y:50)
                    end: "top 100%",   // reset when main-container hits top 100%
                },
            }
        );
    }, { scope: headingRef });
    return (
        <div ref={mainContainerRef} className='mx-[150px] integration-container border-50 border-y mt-[40px] py-[80px]'>
            <p ref={headingRef} className='text-center integration-heading font-bric font-[600] text-[32px] leading-[100%] text-[#000000]'>
                {"Integration with Shopify WooCommerce Etsy and more".split("").map((char, i) => (
                    <span key={i} className="char inline-block">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </p>
            <p className='text-center font-inter integration-sub-heading font-[400] text-[18px] text-[#000000]'>Easily connect your store to Dropleather for order automation, inventory sync, and worldwide shipping in one place.</p>
            <div className="grid md:grid-cols-4 grid-cols-3 my-[70px] md:grid-rows-3 integration-logo-container w-[70%] m-auto gap-[60px] place-items-center">
                <img src="/assets/bigcommerce.svg" alt="" />
                <img src="/assets/squarespace.svg" alt="" />
                <img src="/assets/wix.svg" alt="" />
                <img src="/assets/etsy.svg" alt="" />
                <img src="/assets/webflow.svg" alt="" />
                <img src="/assets/bigcartel.svg" alt="" />
                <img src="/assets/ecwid.svg" alt="" />
                <img src="/assets/bigcommerce.svg" alt="" />
                <img src="/assets/squarespace.svg" alt="" />
                <img src="/assets/wix.svg" alt="" />
                <img src="/assets/etsy.svg" alt="" />
                <img src="/assets/webflow.svg" alt="" />
            </div>
            <p className='font-inter text-center font-[400] text-[12px] leading-[41px] black-85'>More platforms. More possibilities. Coming soon.</p>
        </div>
    );
}

export default EasyIntegration;
