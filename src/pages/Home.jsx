import React from "react";
import Navbar from "../../src/components/Navbar";
import play from "../assets/svg/play.svg";
import dog from "../assets/svg/girl-dog.svg";
import Product from "../components/Product";
import Pets from "../components/Pets";
import Kissing from "../assets/svg/kissing-dog.svg";
import Sign from "../assets/svg/sign.svg";
import Sign2 from "../assets/svg/sign2.svg";
import Sign3 from "../assets/svg/sign3.svg";
import Doghand from "../assets/svg/doghand.svg";
import Leg from "../assets/svg/leg.svg"
import Knowledge from "../components/Knowledge";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div className=" bg-[#FCEED5]  not-italic relative w-[100%]">
        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="absolute w-[30%] h-[35%] -mt-[10%] -ml-[10%] transform rotate-[20deg] rounded-[100px] bg-[#F7DBA7] left-0 top-0 z-0 "></div>
        <section className=" relative flex  px-[130px] mt-[30px] justify-between z-10">
          <div className="w-[50%] relative">
            <div className="absolute bg-[#F7DBA7] w-[60px] rounded-[20px] h-[65px]  transform rotate-[25deg] z-0 "></div>
            <div className="text-[60px] text-[#002A48] font-[800] leading-[68px] relative z-10">
              One More Friend
            </div>
            <div className="text-[46px] text-[#002A48] font-[700] leading-[68px]">
              Thousands More Fun!
            </div>
            <div className="text-[16px] text-[#242B33] font-[500] leading-[24px] w-[480px]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </div>
            <div className="my-[35px] flex gap-[20px]">
              <button className="inline-flex gap-[8px] justify-center items-center px-[28px] border-[1.5px] border-solid border-[#003459] rounded-[57px] py-[12px]">
                View intro <img src={play} alt="" />
              </button>
              <button className="border-[1.5px] border-solid bg-[#003459] rounded-[57px] py-[12px] px-[28px] text-[#FDFDFD]">
                Explore now
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={dog} alt="" className=" " />
            <div className=""></div>
            <div className=""></div>
          </div>
        </section>
      </div>
      <div className="px-[130px] my-[30px]">
        <p className="text-[#000] text-[16px]">Whats new</p>
        <section className="flex justify-between">
          <p className="text-[#003459] leading-[36px] font-[700] text-[24px] ">
            Take a look at some of our pets
          </p>
          <button className="inline-flex gap-[8px] justify-center items-center px-[28px] border-[1.5px] border-solid border-[#003459] rounded-[57px] py-[12px] ">
            View more
          </button>
        </section>
      </div>
      <div className="products px-[125px] grid grid-cols-4 gap-[36px] ">
        <Pets />
        <Pets />
        <Pets />
        <Pets />
        <Pets />
        <Pets />
        <Pets />
        <Pets />
      </div>
      <div className="flex flex-wrap mx-[130px] my-9 pt-[30px] px-[40px] rounded-[20px] justify-between  items-center bg-[#FCEED5]">
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
      <div className="px-[130px] my-[30px]">
        <p className="text-[#000] text-[16px]">
          Hard to choose right products for your pets?
        </p>
        <section className="flex flex-wrap justify-between">
          <p className="text-[#003459] leading-[36px] font-[700] text-[24px] ">
            Our Products
          </p>
          <button className="inline-flex gap-[8px] justify-center items-center px-[28px] border-[1.5px] border-solid border-[#003459] rounded-[57px] py-[12px] ">
            View more
          </button>
        </section>
      </div>
      <div className="products px-[125px] grid grid-cols-4 gap-[36px] ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <section className="flex flex-wrap justify-between px-[130px] my-[30px]">
        <p className="text-[#003459] leading-[36px] font-[700] text-[24px] ">
          <span className="text-[#000] text-[16px] font-[500] ">
            Proud to be part of{" "}
          </span>
          <span>Pet Sellers</span>
        </p>
        <button className="inline-flex gap-[8px] justify-center items-center px-[28px] border-[1.5px] border-solid border-[#003459] rounded-[57px] py-[12px] ">
          View all our sellers
        </button>
      </section>
      <section className="flex flex-wrap justify-between px-[130px] my-[10px]">
        <img src={Sign} alt="" />
        <img src={Sign2} alt="" />
        <img src={Sign3} alt="" />
        <img src={Sign} alt="" />
        <img src={Sign} alt="" />
        <img src={Sign} alt="" />
        <img src={Sign} alt="" />
      </section>
      <div className="flex flex-wrap mx-[130px] my-9  px-[40px] rounded-[20px] justify-between  items-center bg-[#FFB775]">
        <div className="items-center">
          <div className="text-[52px] text-[#002A48] font-[800] leading-[68px] flex gap-[30px]">
            Adoption <img src={Leg} alt="" />
          </div>
          <div className="text-[36px] text-[#002A48] font-[700] leading-[68px]">
            We need help. so do they.
          </div>
          <div className="text-[16px] text-[#242B33] font-[500] leading-[24px] w-[480px]">
            Adopt a pet and give it a home, it will be love you back
            unconditionally.
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
        <img src={Doghand} alt="" className=" " />
      </div>
      <div className="px-[130px] my-[30px]">
      <p className="text-[#000] text-[16px]">
      You already know ?
      </p>
      <section className="flex flex-wrap justify-between items-center">
        <p className="text-[#003459] leading-[36px] font-[700] text-[24px] ">
        Useful pet knowledge
        </p>
        <button className="inline-flex gap-[8px] justify-center items-center px-[28px] border-[1.5px] border-solid border-[#003459] rounded-[57px] py-[12px] ">
          View more
        </button>
      </section>
    </div>
    <div className="flex mx-[130px] justify-between gap-[10px]">
    
    <div><Knowledge /> </div>
    <div><Knowledge /></div>
    <div><Knowledge /></div>
    
    </div>
    <Footer/>
    </>
  );
}

export default Home;
