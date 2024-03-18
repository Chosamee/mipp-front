import React, { createContext, useContext, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const SearchParamsContext = createContext();

export const SearchParamsProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = useMemo(
    () => ({ searchParams, setSearchParams }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

  return <SearchParamsContext.Provider value={value}>{children}</SearchParamsContext.Provider>;
};

export const useSearchParamsContext = () => useContext(SearchParamsContext);
