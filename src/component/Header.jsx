import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";
import LatestNews from "./LatestNews";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center mt-8 items-center gap-3">
      <img className="w-[350px]" src={logo} alt="logo" srcset="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>
        <strong>{format(new Date(), "EEEE")}</strong>,
        {format(new Date(), "MMMM d, yyyy")}
      </p>

      {/* latest news section */}
      <LatestNews></LatestNews>
    </div>
  );
};

export default Header;
