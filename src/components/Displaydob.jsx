import React from "react";

const Displaydob = ({ date }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-5xl font-extrabold italic text-purple">--</span>
      <h1 className="text-5xl font-extrabold italic">{date}</h1>
    </div>
  );
};

export default Displaydob;
