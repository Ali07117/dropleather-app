import React from 'react';

function FooterUnderline(props) {
    return (
        <p className="font-inter font-[500] text-[14px] leading-[24px] text-[#B5BDC9] hover:text-[#FFFFFF] relative group cursor-pointer w-fit">
        {props.text}
        <span className="absolute left-0 -bottom-[0px] h-[1px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
      </p>
    );
}

export default FooterUnderline;
