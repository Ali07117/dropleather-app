// "use client";
// import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

// function ConnectSection1(props) {
//   const container = useRef(null);

//   useGSAP(() => {
//     const el = container.current;
//     const chars = el.querySelectorAll(".char");

//     // initial hidden state
//     gsap.set(chars, { opacity: 0, y: 50 });

//     // timeline for reveal
//     const showTL = gsap.timeline({ paused: true })
//       .to(chars, {
//         opacity: 1,
//         y: 0,
//         stagger: 0.05,
//         duration: 0.6,
//         ease: "power3.out",
//       });

//     // 1) Play ONLY when scrolling down into view
//     ScrollTrigger.create({
//       trigger: el,
//       start: "top 80%",
//       onEnter: () => showTL.restart(), // play like first time
//       onEnterBack: () => {},           // do NOT play when coming from bottom
//     });

//     // 2) Reset ONLY after it has fully left the top (scrolling up)
//     ScrollTrigger.create({
//       trigger: el,
//       start: "top top",
//       onLeaveBack: () => gsap.set(chars, { opacity: 0, y: 50 }), // hide again
//     });
//   }, { scope: container });

//   return (
//     <div className="mx-[150px] h-[570px] flex rounded-[35px] bg-gradient-to-r from-[#F9F9F9] to-[#EFEFEF]">
//       <div className="w-[50%] h-[100%] flex items-center justify-center">
//         <img src={`/assets/${props.img}.svg`} alt="" />
//       </div>

//       <div className="w-[50%] relative h-[100%] flex items-center justify-center">
//         <div className="w-[621px]">
//           {/* Animated heading */}
//           <p
//             ref={container}
//             className="font-bric font-[500] text-[35px] leading-[52px] text-[#000000] overflow-hidden"
//           >
//             {props.heading.split("").map((c, i) => (
//               <span key={i} className="char inline-block">
//                 {c === " " ? "\u00A0" : c}
//               </span>
//             ))}
//           </p>

//           <p className="font-inter font-[400] text-[18px] leading-[25px] text-[#474747] mt-[8px]">
//             {props.parafirst}{" "}
//             <span className="font-inter underline decoration-1 underline-offset-[2px] decoration-[#474747] font-[600]">
//               {props.shopify}
//             </span>
//             {props.cooma}{" "}
//             <span className="font-inter underline decoration-1 underline-offset-[2px] decoration-[#474747] font-[600]">
//               {props.woocommerce}
//             </span>
//             {props.parasecond}
//           </p>

//           <button className="py-[10px] px-[15px] text-white bg-black border mt-[20px] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px] flex items-center gap-[10px]">
//             <img src={`/assets/${props.buttonimg}.svg`} alt="" /> {props.button}
//           </button>
//         </div>

//         <div className="h-[40px] cursor-pointer px-[10px] absolute bottom-[40px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-white flex items-center justify-center gap-[10px] group">
//           <p className="font-bric text-[16px] font-[500] text-black translate-x-[-100px] transition-all duration-500 group-hover:translate-x-0">
//             Explore
//           </p>
//           <img className="duration-300 group-hover:rotate-[45deg] translate-x-[-35px]" src="/assets/connectarrow.svg" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ConnectSection1;


