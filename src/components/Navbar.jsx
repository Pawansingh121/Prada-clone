import React, { useState } from "react";
import Menu from "../assets/menu.png";
import Close from "../assets/close.webp";
import Search from "../assets/search.webp";
import LOGO from "../assets/logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-[100vw]  fixed border z-[55] bg-white ">
        <div className=" flex justify-between items-center p-3">
          <img className="w-[130px] h-[20px] pl-[12px]" src={LOGO} alt="" />
          <div className="text-[12px] fixed left-[240px] font-serif font-semibold hidden md:flex gap-4 ">
            <a href="">WOMEN</a>
            <a href="">MEN</a>
            <a href="">BAGS</a>
            <a href="">GIFTS</a>
            <a href="">LINEA ROSSA</a>
            <a href="">PRADASPHERE</a>
          </div>
          <img
            className="w-[20px] h-[15px] absolute right-[45px]   cursor-pointer"
            src={Search}
            alt=""
          />

          <img
            className="md:hidden w-[25px] h-[25px] cursor-pointer "
            src={toggle ? Close : Menu}
            alt=""
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute right-0 top-[48px] justify-center items-center gap-8 w-full h-screen flex-col font-semibold  bg-white  `}
          >
            <a href="">WOMEN</a>
            <a href="">MEN</a>
            <a href="">BAGS</a>
            <a href="">GIFTS</a>
            <a href="">LINEA ROSSA</a>
            <a href="">PRADASPHERE</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
