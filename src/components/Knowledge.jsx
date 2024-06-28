import React from 'react';
import  Pet from "../assets/jpg/pet.jpg"
function Knowledge() {
  return (
    <div>
    <div className="p-[8px] pb-[20px] gap-[8px] inline-flex flex-col rounded-[12px] bg-[#FDFDFD] shadow-xl border-[1px] border-solid border-[#E9ECF0] ">
    <img src={Pet} alt="" />
    <div className="text-[#FDFDFD] text-[10px] font-[700] leading-[24px] bg-[#00A7E7] flex px-[10px] py-[2px] w-[23%] rounded-[28px] m-2">
    Pet knowledge
    </div>
    <div className="flex gap-2 font-[700] mx-2 ">
    What is a Pomeranian? How to Identify Pomeranian Dogs
    </div>
    <div className="text-[#00171F] text-[14px] font-[400] mx-2 ">
    The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
    </div>
  </div>
    </div>
  );
}

export default Knowledge;
