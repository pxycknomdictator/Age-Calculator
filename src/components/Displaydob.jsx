import React from "react";

const Displaydob = ({ date, age }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-5xl font-extrabold italic text-purple sm:text-[3.4rem] md:text-[3.5rem] lg:text-7xl xl:text-[5rem]">
        {age}
      </span>
      <h1 className="text-5xl font-extrabold italic sm:text-[3.4rem] md:text-[3.5rem] lg:text-7xl xl:text-[5rem]">
        {date}
      </h1>
    </div>
  );
};

export default Displaydob;
