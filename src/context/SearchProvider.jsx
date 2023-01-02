// Libraries
import { useEffect, useState, createContext } from 'react';

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [search, setSearch] = useState(false);
  const [notFound, setNotFound] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        region,
        setRegion,
        name,
        setName,
        search,
        setSearch,
        notFound,
        setNotFound,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
