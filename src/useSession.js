import React, { createContext, useState, useContext } from "react";

const SessionContext = createContext(false);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(false);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
