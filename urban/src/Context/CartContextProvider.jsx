import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const handleTotal = (value) => {
    setTotal(total + Number(value));
  };

  return (
    <cartContext.Provider value={{ total, handleTotal }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
