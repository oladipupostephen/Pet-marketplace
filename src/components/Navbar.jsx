import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import search from "../assets/svg/search.svg";
import star from "../assets/svg/star.svg";
import dropdown from "../assets/svg/dropdown.svg";
function Navbar() {
  return (
    
      <nav className="flex flex-wrap justify-between px-[130px] py-[28px] text-[16px] leading-[24px] font-[700] items-center  w-[100%]">
        <div className="flex flex-wrap items-center gap-[48px]  text-[#003459]">
          <img src={Logo} alt="logo" />
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/category">Category</Link>
          </div>
          <div>
            {" "}
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-[14px]">
          <form action="">
            <input
              type="search"
              name="search"
              id=""
              placeholder="search something here"
              className="items-center w-[280px] px-[16px] py-[12px] border-2 rounded-[46px]"
            />
          </form>
          <img src={search} alt="search" />
          <div className="px-[28px] py-[14px] bg-[#003459] text-[#FDFDFD] rounded-[57px]">
            Join the Community
          </div>
          <img src={star} alt="star" />
          <div>VND</div>
          <img src={dropdown} alt="dropdown" />
        </div>
      </nav>
    
  );
}

export default Navbar;
