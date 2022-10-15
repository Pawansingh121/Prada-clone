import React from "react";
import First from "../assets/1.webp";

const Carousel = () => {
  return (
    <div className="bg-white">
      <div className=" m-8 h-screen  flex flex-col  justify-center items-center bg-[#1B1b1b]">
        <div className="bg-[#1b1b1b] h-[60vh] w-[70vw] ">
          <img
            className="h-[60vh] w-[70vw] object-contain"
            src={First}
            alt=""
          />
        </div>
        <div className="text-white mt-10   text-2xl   ">
          <p className="font-bold">SS 2023 Womenswear</p>
          <p className="w-[90px] hover:bg-white hover:text-black transition-all duration-700">
            Discover
          </p>
          <div className="bg-white w-[90px] h-[2px]" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Carousel;
