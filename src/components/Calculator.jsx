import React, { useContext } from "react";
import InputFields from "./InputFields";
import SubmidButton from "./SubmidButton";
import Displaydob from "./Displaydob";
import AgeContext from "../store/AgeContext";

const Calculator = () => {
  const { displayDate, displayMonth, displayYear } = useContext(AgeContext);

  return (
    <main className="w-screen h-screen bg-lightgrey grid place-items-center">
      <section className="bg-white w-11/12 px-4 py-7 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[5rem] sm:w-[500px] sm:px-8 sm:py-9 md:w-[600px] md:px-10 lg:w-[55%] lg:rounded-br-[7rem] lg:rounded-tr-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl">
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 md:w-[70%]">
          <InputFields />
        </div>
        <SubmidButton />
        <Displaydob date="years" age={displayYear} />
        <Displaydob date="months" age={displayMonth} />
        <Displaydob date="days" age={displayDate} />
      </section>
    </main>
  );
};

export default Calculator;
