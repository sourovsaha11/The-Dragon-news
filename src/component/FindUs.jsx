import React from "react";

const FindUs = () => {
  return (
    <div>
      <div className="join join-vertical w-full mt-5">
        <h3 className="flex text-primary justify-start mb-2">
          <strong>Find us on</strong>
        </h3>
        <button className="btn btn-outline join-item bg-base-100 hover:bg-base-300 text-blue-700">
          Facebook
        </button>
        <button className="btn btn-outline join-item bg-base-100 hover:bg-base-300">
          Twitter
        </button>
        <button className="btn btn-outline join-item bg-base-100 hover:bg-base-300 text-orange-600">
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
