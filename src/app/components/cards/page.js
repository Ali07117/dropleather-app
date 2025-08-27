import React from 'react';
import Card from '../card/page';

function Cards() {
  return (
    <div className='mx-[150px] mt-[75px] pb-[75px] flex items-center justify-around border-50 border-b-[1px]'>
      <Card name={"Leather Bags"} img={"bagmodel"}/>
      <Card name={"Leather Shoes"} img={"shoesmodel"}/>
      <Card name={"Leather Jackets"} img={"jacketmodel"}/>
    </div>
  );
}

export default Cards;
