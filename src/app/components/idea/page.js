'use client'

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Idea() {
  const headingRef = useRef(null);
  const ideaRef = useRef(null);
  const mainContainerRef = useRef(null);
  const secondMainRef = useRef(null);

  useGSAP(() => {
    // First heading animation
    const chars1 = headingRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars1,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
          end: "top 100%",
        },
      }
    );

    // Second heading animation
    const chars2 = ideaRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars2,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: secondMainRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
          end: "top 100%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={mainContainerRef}
      className="mx-[150px] idea-container pb-[90px] pt-[50px] mt-[35px] border-50 border-b-[1px] border-t border-t-[1px]"
    >
      {/* First heading */}
      <p
        ref={headingRef}
        className="font-bric font-[600] idea-heading text-[32px] leading-[100%] text-[#000000]"
      >
        {"What’s New in Leather Marketing & Sales".split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

      <p className="font-inter font-[400] idea-sub-heading text-[18px] text-[#000000]">
        Latest leather marketing trends, sales tips, and ad strategies to grow
        your brand and boost customer reach.
      </p>

      {/* Second Section */}
      <div ref={secondMainRef} className="flex idea-inner-container gap-[40px] mt-[35px] second-main">
        <div className="h-[100%] w-[65%] idea-inner-container-left">
        {/* replave image with video */}
          {/* <img className="w-[100%]" src="/assets/ideabg.svg" alt="" /> */}
          {/* <video loop src="/assets/video.mp4"></video> */}
          <video controls playsInline src="/assets/video.mp4" className="w-full rounded-[20px] h-auto" ></video>
        {/* replave image with video  */}
          <div className="flex items-center cursor-pointer gap-[5px] justify-center mt-[10px]">
            <img src="/assets/videoicon.svg" alt="" />
            <p className="font-bric font-[500] text-[16px] leading-[37.12px] underline text-[#000000]">
              Watch video on youtube
            </p>
          </div>
        </div>

        <div className="hmin--[100%] w-[35%] bg-[] flex items-center justify-center idea-inner-container-right">
          <div>
            {/* Second heading */}
            <p
              ref={ideaRef}
              className="font-bric font-[600] text-[32px] idea-2nd-heading your-idea leading-[37.12px] text-[#000000]"
            >
              {"Your idea, your brand, our".split("").map((char, i) => (
                <span key={i} className="char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>

            <p className="font-inter font-[400] text-[16px] idea-para-1 leading-[20px] text-[#000000] mt-[30px]">
              Print-on-demand is a business model that allows individuals and
              businesses to create custom products, from apparel to home goods,
            </p>
            <p className="font-inter font-[400] text-[16px] idea-para-2 leading-[20px] text-[#000000]">
              using their own designs. In this model, each product is made after
              it’s bought, so there are no order minimums.
            </p>
            <p className="font-inter font-[400] text-[16px] idea-para-3 leading-[20px] text-[#000000] mt-[15px]">
              It’s a low-risk, low-cost way to run ecommerce businesses.
              Entrepreneurs, creators, artists, and anyone else can customize
              white-label products and sell without inventory. Once a customer
              orders, we print, package, and ship the product directly to them.
              No logistics. No inventory. No hassle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Idea;



// 'use client'

// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// function Idea() {
//   const headingRef = useRef(null);
//     const mainContainerRef = useRef(null);

//     useGSAP(() => {
//       const chars = headingRef.current.querySelectorAll(".char");

//       gsap.fromTo(
//           chars,
//           { y: 20, opacity: 0 },
//           {
//               y: 0,
//               opacity: 1,
//               stagger: 0.02,
//               duration: 0.4,
//               ease: "power3.out",
//               scrollTrigger: {
//                   trigger: mainContainerRef.current,
//                   start: "top 80%",  // play animation when main-container hits 60%
//                   toggleActions: "play none none reverse",
//                   // 👆 when scrolling back, reverse animation (reset to opacity:0, y:50)
//                   end: "top 100%",   // reset when main-container hits top 100%
//               },
//           }
//       );
//   }, { scope: headingRef });
//   return (
//     <div ref={mainContainerRef}  className='mx-[150px] pb-[90px] pt-[50px] mt-[35px] border-50 border-b-[1px] border-t border-t-[1px]'>
//       <p ref={headingRef} className='font-bric font-[600] text-[32px] leading-[100%] text-[#000000]'>
//       {"What’s New in Leather Marketing & Sales".split("").map((char, i) => (
//                             <span key={i} className="char inline-block">
//                                 {char === " " ? "\u00A0" : char}
//                             </span>
//                         ))}</p>
//       <p className='font-inter font-[400] text-[18px] text-[#000000]'>Latest leather marketing trends, sales tips, and ad strategies to grow your brand and boost customer reach.</p>
//       <div className='flex mt-[35px] second-main'>
//         <div className='h-[100%] w-[65%] bg-[]'>
//             <img src="/assets/ideabg.svg" alt="" />
//             <div className='flex items-center gap-[5px] justify-center mt-[10px]'>
//                 <img src="/assets/videoicon.svg" alt="" />
//                 <p className='font-bric font-[500] text-[16px] leading-[37.12px] underline text-[#000000]'>Watch video on youtube</p>
//             </div>
//         </div>
//         <div className='h-[100%] w-[35%] bg-[] flex items-center justify-center'>
//         <div>
//             <p className='font-bric font-[600] text-[32px] your-idea leading-[37.12px] text-[#000000]'>Your idea, your brand, our</p>
//             <p className='font-inter font-[400] text-[16px] leading-[20px] text-[#000000] mt-[30px]'>Print-on-demand is a business model that allows individuals and businesses to create custom products, from apparel to home goods, </p>
//             <p className='font-inter font-[400] text-[16px] leading-[20px] text-[#000000]'>using their own designs. In this model, each product is made after it’s bought, so there are no order minimums.</p>
//             <p className='font-inter font-[400] text-[16px] leading-[20px] text-[#000000] mt-[15px]'>It’s a low-risk, low-cost way to run ecommerce businesses. Entrepreneurs, creators, artists, and anyone else can customize white-label products and sell without inventory. Once a customer orders, we print, package, and ship the product directly to them. No logistics. No inventory. No hassle.</p>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Idea;
