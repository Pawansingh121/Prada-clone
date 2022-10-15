import React from "react";
import Jgirl from "../assets/jgirl.webp";
import Jmen from "../assets/jmen.jpg";
import SecondCard from "./SecondCard";

const SecondHero = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <SecondCard pic={Jgirl} title="Women" />
      <SecondCard pic={Jmen} title="Men" />
    </div>
  );
};

export default SecondHero;
