import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return (
    <div>
      <Navigate to="./catagoryData/1"></Navigate>
    </div>
  );
};

export default Home;
