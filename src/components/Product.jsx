import React from 'react';
import dog1 from "../assets/jpg/cat.jpg"
import frame from "../assets/svg/Frame.svg"
function Product() {
  return (
    <div>
    <div className="p-[8px] pb-[20px] gap-[8px] inline-flex flex-col rounded-[12px] bg-[#FDFDFD] shadow-xl border-[1px] border-solid border-[#E9ECF0] ">
    <img src={dog1} alt="" />
    <div className="text-[#00171F] text-[16px] font-[700] leading-[24px]">
    Reflex Plus Adult Cat Food Salmon
    </div>
    <div className="flex gap-2  ">
      <div className="text-[#667479] text-[12px] font-[500]  ">Product:</div>
      <div className="text-[#667479] text-[12px] font-[700]  ">Dog Food</div>
      <div className="text-[#667479] text-[12px] font-[700] ">.</div>
      <div className="text-[#667479] text-[12px] font-[700]">Size:</div>
      <div className="text-[#667479] text-[12px] font-[700]">
        385gm
      </div>
    </div>
    <div className="text-[#00171F] text-[14px] font-[700] ">
      6.900.000 VND
    </div>
    <div className='flex bg-[#FCEED5] gap-[8px] text-[14px] text-[#002A48] font-[700] pt-[6px] px-[10px] pb-[4px] rounded-[8px] items-center'>
    <img src={frame} alt="" />
    <div className="">.</div>
    <div>Free Toy & Free Shaker</div>
    </div>
  </div>
    </div>
  );
}

export default Product;
