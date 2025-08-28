"use client";

import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // null or "products", "howitwork", "pricing", "resources"
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [dropdownOpen2, setDropdownOpen2] = useState(null);
  const [dropdownOpen3, setDropdownOpen3] = useState(null);
  const [dropdownOpen4, setDropdownOpen4] = useState(null);


  // Disable scrolling when any dropdown is active
  useEffect(() => {
    document.body.style.overflow = activeMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeMenu]);

  return (
    <div className="px-[150px] padding-x flex items-center justify-between nav-bar-container h-[75px] relative border-b-[1px]">
    <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[15] overflow-scroll transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <p
          className="text-[28px] font-[600] absolute right-[15px] top-[20px] font-bric cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          X
        </p>
        <div className="nav-button-container justify-center pt-[80px] flex items-center gap-[10px]">
        <button className="py-[10px] text-black px-[15px] border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
          Sign in
        </button>
        <button className="py-[10px] px-[15px] text-white bg-black border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
          Get started
        </button>
      </div>

        {/* Products Item */}
        <div className="px-[15px] pt-[40px] pb-[15px] border-b border-gray-300 font-bric text-[16px] font-[500] text-black">
          <div
            className="flex px-[10px] pt-[15px] justify-between items-center cursor-pointer"
            onClick={() =>
              setDropdownOpen(dropdownOpen === "products" ? null : "products")
            }
          >
            <span>Products</span>
            <img
              src="/assets/navarrow.svg"
              alt=""
              className={`transition-transform duration-300 ${
                dropdownOpen === "products" ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Products Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              dropdownOpen === "products"
                ? "max-h-[1500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-[10px] py-[10px]">
              <p className="text-[32px] font-bric font-[600] text-[#000000]">
                Products
              </p>
              <p className="text-[18px] w-[250px] mt-[5px] font-[500] black-85">
                A trusted suite of Pay by Bank products with global reach.
              </p>
            </div>

            {/* Example Items */}
            <div className="px-[10px]">
              <div className="mt-[18px]">
                <p className="text-[18px] font-[500]">Payment</p>
                <p className="text-[16px] font-[500] black-45">
                  Direct bank payments
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Payout</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank-powered withdrawals
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Deposit</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank transfer
                </p>
              </div>
            </div>

            <div className="px-[20px] flex flex-col">
              <div className="relative">
                <img
                  className="h-[220px] mt-[20px] rounded-[15px] w-[330px]"
                  src="/assets/menuimg.webp"
                  alt=""
                />
                <div className=' h-[40px] connect-section-2-arrow cursor-pointer px-[10px] absolute bottom-[0px] translate-y-[-15px]  left-[20px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px]  group'>
                    <p className=' font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px]  transition-all duration-500 ease-in-out  group-hover:opacity-100 group-hover:translate-x-[0px] '>Explore </p>
                    <img className='group-hover:rotate-[45deg] duration-500 group-hover:translate-x-[-0px] translate-x-[-35px]' src="/assets/connectarrow.svg" alt="" />
                </div>
              </div>
              <p className="text-[18px] font-[500] mt-[10px]">
                Pay by Bank payments: why they’re key to your business growth in
                2025
              </p>
            </div>
          </div>
        </div>
        <div className="px-[15px] pt-[0px] pb-[15px] border-b border-gray-300 font-bric text-[16px] font-[500] text-black">
          <div
            className="flex px-[10px] pt-[15px] justify-between items-center cursor-pointer"
            onClick={() =>
              setDropdownOpen2(dropdownOpen2 === "How it work" ? null : "How it work")
            }
          >
            <span>How it work</span>
            <img
              src="/assets/navarrow.svg"
              alt=""
              className={`transition-transform duration-300 ${
                dropdownOpen2 === "How it work" ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Products Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              dropdownOpen2 === "How it work"
                ? "max-h-[1500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-[10px] py-[10px]">
              <p className="text-[32px] font-bric font-[600] text-[#000000]">
              How it work
              </p>
              <p className="text-[18px] w-[250px] mt-[5px] font-[500] black-85">
                A trusted suite of Pay by Bank products with global reach.
              </p>
            </div>

            {/* Example Items */}
            <div className="px-[10px]">
              <div className="mt-[18px]">
                <p className="text-[18px] font-[500]">Payment</p>
                <p className="text-[16px] font-[500] black-45">
                  Direct bank payments
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Payout</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank-powered withdrawals
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Deposit</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank transfer
                </p>
              </div>
            </div>

            <div className="px-[20px] flex flex-col">
              <div className="relative">
                <img
                  className="h-[220px] mt-[20px] rounded-[15px] w-[330px]"
                  src="/assets/menu2.webp"
                  alt=""
                />
                <div className=' h-[40px] connect-section-2-arrow cursor-pointer px-[10px] absolute bottom-[0px] translate-y-[-15px]  left-[20px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px]  group'>
                    <p className=' font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px]  transition-all duration-500 ease-in-out  group-hover:opacity-100 group-hover:translate-x-[0px] '>Explore </p>
                    <img className='group-hover:rotate-[45deg] duration-500 group-hover:translate-x-[-0px] translate-x-[-35px]' src="/assets/connectarrow.svg" alt="" />
                </div>
              </div>
              <p className="text-[18px] font-[500] mt-[10px]">
                Pay by Bank payments: why they’re key to your business growth in
                2026
              </p>
            </div>
          </div>
        </div>
        <div className="px-[15px] pt-[0px] pb-[15px] border-b border-gray-300 font-bric text-[16px] font-[500] text-black">
          <div
            className="flex px-[10px] pt-[15px] justify-between items-center cursor-pointer"
            onClick={() =>
              setDropdownOpen2(dropdownOpen2 === "Pricing" ? null : "Pricing")
            }
          >
            <span>Pricing</span>
            <img
              src="/assets/navarrow.svg"
              alt=""
              className={`transition-transform duration-300 ${
                dropdownOpen2 === "Pricing" ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Products Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              dropdownOpen2 === "Pricing"
                ? "max-h-[1500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-[10px] py-[10px]">
              <p className="text-[32px] font-bric font-[600] text-[#000000]">
              Pricing
              </p>
              <p className="text-[18px] w-[250px] mt-[5px] font-[500] black-85">
                A trusted suite of Pay by Bank products with global reach.
              </p>
            </div>

            {/* Example Items */}
            <div className="px-[10px]">
              <div className="mt-[18px]">
                <p className="text-[18px] font-[500]">Payment</p>
                <p className="text-[16px] font-[500] black-45">
                  Direct bank payments
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Payout</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank-powered withdrawals
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Deposit</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank transfer
                </p>
              </div>
            </div>

            <div className="px-[10px] flex flex-col">
              <div className="relative">
                <img
                  className="h-[220px] mt-[20px] rounded-[15px] w-[330px]"
                  src="/assets/menu3.webp"
                  alt=""
                />
                <div className=' h-[40px] connect-section-2-arrow cursor-pointer px-[10px] absolute bottom-[0px] translate-y-[-15px]  left-[20px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px]  group'>
                    <p className=' font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px]  transition-all duration-500 ease-in-out  group-hover:opacity-100 group-hover:translate-x-[0px] '>Explore </p>
                    <img className='group-hover:rotate-[45deg] duration-500 group-hover:translate-x-[-0px] translate-x-[-35px]' src="/assets/connectarrow.svg" alt="" />
                </div>
              </div>
              <p className="text-[18px] font-[500] mt-[10px]">
                Pay by Bank payments: why they’re key to your business growth in
                2026
              </p>
            </div>
          </div>
        </div>
        <div className="px-[15px] pt-[0px] pb-[15px] border-b border-gray-300 font-bric text-[16px] font-[500] text-black">
          <div
            className="flex px-[10px] pt-[15px] justify-between items-center cursor-pointer"
            onClick={() =>
              setDropdownOpen2(dropdownOpen2 === "Resources" ? null : "Resources")
            }
          >
            <span>Resources</span>
            <img
              src="/assets/navarrow.svg"
              alt=""
              className={`transition-transform duration-300 ${
                dropdownOpen2 === "Resources" ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Products Dropdown */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              dropdownOpen2 === "Resources"
                ? "max-h-[1500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-[10px] py-[10px]">
              <p className="text-[32px] font-bric font-[600] text-[#000000]">
              Resources
              </p>
              <p className="text-[18px] w-[250px] mt-[5px] font-[500] black-85">
                A trusted suite of Pay by Bank products with global reach.
              </p>
            </div>

            {/* Example Items */}
            <div className="px-[10px]">
              <div className="mt-[18px]">
                <p className="text-[18px] font-[500]">Payment</p>
                <p className="text-[16px] font-[500] black-45">
                  Direct bank payments
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Payout</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank-powered withdrawals
                </p>
              </div>
              <div className="mt-[10px]">
                <p className="text-[18px] font-[500]">Deposit</p>
                <p className="text-[16px] font-[500] black-45">
                  Instant bank transfer
                </p>
              </div>
            </div>

            <div className="px-[10px] flex flex-col">
              <div className="relative">
                <img
                  className="h-[220px] mt-[20px] rounded-[15px] w-[330px]"
                  src="/assets/menuimg.webp"
                  alt=""
                />
                <div className=' h-[40px] connect-section-2-arrow cursor-pointer px-[10px] absolute bottom-[0px] translate-y-[-15px]  left-[20px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px]  group'>
                    <p className=' font-bric text-[16px] font-[500] text-[#000000] opacity-1 group-hover:inline-block translate-x-[-100px]  transition-all duration-500 ease-in-out  group-hover:opacity-100 group-hover:translate-x-[0px] '>Explore </p>
                    <img className='group-hover:rotate-[45deg] duration-500 group-hover:translate-x-[-0px] translate-x-[-35px]' src="/assets/connectarrow.svg" alt="" />
                </div>
              </div>
              <p className="text-[18px] font-[500] mt-[10px]">
                Pay by Bank payments: why they’re key to your business growth in
                2026
              </p>
            </div>
          </div>
        </div>

        {/* Add more nav items (How it works, Pricing, etc.) here */}
      </div>
      {/* PRODUCTS */}
      {activeMenu === "products" && (
        <div
          className="h-screen products-section glass absolute top-[74px] left-0 w-full z-[9]"
          onMouseEnter={() => setActiveMenu("products")}
        >
          <div
            className="h-[400px] w-[80%] inner-products-section bg-red m-auto pt-[10px]"
            onMouseEnter={() => setActiveMenu("products")}
            onMouseLeave={() => setActiveMenu(null)}  // hide when leaving inner
          >
            <div className="min-h-[100px] flex gap-[40px] py-[10px] px-[20px] w-[90%] m-auto writing-section bg-white rounded-[25px] mt-[0px]">
            <div>
              <p className="text-[35px] font-bric font-[600] text-[#000000]"> Products</p>
              <p className="text-[20px] w-[250px] mt-[10px] font-[500] black-85">A trusted suite of Pay by Bank products with global reach.</p>
            </div>
            <div>
            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Payment</p>
              <p className="text-[16px] font-[500] black-45">Direct bank payments</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Payout</p>
              <p className="text-[16px] font-[500] black-45">Instant bank-powered withdrawals</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Deposit</p>
              <p className="text-[16px] font-[500] black-45">Instant bank transfer</p>
            </div>

            </div>
            <div>

            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Data Services</p>
              <p className="text-[16px] font-[500] black-45">Verify, assess and create accounts</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Recurring Payments</p>
              <p className="text-[16px] font-[500] black-45">Automate setup and billing</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Trustly Azura</p>
              <p className="text-[16px] font-[500] black-45">The power behind every product</p>
            </div>
            </div>
            <div className="flex flex-col items-end w-[330px] ">
            <div className="relative">
              <img className="h-[220px] rounded-[15px] w-[330px]" src="/assets/menuimg.webp" alt="" />
              <div className="h-[40px] absolute bottom-[20px] right-[10px] connect-section-1-arrow cursor-pointer px-[10px] absolute bottom-[0px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px] group">
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
              <p className="text-[18px] font-[500] mt-[10px]">Pay by Bank payments: why they’re key to your business growth in 2025</p>  
            </div>
            </div>
          </div>
        </div>
      )}

      {/* HOW IT WORKS */}
      {activeMenu === "howitwork" && (
        <div
          className="h-screen howitwork-section glass absolute top-[74px] left-0 w-full z-[9]"
          onMouseEnter={() => setActiveMenu("howitwork")}
        >
          <div
            className="h-[400px] w-[80%] inner-howitwork-section bg-red m-auto pt-[10px]"
            onMouseEnter={() => setActiveMenu("howitwork")}
            onMouseLeave={() => setActiveMenu(null)}  // hide when leaving inner
          >
            <div className="min-h-[100px] flex gap-[40px] py-[10px] px-[20px] w-[90%] m-auto writing-section bg-white rounded-[25px] mt-[0px]">
            <div>
              <p className="text-[35px] font-bric font-[600] text-[#000000]"> How it works</p>
              <p className="text-[20px] w-[250px] mt-[10px] font-[500] black-85">A trusted suite of Pay by Bank products with global reach.</p>
            </div>
            <div>
            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Payment</p>
              <p className="text-[16px] font-[500] black-45">Direct bank payments</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Payout</p>
              <p className="text-[16px] font-[500] black-45">Instant bank-powered withdrawals</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Deposit</p>
              <p className="text-[16px] font-[500] black-45">Instant bank transfer</p>
            </div>

            </div>
            <div>

            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Data Services</p>
              <p className="text-[16px] font-[500] black-45">Verify, assess and create accounts</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Recurring Payments</p>
              <p className="text-[16px] font-[500] black-45">Automate setup and billing</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Trustly Azura</p>
              <p className="text-[16px] font-[500] black-45">The power behind every product</p>
            </div>
            </div>
            <div className="flex flex-col items-end w-[330px] ">
            <div className="relative">
              <img className="h-[220px] rounded-[15px] w-[330px]" src="/assets/menu2.webp" alt="" />
              <div className="h-[40px] absolute bottom-[20px] right-[10px] connect-section-1-arrow cursor-pointer px-[10px] absolute bottom-[0px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px] group">
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
              <p className="text-[18px] font-[500] mt-[10px]">Pay by Bank payments: why they’re key to your business growth in 2025</p>  
            </div>
            </div>
          </div>
        </div>
      )}

      {/* PRICING */}
      {activeMenu === "pricing" && (
        <div
          className="h-screen pricing-section glass absolute top-[74px] left-0 w-full z-[9]"
          onMouseEnter={() => setActiveMenu("pricing")}
        >
          <div
            className="h-[400px] w-[80%] inner-pricing-section bg-red m-auto pt-[10px]"
            onMouseEnter={() => setActiveMenu("pricing")}
            onMouseLeave={() => setActiveMenu(null)}  // hide when leaving inner
          >
            <div className="min-h-[100px] flex gap-[40px] py-[10px] px-[20px] w-[90%] m-auto writing-section bg-white rounded-[25px] mt-[0px]">
            <div>
              <p className="text-[35px] font-bric font-[600] text-[#000000]"> pricing</p>
              <p className="text-[20px] w-[250px] mt-[10px] font-[500] black-85">A trusted suite of Pay by Bank products with global reach.</p>
            </div>
            <div>
            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Payment</p>
              <p className="text-[16px] font-[500] black-45">Direct bank payments</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Payout</p>
              <p className="text-[16px] font-[500] black-45">Instant bank-powered withdrawals</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Deposit</p>
              <p className="text-[16px] font-[500] black-45">Instant bank transfer</p>
            </div>

            </div>
            <div>

            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Data Services</p>
              <p className="text-[16px] font-[500] black-45">Verify, assess and create accounts</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Recurring Payments</p>
              <p className="text-[16px] font-[500] black-45">Automate setup and billing</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Trustly Azura</p>
              <p className="text-[16px] font-[500] black-45">The power behind every product</p>
            </div>
            </div>
            <div className="flex flex-col items-end w-[330px] ">
            <div className="relative">
              <img className="h-[220px] rounded-[15px] w-[330px]" src="/assets/menu3.webp" alt="" />
              <div className="h-[40px] absolute bottom-[20px] right-[10px] connect-section-1-arrow cursor-pointer px-[10px] absolute bottom-[0px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px] group">
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
              <p className="text-[18px] font-[500] mt-[10px]">Pay by Bank payments: why they’re key to your business growth in 2025</p>  
            </div>
            </div>
          </div>
        </div>
      )}

      {/* RESOURCES */}
      {activeMenu === "resources" && (
        <div
          className="h-screen resources-section glass absolute top-[74px] left-0 w-full z-[9]"
          onMouseEnter={() => setActiveMenu("resources")}
        >
          <div
            className="h-[400px] w-[80%] inner-resources-section bg-red m-auto pt-[10px]"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}  // hide when leaving inner
          >
            <div className="min-h-[100px] flex gap-[40px] py-[10px] px-[20px] w-[90%] m-auto writing-section bg-white rounded-[25px] mt-[0px]">
            <div>
              <p className="text-[35px] font-bric font-[600] text-[#000000]"> Resources</p>
              <p className="text-[20px] w-[250px] mt-[10px] font-[500] black-85">A trusted suite of Pay by Bank products with global reach.</p>
            </div>
            <div>
            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Payment</p>
              <p className="text-[16px] font-[500] black-45">Direct bank payments</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Payout</p>
              <p className="text-[16px] font-[500] black-45">Instant bank-powered withdrawals</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Deposit</p>
              <p className="text-[16px] font-[500] black-45">Instant bank transfer</p>
            </div>

            </div>
            <div>

            <div className="mt-[18px]">
              <p className="text-[18px] font-[500]">Data Services</p>
              <p className="text-[16px] font-[500] black-45">Verify, assess and create accounts</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Recurring Payments</p>
              <p className="text-[16px] font-[500] black-45">Automate setup and billing</p>
            </div>
            <div className="mt-[30px]">
              <p className="text-[18px] font-[500]">Trustly Azura</p>
              <p className="text-[16px] font-[500] black-45">The power behind every product</p>
            </div>
            </div>
            <div className="flex flex-col items-end w-[330px] ">
            <div className="relative">
              <img className="h-[220px] rounded-[15px] w-[330px]" src="/assets/menuimg.webp" alt="" />
              <div className="h-[40px] absolute bottom-[20px] right-[10px] connect-section-1-arrow cursor-pointer px-[10px] absolute bottom-[0px] right-[40px] w-[40px] hover:w-[125px] duration-300 transition-all ease-in-out rounded-[50px] overflow-hidden bg-[#FFFFFF] flex items-center justify-center gap-[10px] group">
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
              <p className="text-[18px] font-[500] mt-[10px]">Pay by Bank payments: why they’re key to your business growth in 2025</p>  
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <div className="flex items-center gap-[33px] h-[100%]">
      
        <img src="/assets/weblogo.svg" alt="" />
        <div className="flex mobile-nav-hidden items-center h-[100%] gap-[9px]">
          <div
            className="flex items-center h-[100%]"
            onMouseEnter={() => setActiveMenu("products")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-black items-center">
              Products
              <img
                src="/assets/navarrow.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  activeMenu === "products" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div
            className="flex items-center h-[100%]"
            onMouseEnter={() => setActiveMenu("howitwork")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-black items-center">
              How it works
              <img
                src="/assets/navarrow.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  activeMenu === "howitwork" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div
            className="flex items-center h-[100%]"
            onMouseEnter={() => setActiveMenu("pricing")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-black items-center">
              Pricing
              <img
                src="/assets/navarrow.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  activeMenu === "pricing" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div
            className="flex items-center h-[100%]"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-black items-center">
              Resources
              <img
                src="/assets/navarrow.svg"
                alt=""
                className={`transition-transform duration-300 ${
                  activeMenu === "resources" ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Sign In / Get Started */}
      <div className="nav-button-container mobile-nav-hidden flex items-center gap-[10px]">
        <button className="py-[10px] text-black px-[15px] border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
          Sign in
        </button>
        <button className="py-[10px] px-[15px] text-white bg-black border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
          Get started
        </button>
      </div>

      {/* Hamburger */}
      {/* <div className="flex flex-col hamburger hidden flex flex-col gap-[8px]">
        <div className="h-[3px] w-[25px] bg-[black]"></div>
        <div className="h-[3px] w-[25px] bg-[black]"></div>
      </div> */}
      <div
        className="flex flex-col gap-[8px] hamburger cursor-pointer hidden"
        onClick={() => setMenuOpen(true)}
      >
        <div
          className={`h-[3px] w-[25px] bg-black transition-all duration-300 `}
        ></div>
        <div
          className={`h-[3px] w-[25px] bg-black transition-all duration-300`}
        ></div>
      </div>
    </div>
  );
}

export default Navbar;


// 'use client'

// import React, { useState, useEffect } from "react";

// function Navbar() {
//   const [activeMenu, setActiveMenu] = useState(null); // null or "products", "howitwork", etc.

//   const menuItems = [
//     { name: "Products", key: "products" },
//     { name: "How it works", key: "howitwork" },
//     { name: "Pricing", key: "pricing" },
//     { name: "Resources", key: "resources" },
//   ];

//   // Disable scrolling when any dropdown is active
//   useEffect(() => {
//     document.body.style.overflow = activeMenu ? 'hidden' : 'auto';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [activeMenu]);

//   return (
//     <div className="px-[150px] padding-x flex items-center justify-between nav-bar-container h-[75px] relative border-b-[1px]">
      
//       {/* Dynamic Sections */}
//       {menuItems.map(item => activeMenu === item.key && (
//         <div
//           key={item.key}
//           className={`h-screen ${item.key}-section glass absolute top-[74px] left-0 w-full z-[9]`}
//           onMouseEnter={() => setActiveMenu(item.key)}
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <div
//             className={`h-[400px] w-[80%] inner-${item.key}-section bg-red m-auto pt-[10px]`}
//             onMouseEnter={() => setActiveMenu(item.key)}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <div className="h-[300px] w-[90%] m-auto writing-section bg-white rounded-[25px] mt-[0px]">
//               <p className="text-[35px] py-[10px] px-[20px] font-bric font-[600] text-[#000000]">
//                 {item.name}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navbar */}
//       <div className="flex items-center gap-[33px] h-[100%]">
//         <img src="/assets/weblogo.svg" alt="" />
//         <div className="flex mobile-nav-hidden items-center h-[100%] gap-[9px]">
//           {menuItems.map(item => (
//             <div
//               key={item.key}
//               className="flex items-center h-[100%]"
//               onMouseEnter={() => setActiveMenu(item.key)}
//               onMouseLeave={() => setActiveMenu(null)}
//             >
//               <button className="flex hover:bg-[#D9D9D980] px-[10px] py-[5px] gap-[10px] rounded-[15px] font-bric text-[16px] font-[500] leading-[20px] tracking-[0.4px] text-black items-center">
//                 {item.name}
//                 <img
//                   src="/assets/navarrow.svg"
//                   alt=""
//                   className={`transition-transform duration-300 ${activeMenu === item.key ? 'rotate-180' : ''}`}
//                 />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sign In / Get Started */}
//       <div className="nav-button-container mobile-nav-hidden flex items-center gap-[10px]">
//         <button className="py-[10px] text-black px-[15px] border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
//           Sign in
//         </button>
//         <button className="py-[10px] px-[15px] text-white bg-black border-[1px] border-black rounded-[8.95px] font-bric text-[16px] font-[500] leading-[20px]">
//           Get started
//         </button>
//       </div>
//       <div className="flex flex-col hamburger hidden flex flex-col gap-[8px]">
//         <div className="h-[3px] w-[25px] bg-[black]"></div>
//         <div className="h-[3px] w-[25px] bg-[black]"></div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

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
