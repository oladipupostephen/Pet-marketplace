import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/svg/facebook.svg";
import Twitter from "../assets/svg/twitter.svg";
import Instagram from "../assets/svg/instagram.svg";
import Youtube from "../assets/svg/youtube.svg";
import Logo from "../assets/svg/logo.svg";
function Footer() {
  return (
    <footer className="flex flex-col px-[130px] py-[28px] text-[16px] leading-[24px] font-[700] items-center mt-[30px]  w-[100%] bg-[#FCEED5] rounded-[40px]">
      <div className="p-[32px] flex rounded-[15px]  gap-[12px] bg-[#003459] w-[100%] justify-between  ">
        <div className="w-[30%] text-[24px] text-[#FFF] leading-[36px]">
          Register now so you don't miss our programs
        </div>
        <div className="gap-[12px] p-[12px] rounded-[8px] justify-between bg-[#FFF] w-[60%]">
          <form className="flex  gap-[10px] items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[75%] pt-[10px] pb-[10px] border border-[#99A2A5] font-[500] text-[14px] items-center rounded-[8px] "
            />
            <button className="bg-[#003459] text-[#FFF] px-[28px] pt-[10px] pb-[10px] rounded-[8px]">
              Suscribe Now
            </button>
          </form>{" "}
        </div>
      </div>
      <div className="flex justify-between w-[100%] my-[40px] pb-[30px] border-b-2 border-[#CCD1D2]">
        <div className="flex gap-[60px]">
          {" "}
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/checkout">Category</Link>
          </div>
          <div>
            {" "}
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex gap-[40px]">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
          <img src={Youtube} alt="" />
        </div>
      </div>
      
      <div className="flex w-[100%] justify-between font-[500] text-[14px] text-[#667479] ">
        <div>© 2022 Monito. All rights reserved.</div>
        <img src={Logo} alt="" />
        <div className="flex gap-[60px]">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
