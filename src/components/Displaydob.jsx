import React from "react";

const Displaydob = ({ date, age }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-5xl font-extrabold italic text-purple sm:text-[3.4rem] md:text-[3.5rem] lg:text-7xl">
        {age}
      </span>
      <h1 className="text-5xl font-extrabold italic sm:text-[3.4rem] md:text-[3.5rem] lg:text-7xl">
        {date}
      </h1>
    </div>
  );
};

export default Displaydob;