"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ConnectSection1(props) {
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
    <div
      ref={mainContainerRef}
      className="mx-[150px] h-[570px] flex rounded-[35px] main-container bg-gradient-to-r from-[#F9F9F9] to-[#EFEFEF]"
    >
      <div className="w-[50%] h-[100%] flex items-center justify-center">
        <img src={`/assets/${props.img}.svg`} alt="" />
      </div>

      <div className="w-[50%] relative h-[100%] flex items-center justify-center">
        <div className="w-[621px]">
          {/* ✅ Animated Heading */}
          <p
            ref={headingRef}
            className="font-bric font-[500] text-[35px] leading-[52px] text-[#000000] overflow-hidden"
          >
            {props.heading.split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          {/* Subheading */}
          <p className="font-inter font-[400] text-[18px] leading-[25px] text-[#474747] mt-[8px]">
            {props.parafirst}{" "}
            <span className="font-inter underline decoration-solid decoration-1 underline-offset-[2px] decoration-[#474747] font-[600] text-[18px] leading-[25px]">
              {props.shopify}
            </span>
            {props.cooma}{" "}
            <span className="font-inter underline decoration-solid decoration-1 underline-offset-[2px] decoration-[#474747] font-[600] text-[18px] leading-[25px]">
              {props.woocommerce}
            </span>
            {props.parasecond}
          </p>

          {/* Button */}
          <button className="py-[10px] px-[15px] text-[#FFFFFF] bg-[#000000] border-[1px] mt-[20px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px] flex items-center gap-[10px]">
            <img src={`/assets/${props.buttonimg}.svg`} alt="" /> {props.button}
          </button>
        </div>

        {/* Explore Button with hover */}
        <div className="h-[40px] cursor-pointer px-[10px] absolute bottom-[40px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px] group">
          <p className="font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-[0px]">
            Explore{" "}
          </p>
          <img
            className="group-hover:rotate-[45deg] duration-300 group-hover:translate-x-[-0px] translate-x-[-35px]"
            src="/assets/connectarrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ConnectSection1;



// import React from 'react';

// function ConnectSection1(props) {
//     return (
//         <div className='mx-[150px] h-[570px] flex rounded-[35px] bg-gradient-to-r from-[#F9F9F9] to-[#EFEFEF]'>
//             <div className='w-[50%] h-[100%] flex items-center justify-center bg-[]'>
//                 <img src={`/assets/${props.img}.svg`} alt="" />
//             </div>
//             <div className='w-[50%] relative h-[100%] bg-[] flex items-center justify-center'>
//                 <div className='w-[621px]'>
//                     <p className='font-bric font-[500] text-[35px] leading-[52px] text-[#000000]'>{props.heading}</p>
//                     <p className='font-inter font-[400] text-[18px] leading-[25px] text-[#474747] mt-[8px]'>{props.parafirst} <span className='font-inter underline decoration-solid decoration-1 underline-offset-[2px] decoration-[#474747] font-[600] text-[18px] leading-[25px]'>{props.shopify}</span>{props.cooma} <span className='font-inter underline decoration-solid decoration-1 underline-offset-[2px] decoration-[#474747] font-[600] text-[18px] leading-[25px]'>{props.woocommerce}</span>{props.parasecond}</p>
//                     <button className='py-[10px] px-[15px] text-[#FFFFFF] bg-[#000000] border-[1px] mt-[20px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px] flex items-center gap-[10px]'> <img src={`/assets/${props.buttonimg}.svg`} alt="" /> {props.button}</button>
//                 </div>
//                 {/* <div className='h-[40px] cursor-pointer absolute bottom-[40px] right-[40px] px-[15px] rounded-[50px] bg-[#FFFFFF] flex items-center justify-center gap-[10px]'> <p className='font-bric text-[16px] font-[500] text-[#000000]'>Explore</p> <img src="/assets/connectarrow.svg" alt="" /></div> */}
//                 {/* <div className=' h-[40px] group cursor-pointer transition-transform duration-300 ease-in-out absolute bottom-[40px] right-[40px] px-[15px] rounded-[50px] bg-[#FFFFFF] flex items-center justify-center gap-[10px] group'>
//                     <p className=' font-bric text-[16px] transition-transform duration-300 ease-in-out group-hover:inline-block font-[500] hidden text-[#000000]'>Explore</p>
//                     <img src="/assets/connectarrow.svg" alt=""/>
//                 </div> */}
//                 <div className=' h-[40px] cursor-pointer px-[10px] absolute bottom-[40px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px]  group'>
//                 <p className=' font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px]  transition-all duration-500 ease-in-out  group-hover:opacity-100 group-hover:translate-x-[0px] '>Explore </p>
//                  <img className='group-hover:rotate-[45deg] duration-300 group-hover:translate-x-[-0px] translate-x-[-35px]' src="/assets/connectarrow.svg" alt="" />
//                 </div>
//                 {/* <div className=' h-[40px] cursor-pointer absolute bottom-[40px] right-[40px] duration-300 ease-in-out hover:w-[40px] hover:px-[0px] px-[15px] hover:rounded-[50%] rounded-[50px] bg-[#FFFFFF] flex items-center justify-center gap-[10px] group'>
//                     <p className=' font-bric text-[16px] font-[500] text-[#000000]  transition-transform duration-300 ease-in-out  group-hover:-translate-x-[-100px]'>Explore</p>
//                     <img src="/assets/connectarrow.svg" alt=""/>
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default ConnectSection1;
