import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "../FindUs";
import Qsection from "../Qsection";

const RightAside = () => {
  return (
    <div className="gap-3">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qsection></Qsection>
    </div>
  );
};

export default RightAside;
