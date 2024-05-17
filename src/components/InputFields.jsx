import React, { useContext } from "react";
import AgeContext from "../store/AgeContext";

const InputFields = () => {
  const { userdateRef, usermonthRef, useryearRef, trigger } =
    useContext(AgeContext);

  return (
    <>
      <div>
        <span
          className={`tracking-[.2rem] font-semibold ${
            trigger ? "text-lightred" : "text-smokeygrey"
          }`}
        >
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
        {trigger && (
          <span className="text-xs text-lightred font-semibold italic">
            Must be a valid Date
          </span>
        )}
      </div>
      <div>
        <span
          className={`tracking-[.2rem] font-semibold ${
            trigger ? "text-lightred" : "text-smokeygrey"
          }`}
        >
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
        {trigger && (
          <span className="text-xs text-lightred font-semibold italic">
            Must be a valid Month
          </span>
        )}
      </div>
      <div>
        <span
          className={`tracking-[.2rem] font-semibold ${
            trigger ? "text-lightred" : "text-smokeygrey"
          }`}
        >
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
        {trigger && (
          <span className="text-xs text-lightred font-semibold italic">
            Must be a valid Year
          </span>
        )}
      </div>
    </>
  );
};

export default InputFields;
