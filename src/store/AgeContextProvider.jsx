import React, { useRef, useState } from "react";
import AgeContext from "./AgeContext.js";

const AgeContextProvider = ({ children }) => {
  const userdateRef = useRef("");
  const usermonthRef = useRef("");
  const useryearRef = useRef("");
  const [displayDate, setdisplayDate] = useState("--");
  const [displayMonth, setdisplayMonth] = useState("--");
  const [displayYear, setdisplayYear] = useState("--");
  const [trigger, setTrigger] = useState(false);

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

  const checkValidAge = (date, month, year) => {
    if (isNaN(date) || isNaN(month) || isNaN(year)) {
      setTrigger(true);
    } else if (date > 31 || month > 12 || year > new Date().getFullYear()) {
      setTrigger(true);
    } else {
      setTrigger(false);
      const birthDate = new Date(`${year}/${month}/${date}`);
      const currentDate = new Date();
      AgeCalculate(birthDate, currentDate);
    }
  };

  const SubmitData = () => {
    const date = userdateRef.current.value;
    const month = usermonthRef.current.value;
    const year = useryearRef.current.value;

    checkValidAge(date, month, year);
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
        trigger,
      }}
    >
      {children}
    </AgeContext.Provider>
  );
};

export default AgeContextProvider;
