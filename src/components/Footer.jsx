import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
const Footer = () => {
  const [data, setData] = useState([]);
  const [con, setCon] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [terms, setTerms] = useState(false);
  const companyData = [
    "Prada Group",
    "Fondazione Prada",
    "Luna Rossa",
    "Sustainability",
    "Work with us",
  ];
  const companyHandler = () => {
    setData([...companyData]);
  };
  const conData = [
    "Legal Notice",
    "Privacy Policy",
    "Cookie Policy",
    "Sitemap",
  ];
  const conditionHandler = () => {
    setCon([...conData]);
  };

  return (
    <>
      <div className="hidden md:flex  ">
        <div className="bg-white w-[20%] pl-8 pt-8 ">
          <h1 className="font-bold text-[14px] ">COMPANY</h1>
          <ul className="pt-3 flex flex-col gap-1 cursor-pointer">
            <li>Prada Group</li>
            <li>Fondazione Prada</li>
            <li>Luna Rossa</li>
            <li>Systainability</li>
            <li>Work with us</li>
          </ul>
        </div>
        <div className="bg-white w-[20%] pl-8 pt-8">
          <h1 className="font-bold text-[14px]">LEGAL TERMS AND CONDITIONS</h1>
          <ul className="pt-3 flex flex-col gap-1 cursor-pointer">
            <li>Legal Notice</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="bg-white w-[60%]">
          <div className="flex justify-end pt-16 pr-8 gap-4 ">
            <FaFacebook size="20px" />
            <AiFillTwitterCircle size="20px" />
            <AiFillInstagram size="20px" />
            <AiFillYoutube size="20px" />
            <BsSpotify size="20px" />
          </div>
        </div>
      </div>
      <div className="hidden  md:flex mt-8 pl-7 gap-4">
        <MdLocationOn className="mt-1" />
        <p className="cursor-pointer">Store Locator</p>
      </div>
      <div className="hidden md:flex justify-between mt-4 pb-6 text-[12px]">
        <p className="pl-8">©PRADA 2007 - 2022 | VAT n. 10115350158</p>
        <p className="pr-8 cursor-pointer">
          Shipping to Rest of the world/English
        </p>
      </div>
      <div className="md:hidden pt-12 relative ">
        <div
          onClick={companyHandler}
          className="flex justify-between pl-8 pr-8  h-[40px] cursor-pointer "
        >
          <h1 className="font-bold text-[12px]">COMPANY</h1>
          <img
            className="w-[28px] h-[28px] absolute right-8 top-[40px]  "
            src={toggle ? Minus : Plus}
            alt=""
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
      </div>
      {data.map((elm) => (
        <div
          className={`${toggle ? "flex" : "hidden"}
        md:hidden`}
        >
          <ul className="pl-4 md:hidden">
            <li className="">{elm}</li>
          </ul>
        </div>
      ))}

      <hr />
      <div className="md:hidden pt-6 relative ">
        <div
          onClick={conditionHandler}
          className="flex justify-between pl-8 pr-8  h-[40px] cursor-pointer "
        >
          <h1 className="font-bold text-[12px]">LEGAL TERMS AND CONDITIONS</h1>
          <img
            className="w-[28px] h-[28px] absolute right-8 top-[17px] "
            src={terms ? Minus : Plus}
            alt=""
            onClick={() => setTerms((prev) => !prev)}
          />
        </div>
      </div>
      {con.map((cond) => (
        <div
          className={`${terms ? "flex" : "hidden"}
        md:hidden`}
        >
          <ul className="pl-4 md:hidden">
            <li className="">{cond}</li>
          </ul>
        </div>
      ))}
      <hr />

      <div className="md:hidden pl-8 h-[60px] pt-3">
        <p className=" font-semibold text-[13px]">
          Shipping to Rest of the world/English
        </p>
      </div>
      <hr />
      <div className="md:hidden flex justify-center  mt-8 mb-8 items-center gap-6">
        <FaFacebook size="30px" />
        <AiFillTwitterCircle size="30px" />
        <AiFillInstagram size="30px" />
        <AiFillYoutube size="30px" />
        <BsSpotify size="30px" />
        <hr />
      </div>
      <div className="md:hidden">
        <p className="text-[10px] pl-8">@PRADA-2007 -2022| VAT n.10115350158</p>
      </div>
    </>
  );
};

export default Footer;
