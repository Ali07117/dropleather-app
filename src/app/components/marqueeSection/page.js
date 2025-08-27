'use client'

import React from 'react';
import Marquee from "react-fast-marquee";

function MarqueeSection() {
  return (
    <div className='mx-[150px]'>
      <p className='font-inter mb-[10px] text-[12px] text-center mt-[35px] font-[500] leading-[100%] black-45'>Covered by the world’s leading media</p>
      <Marquee gradient={true} speed={15}>
        <img src="/assets/marque.svg" alt="logo" />
        <img src="/assets/marque.svg" alt="logo" />
        <img src="/assets/marque.svg" alt="logo" />
      </Marquee>
    </div>
  );
}

export default MarqueeSection;
