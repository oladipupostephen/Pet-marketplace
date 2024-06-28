import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kissing from "../assets/svg/kissing-dog.svg";
import play from "../assets/svg/play.svg";
import arrow from "../assets/svg/arrow-right.svg";
import Pets from "../components/Pets";
function Category() {
  return (
    <div>
      <Navbar />
      <div>
        <ul className="flex mx-[130px] ">
          <li className="mr-[20px]">Home</li>
          <li>
            <img src={arrow} alt="" />
          </li>
          <li className="mx-[20px]">Dog</li>
          <li>
            <img src={arrow} alt="" />
          </li>
          <li className="mx-[20px]">Small Dog</li>
        </ul>
      </div>
      <div className="flex flex-wrap mx-[130px] mt-[20px] pt-[30px] px-[40px] rounded-[20px] justify-between  items-center bg-[#FCEED5]">
        <img src={Kissing} alt="" />
        <div className="items-center">
          <div className="text-[52px] text-[#002A48] font-[800] leading-[68px] ">
            One More Friend
          </div>
          <div className="text-[36px] text-[#002A48] font-[700] leading-[68px]">
            Thousands More Fun!
          </div>
          <div className="text-[16px] text-[#242B33] font-[500] leading-[24px] w-[480px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </div>
          <div className="my-[35px] flex flex-wrap gap-[20px]">
            <button className="inline-flex gap-[8px] justify-center items-center px-[28px] border-[1.5px] border-solid border-[#003459] rounded-[57px] py-[12px]">
              View intro <img src={play} alt="" />
            </button>
            <button className="border-[1.5px] border-solid bg-[#003459] rounded-[57px] py-[12px] px-[28px] text-[#FDFDFD]">
              Explore now
            </button>
          </div>
        </div>
      </div>
      <div className="flex mx-[130px] mt-[20px] justify-between gap-[20px]">
        <div className="basis-9/12 flex flex-col gap-[10px]">
          <div>Filter</div>
          <div className="gender flex flex-col">
            <span>Gender</span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Male</label>
            </span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Male</label>
            </span>
          </div>
          <div className="color flex flex-col">
            <span>Color</span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Red</label>
            </span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Apricot</label>
            </span>
          </div>
          <div className="Price flex flex-col">
            <span>Price</span>
            <span className="flex">
             <span className="flex">
             <label htmlFor="">Min</label>
             <input type="number" name="" id="" />
             </span>
             <span className="flex">
             <label htmlFor="">Max</label>
             <input type="number" name="" id="" />
             </span>
             
            </span>
           
            
          </div>
          <div className="breed flex flex-col">
            <span>Breed</span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Small</label>
            </span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Medium</label>
            </span>
            <span>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Large</label>
            </span>
          </div>
        </div>
        <div className="basis-5/6">
          <div className="flex justify-between">
            <div>
              Small Dog <span>52 puppies</span>
            </div>
            <div>Sort by popular</div>
          </div>
          <div className="grid grid-cols-3 w-[100%]">
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
            <Pets />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
