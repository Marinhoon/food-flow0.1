import { createContext, useState } from 'react';

const CreditContext = createContext();



// eslint-disable-next-line react/prop-types
const CreditProvider = ({ children }) => {
  const [credits, setCredits] = useState({});

  const addCredit = (name, amount) => {
    setCredits((prevCredits) => ({
      ...prevCredits,
      [name]: (prevCredits[name] || 0) + amount,
    }));
  };

  return (
    <CreditContext.Provider value={{ credits, setCredits, addCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

export { CreditProvider, CreditContext };

//   return (
//     <CreditContext.Provider value={{ credits, addCredit }}>
//       {children}
//     </CreditContext.Provider>
//   );
// };



// import React, { createContext, useState } from 'react';

// const CreditContext = createContext();

// const CreditProvider = ({ children }) => {
//   const [credits, setCredits] = useState({});

//   const addCredit = (name, amount) => {
//     setCredits((prevCredits) => ({
//       ...prevCredits,
//       [name]: (prevCredits[name] || 0) + amount,
//     }));
//   };

//   return (
//     <CreditContext.Provider value={{ credits, addCredit }}>
//       {children}
//     </CreditContext.Provider>
//   );
// };

// export { CreditProvider, CreditContext };
