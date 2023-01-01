// Libraries
import { useEffect, useState, createContext } from 'react';

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [region, setRegion] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <SearchContext.Provider
      value={{ region, setRegion, inputValue, setInputValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
