import React from 'react';
import FooterUnderline from '../footerunderline/page';

function Footer() {
    return (
        <div className='bg-[#000000] pt-[60px] min-h-[100px] px-[80px]'>
            <div className='flex gap-[40px]'>
                <div className="left">
                    <p className='font-[display] font-[800] text-[37.47px] leading-[56.21px] text-[#FFFFFF]'>WHITE LOGO</p>
                    <p className='font-inter text-[16px] leading-[20px] text-[#FFFFFF] mt-[25px] w-[640px]'>DropLeather Inc powers a global network for white-label leather products, connecting brands with our artisans worldwide. Together, we turn ideas into beautifully handcrafted realities, bringing creativity, quality, and customization to life for businesses everywhere.</p>
                    <div className='mt-[25px] flex items-center gap-[24px]'>
                        <img src="/assets/instagram.svg" alt="" />
                        <img src="/assets/facebook.svg" alt="" />
                        <img src="/assets/youtube.svg" alt="" />
                        <img src="/assets/x.svg" alt="" />
                        <img src="/assets/linkedin.svg" alt="" />
                    </div>
                    <p className='font-inter font-[500] text-[16px] leading-[20px] text-[#FFFFFF] mt-[35px]'>Get our apps</p>
                    <div className='flex items-center gap-[10px] mt-[25px]'>
                        <img src="/assets/apple.svg" alt="" />
                        <img src="/assets/google.svg" alt="" />
                    </div>
                    <p className='font-bric text-[12px] font-[500] leading-[20px] text-[#FFFFFF] mt-[25px]'>Payment methods we accept:</p>
                    <div className='flex items-center mt-[15px] gap-[10px]'>
                        <img src="/assets/visa.svg" alt="" />
                        <img src="/assets/master.svg" alt="" />
                        <img src="/assets/american.svg" alt="" />
                        <img src="/assets/discover.svg" alt="" />
                        <img src="/assets/club.svg" alt="" />
                        <img src="/assets/paypal.svg" alt="" />
                        <img src="/assets/applepay.svg" alt="" />
                        <img src="/assets/klarna.svg" alt="" />
                    </div>
                </div>
                <div className="right pt-[20px] flex gap-[50px]">
                    <div>
                        <h3 className='font-bric mb-[20px] font-[500] text-[16px] leading-[100%] text-[#FFFFFF]'>Create custom products</h3>
                        <div className='flex flex-col gap-[2px]'>

                        <FooterUnderline text={"White label Products"}/>
                        <FooterUnderline text={"Design your own"}/>
                        <FooterUnderline text={"Shipping and Delivery"}/>
                        <FooterUnderline text={"Returns Policy"}/>
                        <FooterUnderline text={"Quality"}/>
                        <FooterUnderline text={"Design Maker"}/>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bric mb-[20px] font-[500] text-[16px] leading-[100%] text-[#FFFFFF]'>Integrations</h3>
                        <div className='flex flex-col gap-[2px]'>
                        <FooterUnderline text={"Shopify"}/>
                        <FooterUnderline text={"Etsy"}/>
                        <FooterUnderline text={"WooCommerce"}/>
                        <FooterUnderline text={"TikTok Shop"}/>
                        <FooterUnderline text={"BigCommerce"}/>
                        <FooterUnderline text={"Amazon"}/>
                        <FooterUnderline text={"eBay"}/>
                        <FooterUnderline text={"PrestaShop"}/>
                        <FooterUnderline text={"Wix"}/>
                        <FooterUnderline text={"Squarespace"}/>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bric mb-[20px] font-[500] text-[16px] leading-[100%] text-[#FFFFFF]'>Explore</h3>
                        <div className='flex flex-col gap-[2px]'>
                        <FooterUnderline text={"Blog"}/>
                        <FooterUnderline text={"Dropleather Academy"}/>
                        <FooterUnderline text={"Newsroom"}/>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bric mb-[20px] font-[500] text-[16px] leading-[100%] text-[#FFFFFF]'>Our Company</h3>
                        <div className='flex flex-col gap-[2px]'>
                        <FooterUnderline text={"About Us"}/>
                        <FooterUnderline text={"Jobs"}/>
                        <FooterUnderline text={"Become a investor"}/>
                        <FooterUnderline text={"Affiliates Program"}/>
                        <FooterUnderline text={"Blogs"}/>
                        <FooterUnderline text={"Talk to Sales"}/>
                        <FooterUnderline text={"Merchant protection"}/>
                        <FooterUnderline text={"Careers"}/>
                        <FooterUnderline text={"Become an Ambassador"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='p-[10px] cursor-pointer bg-[#FFFFFF] rounded-[8.95px] flex inline-flex items-center gap-[10px]'>
                    <img src="/assets/usflag.svg" alt="" />
                    <p className='font-bric font-[500] text-[16px] leading-[20px] #000000'>US English</p>
                    <img src="/assets/languagearrow.svg" alt="" />
                </div>
            </div>
            <div className='flex items-center justify-center gap-[16px] pb-[35px]'>
                <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Contact us</p>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Legal</p>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Trust</p>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                <img src="/assets/footertoggle.svg" alt="" />
                <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Privacy policy</p>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Cookie policy</p>
                <p className='font-inter font-[500] text-[#FFFFFF] text-[16px] leading-[20px]'>|</p>
                <p className='cursor-pointer hover:text-[#FFFFFF] font-bric font-[500] text-[16px] leading-[20px] text-[#B5BDC9]'>Sitemap</p>
            </div>
        </div>
    );
}

export default Footer;
