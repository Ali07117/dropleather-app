'use client'

import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // null or "products", "howitwork", etc.

  const menuItems = [
    { name: "Products", key: "products" },
    { name: "How it works", key: "howitwork" },
    { name: "Pricing", key: "pricing" },
    { name: "Resources", key: "resources" },
  ];

  // Disable scrolling when any dropdown is active
  useEffect(() => {
    document.body.style.overflow = activeMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeMenu]);

  return (
    <div className="px-[150px] flex items-center justify-between h-[75px] relative border-b-[1px]">
      
      {/* Dynamic Sections */}
      {menuItems.map(item => activeMenu === item.key && (
        <div
          key={item.key}
          className={`h-screen ${item.key}-section glass absolute top-[74px] left-0 w-full z-[9]`}
          onMouseEnter={() => setActiveMenu(item.key)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div
            className={`h-[400px] w-[80%] inner-${item.key}-section bg-red m-auto pt-[10px]`}
            onMouseEnter={() => setActiveMenu(item.key)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="h-[300px] w-[90%] m-auto writing-section bg-white rounded-[25px] mt-[0px]">
              <p className="text-[35px] py-[10px] px-[20px] font-bric font-[600] text-[#000000]">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navbar */}
      <div className="flex items-center gap-[33px] h-[100%]">
        <img src="/assets/weblogo.svg" alt="" />
        <div className="flex items-center h-[100%] gap-[9px]">
          {menuItems.map(item => (
            <div
              key={item.key}
              className="flex items-center h-[100%]"
              onMouseEnter={() => setActiveMenu(item.key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-black items-center">
                {item.name}
                <img
                  src="/assets/navarrow.svg"
                  alt=""
                  className={`transition-transform duration-300 ${activeMenu === item.key ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sign In / Get Started */}
      <div className="nav-button-container flex items-center gap-[10px]">
        <button className="py-[10px] text-black px-[15px] border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
          Sign in
        </button>
        <button className="py-[10px] px-[15px] text-white bg-black border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Navbar;

// import React from 'react';

// function Navbar() {
//   return (
//     <>

    
//     <div className='px-[150px] flex items-center justify-between h-[75px] relative border-50 border-b-[1px]'>
//     <div className='h-screen product-section w-[100%] glass absolute top-[75px] left-[0px] z-[9]'>
//     <div className='h-[400px] w-[80%] inner-product-section bg-[red] m-auto pt-[10px]'>
//       <div className='h-[300px] w-[90%] m-auto bg-[white] rounded-[25px] mt-[0px]'>
//         <p className='text-[35px] py-[10px] px-[20px] font-bric font-[600] text-[#000000]'>Product</p>
//       </div>
//       </div>
//     </div>
//     <div className='flex items-center gap-[33px] h-[100%]'>    
//       <img src="/assets/weblogo.svg" alt="" />
//       <div className='flex items-center h-[100%] gap-[9px]'>
//         <div className='bg-[] product-box flex items-center h-[100%]'>
//             <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>Products <img src="/assets/navarrow.svg" alt="" /></button>
//         </div>
//         <div className='bg-[] flex items-center h-[100%] '>
//             <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] gap-[10px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>How it works <img src="/assets/navarrow.svg" alt="" /></button>
//         </div>
//         <div className='bg-[] flex items-center h-[100%]'>
//             <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] gap-[10px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>Pricing <img src="/assets/navarrow.svg" alt="" /></button>
//         </div>
//         <div className='bg-[] flex items-center h-[100%]'>
//             <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] gap-[10px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>Resources <img src="/assets/navarrow.svg" alt="" /></button>
//         </div>
//       </div>
//       </div>
//       <div className='nav-button-container flex items-center gap-[10px]'>
//         <button className='py-[10px] text-[#000000] px-[15px] border-[1px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]'>Sign in</button>
//         <button className='py-[10px] px-[15px] text-[#FFFFFF] bg-[#000000] border-[1px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]'>Get started</button>
//       </div>
      
//     </div>
//     </>
//   );
// }

// export default Navbar;
