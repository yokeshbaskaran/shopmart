import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const API_URL = import.meta.env.VITE_SERVER_APP_URL;

export const AppContextProvider = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [black, setBlack] = useState(false);

  const contextValues = { mobileNav, setMobileNav, black, setBlack };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
