import React from "react";

const InputFields = ({ date, placeHolder }) => {
  return (
    <form>
      <span className="tracking-[.2rem] font-semibold text-smokeygrey">
        {date}
      </span>
      <div className="mt-1">
        <input
          className="text-2xl py-3 pl-3 outline-none rounded-md font-extrabold placeholder:font-semibold border border-lightgrey w-full"
          type="text"
          placeholder={placeHolder}
        />
      </div>
    </form>
  );
};

export default InputFields;
