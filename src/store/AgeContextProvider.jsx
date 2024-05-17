import React, { useRef, useState } from "react";
import AgeContext from "./AgeContext.js";

const AgeContextProvider = ({ children }) => {
  const userdateRef = useRef("");
  const usermonthRef = useRef("");
  const useryearRef = useRef("");
  const [displayDate, setdisplayDate] = useState("--");
  const [displayMonth, setdisplayMonth] = useState("--");
  const [displayYear, setdisplayYear] = useState("--");

  const AgeCalculate = (birthdate, currentdate) => {
    let date = currentdate.getDate() - birthdate.getDate();
    let month = currentdate.getMonth() - birthdate.getMonth();
    let year = currentdate.getFullYear() - birthdate.getFullYear();

    if (date < 0) {
      month--;
      const prevMonth = new Date(
        currentdate.getFullYear(),
        currentdate.getMonth() - 1,
        0
      );
      date += prevMonth.getDate();
    }
    if (month < 0) {
      year--;
      month += 12;
    }

    setdisplayDate((pre) => (pre = date));
    setdisplayMonth((pre) => (pre = month));
    setdisplayYear((pre) => (pre = year));
  };

  const SubmitData = () => {
    const date = userdateRef.current.value;
    const month = usermonthRef.current.value;
    const year = useryearRef.current.value;

    const birthDate = new Date(`${year}/${month}/${date}`);
    const currentDate = new Date();
    AgeCalculate(birthDate, currentDate);
  };

  return (
    <AgeContext.Provider
      value={{
        userdateRef,
        usermonthRef,
        useryearRef,
        SubmitData,
        displayDate,
        displayMonth,
        displayYear,
      }}
    >
      {children}
    </AgeContext.Provider>
  );
};

export default AgeContextProvider;
