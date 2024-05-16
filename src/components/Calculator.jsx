import React from "react";
import InputFields from "./InputFields";
import SubmidButton from "./SubmidButton";

const Calculator = () => {
  return (
    <main className="w-screen h-screen bg-lightgrey grid place-items-center">
      <section className="bg-white w-11/12 px-4 py-7">
        <div className="w-full grid grid-cols-3 gap-2">
          <InputFields placeHolder="DD" date="DAY" />
          <InputFields placeHolder="MM" date="MONTH" />
          <InputFields placeHolder="YYYY" date="YEAR" />
        </div>
        <SubmidButton />
      </section>
    </main>
  );
};

export default Calculator;