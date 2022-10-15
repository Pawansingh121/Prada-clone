import React from "react";
import Card from "./Card";
import MEN from "../assets/men.webp";
import GIRL from "../assets/girl.webp";

const Hero = () => {
  return (
    <div className="mt-14 grid w-full md:grid-cols-2  grid-cols-1 relative ">
      <Card pic={GIRL} title="FW22 Women" />
      <Card pic={MEN} title="FW22 Men" />
    </div>
  );
};

export default Hero;
