// CreditContext.js
import React, { createContext, useState } from 'react';

const CreditContext = createContext();

const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState({});

  const addCredit = (name, amount) => {
    setCredits((prevCredits) => ({
      ...prevCredits,
      [name]: (prevCredits[name] || 0) + amount,
    }));
  };

  return (
    <CreditContext.Provider value={{ credits, addCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

export { CreditProvider, CreditContext };
