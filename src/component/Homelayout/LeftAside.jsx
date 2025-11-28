import React, { Suspense } from "react";
import Catagory from "../Catagory";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Catagory></Catagory>
      </Suspense>
    </div>
  );
};

export default LeftAside;
