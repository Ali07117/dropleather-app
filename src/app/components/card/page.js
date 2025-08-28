import React from 'react';

function Card(props) {
  return (
    <div className='pb-[50px]'>
    <div className='relative'>

      <img src={`/assets/${props.img}.svg`} alt="" />
        <div className='absolute bottom-[0px] left-[0px] translate-x-[-50%] translate-y-[50%] h-[128px] w-[96px] flex items-center justify-center bg-[#ECECEC] rounded-[20px]'>
            <img src="/assets/jacket.svg" alt="" />
        </div>
    </div>
      <p className='font-[display] ml-[70px] mt-[10px] font-[600] text-[30px] leading-[100%] tracking-[-0.16px]'>{props.name}</p>
    </div>
  );
}

export default Card;
