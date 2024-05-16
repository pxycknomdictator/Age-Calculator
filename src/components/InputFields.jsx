import React from "react";

const InputFields = ({ date, placeHolder }) => {
  return (
    <div>
      <span className="tracking-[.2rem] font-semibold text-smokeygrey">
        {date}
      </span>
      <div className="mt-1">
        <input
          className="cursor-pointer transition-all delay-150 focus:border focus:border-purple text-2xl py-3 pl-3 outline-none rounded-md font-extrabold placeholder:font-semibold border border-lightgrey w-full"
          type="text"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

export default InputFields;
