import React from 'react';

function Navbar() {
  return (
    <>

    
    <div className='px-[150px] flex items-center justify-between h-[75px] relative border-50 border-b-[1px]'>
    {/* <div className='h-screen w-[100%] glass absolute top-[75px] left-[0px] z-[9]'>
      <div className='h-[300px] w-[70%] m-auto bg-[white] rounded-[25px] mt-[10px]'>
        <p className='text-[35px] py-[10px] px-[20px] font-bric font-[600] text-[#000000]'>Product</p>
      </div>
    </div> */}
    <div className='flex items-center gap-[33px] h-[100%]'>    
      <img src="/assets/weblogo.svg" alt="" />
      <div className='flex items-center h-[100%] gap-[9px]'>
        <div className='bg-[] flex items-center h-[100%]'>
            <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>Products <img src="/assets/navarrow.svg" alt="" /></button>
        </div>
        <div className='bg-[] flex items-center h-[100%] '>
            <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] gap-[10px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>How it works <img src="/assets/navarrow.svg" alt="" /></button>
        </div>
        <div className='bg-[] flex items-center h-[100%]'>
            <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] gap-[10px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>Pricing <img src="/assets/navarrow.svg" alt="" /></button>
        </div>
        <div className='bg-[] flex items-center h-[100%]'>
            <button className='flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] gap-[10px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-[black]'>Resources <img src="/assets/navarrow.svg" alt="" /></button>
        </div>
      </div>
      </div>
      <div className='nav-button-container flex items-center gap-[10px]'>
        <button className='py-[10px] text-[#000000] px-[15px] border-[1px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]'>Sign in</button>
        <button className='py-[10px] px-[15px] text-[#FFFFFF] bg-[#000000] border-[1px] border-[black] rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]'>Get started</button>
      </div>
      
    </div>
    </>
  );
}

export default Navbar;
