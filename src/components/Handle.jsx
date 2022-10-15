import React from "react";
import HANDLE from "../assets/handle.webp";
const Handle = () => {
  return (
    <div className="m-3 relative ">
      <img className="h-[60vh] md:h-screen object-cover " src={HANDLE} alt="" />
      <h1 className="absolute top-3 left-6 text-[22px] md:text-[32px] font-bold">
        Top handles
      </h1>
      <p className="absolute top-[80px] left-8 text-[16Spx] font-semibold cursor-pointer hover:bg-black hover:text-white hover:transition-all duration-700">
        FOR HER
      </p>
      <div className="w-[60px] h-[2px] bg-[#000000] absolute top-[110px] left-8 " />
    </div>
  );
};

export default Handle;
