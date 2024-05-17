import React, { useContext } from "react";
import arrow from "/images/icon-arrow.svg";
import AgeContext from "../store/AgeContext";

const SubmidButton = () => {
  const { SubmitData } = useContext(AgeContext);

  return (
    <div className="relative mt-14 mb-16 md:static md:mt-14 md:mb-0 md:flex">
      <div className="bg-lightgrey h-[1px] w-full"></div>
      <div
        onClick={SubmitData}
        className="bg-purple rounded-full w-14 h-14 p-3 cursor-pointer hover:bg-black transition-all absolute duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:w-[60px]"
      >
        <img className="w-full" src={arrow} alt="submitArrow" />
      </div>
    </div>
  );
};

export default SubmidButton;
