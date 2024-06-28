import React from 'react';
import dog1 from "../assets/jpg/dog1.jpg"
function Pets() {
  return (
    <div>
    <div className="p-[8px] pb-[20px] gap-[8px] inline-flex flex-col rounded-[12px] bg-[#FDFDFD] shadow-xl border-[1px] border-solid border-[#E9ECF0] ">
    <img src={dog1} alt="" />
    <div className="text-[#00171F] text-[16px] font-[700] leading-[24px]">
      MO231 - Pomeranian White
    </div>
    <div className="flex gap-2  ">
      <div className="text-[#667479] text-[12px] font-[500]  ">Gene:</div>
      <div className="text-[#667479] text-[12px] font-[700]  ">Male</div>
      <div className="text-[#667479] text-[12px] font-[700] ">.</div>
      <div className="text-[#667479] text-[12px] font-[700]">Age:</div>
      <div className="text-[#667479] text-[12px] font-[700]">
        02 months
      </div>
    </div>
    <div className="text-[#00171F] text-[14px] font-[700] ">
      6.900.000 VND
    </div>
  </div>
    </div>

  );
}

export default Pets;
