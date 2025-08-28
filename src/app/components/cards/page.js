'use client'

import React from 'react';
import Card from '../card/page';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Cards() {
  return (
    <div className='mx-[150px] cards-container mt-[75px] pb-[75px] border-50 border-b-[1px]'>
    <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}   // 👈 No gap at all
          slidesPerView={3}
          // pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
        <SwiperSlide className="place-items-center">
      <Card name={"Leather Bags"} img={"bagmodel"}/>
      </SwiperSlide>
      <SwiperSlide className="place-items-center">
      <Card name={"Leather Shoes"} img={"shoesmodel"}/>
      </SwiperSlide>
      <SwiperSlide className="place-items-center">
      <Card name={"Leather Jackets"} img={"jacketmodel"}/>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Cards;
