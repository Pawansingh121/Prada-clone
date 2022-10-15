import React from "react";

const SecondCard = ({ pic, title, gender }) => {
  return (
    <>
      <div
        className="text-white relative
       font-bold mx-3 my-4 "
      >
        <img className=" " src={pic} alt="" />
        <h1 className="absolute top-[14px] left-5 text-[20px] lg:text-[32px] ">
          Linea Rossa FW22
        </h1>
        <p className="absolute text-[22px] lg:text-[32px]  top-[45px] left-6">
          {title}
        </p>
        <h1 className="absolute top-[20px] right-[30px]  cursor-pointer hover:bg-white hover:text-black hover:transition-all duration-700">
          DISCOVER
        </h1>
        <div className="w-[76px] h-[2px] bg-white absolute top-[50px] right-[30px]" />
      </div>
    </>
  );
};

export default SecondCard;
