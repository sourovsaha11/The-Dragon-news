import React, { use } from "react";
import { NavLink } from "react-router";
const catagoriesPromise = fetch("categories.json").then((res) => res.json());

const Catagory = () => {
  const catagoryData = use(catagoriesPromise);
  return (
    <div>
      <h1>
        <strong>catagories</strong>
      </h1>
      <div className="grid grid-cols-1 gap-2 mt-5">
        {catagoryData.map((singleCatagory) => (
          <NavLink
            to={`CatagoryData/${singleCatagory.id}`}
            key={catagoryData.id}
            className="btn text-accent border-0 hover:bg-base-200 bg-base-100 w-full hover:underline"
          >
            {singleCatagory.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
