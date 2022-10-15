import React from "react";

const Card = ({ pic, title }) => {
  return (
    <>
      <div
        className="text-[#000000] relative
       font-bold mx-3 my-4 "
      >
        <img className="" src={pic} alt="" />
        <h1 className="absolute top-[14px] left-5 text-[20px] lg:text-[28px] ">
          {title}
        </h1>
        <h1 className="absolute top-[20px] right-[30px]  cursor-pointer hover:bg-black hover:text-white hover:transition-all duration-700 ">
          DISCOVER
        </h1>
        <div className="w-[76px] h-[2px] bg-[#000000] absolute top-[50px] right-[30px]" />
      </div>
    </>
  );
};

export default Card;
