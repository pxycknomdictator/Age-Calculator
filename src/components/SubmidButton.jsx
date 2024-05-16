import React from "react";
import arrow from "/images/icon-arrow.svg";

const SubmidButton = () => {
  return (
    <div className="flex items-center relative mt-14 mb-16">
      <div className="bg-lightgrey h-[1px] w-full"></div>
      <div className="bg-purple rounded-full w-14 h-14 p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img className="w-full" src={arrow} alt="submitArrow" />
      </div>
    </div>
  );
};

export default SubmidButton;
