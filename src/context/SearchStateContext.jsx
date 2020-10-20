import React, { useEffect, useState } from "react";

export const SearchContext = React.createContext();

export default function SearchStateProvider({ children }) {
  const [isFocusSinceMobile, setIsFocusSinceMobile] = useState(null);
  const [isInputFocus, setIsInputFocus] = useState(false);

  useEffect(() => {
    window.navigator.userAgent.includes("Mobile")
      ? setIsFocusSinceMobile(true)
      : setIsFocusSinceMobile(false);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        isFocusSinceMobile,
        isInputFocus,
        setIsInputFocus,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
