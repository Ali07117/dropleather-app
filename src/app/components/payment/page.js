'use client'
// 'use client'

// import React, { useRef } from "react";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function Payment() {
  const [active, setActive] = useState(1);
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
          start: "top 80%",  // play animation when main-container hits 60%
          toggleActions: "play none none reverse",
          // 👆 when scrolling back, reverse animation (reset to opacity:0, y:50)
          end: "top 100%",   // reset when main-container hits top 100%
        },
      }
    );
  }, { scope: headingRef });

  const steps = [
    {
      id: 1,
      title: "1. Select Pay by Bank",
      description:
        "Customers choose Pay by Bank with Trustly in your checkout.",
      img: "/assets/jacketmodel.svg",
    },
    {
      id: 2,
      title: "2. Pre-populate bank details",
      description:
        "Bank details are pre-filled for customers who’ve saved their details with Trustly before.",
      img: "/assets/bagmodel.svg",
    },
    {
      id: 3,
      title: "3. Bank app or eID consent",
      description:
        "They authenticate in their bank app or eID with a single SCA, reducing fraud without leaving your checkout.",
      img: "/assets/shoesmodel.svg",
    },
    {
      id: 4,
      title: "4. Payment confirmation",
      description:
        "They finish up on your confirmation page—completing their payment 2x faster than usual.",
      img: "/assets/jacket.svg",
    },
  ];

  // Auto loop every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive((prev) => (prev % steps.length) + 1); // loop back to 1
  //   }, 5000); // 5000ms = 5 seconds

  //   return () => clearInterval(interval);
  // }, [steps.length]);

  return (
    <div ref={mainContainerRef} className="px-[150px] mt-[80px]">
      <p ref={headingRef} className="text-[49px] font-bric font-[600] text-[#000000]">
        {"Payments built for speed".split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>

      <div className="flex h-[500px] flex items-center">
        {/* LEFT SIDE */}
        <div className="h-[100%] flex items-center w-[50%] relative">
          {/* Orange Line */}
          <div className="relative h-[70%] w-[2px] bg-[#E0E0E0]">
            <div
              className="w-full h-[25%] bg-[orange] absolute transition-all duration-500"
              style={{ top: `${(active - 1) * 25}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="flex flex-col bg-[] gap-[30px] ml-[40px]">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActive(step.id)}
                className="cursor-pointer"
              >
                <p
                  className={`text-[28px] font-[600] ${active === step.id ? "text-[#000000]" : "text-[#748074]"
                    }`}
                >
                  {step.title}
                </p>
                <p
                  className={`text-[16px] font-[500] transition-all duration-500 ${active === step.id ? "text-[#474747] block" : "hidden"
                    }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="h-[100%] w-[50%] flex items-center justify-center">
          <img
            src={steps.find((s) => s.id === active)?.img}
            alt=""
            className="transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;



// import React from 'react';

// function Payment() {
//   return (
//     <>
//     <div className='px-[150px] mt-[80px]'>
//         <p className='text-[49px] font-bric font-[600] text-[#000000]'>Payments built for speed</p>
//     <div className=' flex h-[400px]'>
//       <div className='h-[100%] flex items-center w-[50%] bg-[]'>
//         <div className='flex gap-[40px] min-h-[100px] bg-[]'>
//         <div className='min-h-[100%] w-[2px] payment-line'>
//             <div className='w-[100%] h-[25%] bg-[orange]'></div>
//         </div>
//         <div className='flex flex-col gap-[40px]'>
//             <div className='cursor-pointer text-1'>
//                 <p className='text-[28px] font-[600] text-[#000000]'>1. Select Pay by Bank</p>
//                 <p className='text-[#474747] text-[16px] font-[500]'>Customers choose Pay by Bank with Trustly in your checkout.</p>
//             </div>
//             <div className='cursor-pointer text-2'>
//                 <p className='text-[28px] font-[600] text-[#748074]'>2. Pre-populate bank details</p>
//                 <p className='text-[#474747] hidden text-[16px] font-[500]'>Bank details are pre-filled for customers who’ve saved their details with Trustly before.</p>
//             </div>
//             <div className='cursor-pointer text-3'>
//                 <p className='text-[28px] font-[600] text-[#748074]'>3. Bank app or eID consent</p>
//                 <p className='text-[#474747] hidden text-[16px] font-[500]'>They authenticate in their bank app or eID with a single SCA, reducing fraud without leaving your checkout.</p>
//             </div>
//             <div className='cursor-pointer text-4'>
//                 <p className='text-[28px] font-[600] text-[#748074]'>4. Payment confirmation</p>
//                 <p className='text-[#474747] hidden text-[16px] font-[500]'>They finish up on your confirmation page—completing their payment 2x faster than usual.</p>
//             </div>
//         </div>
//         </div>
//       </div>
//       <div className='h-[100%] w-[50%] bg-[green] flex items-center justify-center'><img src="/assets/jacketmodel.svg" alt="" /></div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default Payment;
