// Libraries
import { useEffect, useState, createContext } from 'react';

export const SearchContext = createContext(null);

const SearchContextProvider = ({ children }) => {
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [notFound, setNotFound] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        region,
        setRegion,
        name,
        setName,
        notFound,
        setNotFound,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
