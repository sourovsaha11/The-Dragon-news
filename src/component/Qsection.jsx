import React from "react";
import classImage from "../assets/class.png";
import playImage from "../assets/playground.png";
import swimmingImage from "../assets/swimming.png";

const Qsection = () => {
  return (
    <div className="grid grid-cols-1 mb-3 space-y-5">
      <h3 className="mt-3">
        <strong>Qzone</strong>
      </h3>
      <img className="w-full " src={classImage} alt="" srcset="" />
      <img className="w-full " src={playImage} alt="" srcset="" />
      <img className="w-full " src={swimmingImage} alt="" srcset="" />
    </div>
  );
};

export default Qsection;
