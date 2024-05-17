import React from "react";
import Calculator from "./components/Calculator.jsx";
import AgeContextProvider from "./store/AgeContextProvider.jsx";

const App = () => {
  return (
    <AgeContextProvider>
      <Calculator />;
    </AgeContextProvider>
  );
};

export default App;
