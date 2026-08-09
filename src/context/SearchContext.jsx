import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchinp, setSearchinp] = useState('');

  return (
    <SearchContext.Provider value={{ searchinp, setSearchinp }}>
      {children}
    </SearchContext.Provider>
  );
};
