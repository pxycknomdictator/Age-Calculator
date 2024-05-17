import React, { useContext } from "react";
import AgeContext from "../store/AgeContext";

const InputFields = () => {
  const { userdateRef, usermonthRef, useryearRef } = useContext(AgeContext);

  return (
    <>
      <div>
        <span className="tracking-[.2rem] font-semibold text-smokeygrey">
          DAY
        </span>
        <div className="mt-1">
          <input
            className="cursor-pointer transition-all delay-150 focus:border focus:border-purple text-2xl py-3 pl-3 outline-none rounded-md font-extrabold placeholder:font-semibold border border-lightgrey w-full"
            type="text"
            placeholder="DD"
            ref={userdateRef}
          />
        </div>
      </div>
      <div>
        <span className="tracking-[.2rem] font-semibold text-smokeygrey">
          MONTH
        </span>
        <div className="mt-1">
          <input
            className="cursor-pointer transition-all delay-150 focus:border focus:border-purple text-2xl py-3 pl-3 outline-none rounded-md font-extrabold placeholder:font-semibold border border-lightgrey w-full"
            type="text"
            placeholder="MM"
            ref={usermonthRef}
          />
        </div>
      </div>
      <div>
        <span className="tracking-[.2rem] font-semibold text-smokeygrey">
          YEAR
        </span>
        <div className="mt-1">
          <input
            className="cursor-pointer transition-all delay-150 focus:border focus:border-purple text-2xl py-3 pl-3 outline-none rounded-md font-extrabold placeholder:font-semibold border border-lightgrey w-full"
            type="text"
            placeholder="YYYY"
            ref={useryearRef}
          />
        </div>
      </div>
    </>
  );
};

export default InputFields;
