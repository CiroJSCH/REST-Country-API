// Libraries
import { useEffect, useState, createContext } from 'react';

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [search, setSearch] = useState(false);

  return (
    <SearchContext.Provider
      value={{ region, setRegion, name, setName, search, setSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
