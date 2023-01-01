// Libraries
import { useEffect, useState, useContext } from 'react';
import { Grid } from '@mui/material';

// Context
import { SearchContext } from '../context/SearchProvider';

// Components
import CountryItem from './CountryItem';

// Fetch
import { fetchAllData, fetchByName, fetchByRegion } from '../data/fetch';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const { name, region, search, setRegion, setName } =
    useContext(SearchContext);

  useEffect(() => {
    if (region === '' && name === '') {
      fetchAllData()
        .then((response) => setCountries(response))
        .catch((err) => console.log(err));
    }

    if (name !== '') {
      fetchByName(name)
        .then((response) => {
          setCountries(response), setRegion('');
        })
        .catch((err) => console.log(err));
    }

    if (region !== '') {
      fetchByRegion(region)
        .then((response) => {
          setCountries(response);
          setName('');
        })
        .catch((err) => console.log(err));
    }
  }, [region, name, search]);

  return (
    <Grid
      container
      spacing={{ xs: 5, md: 4, xl: 8 }}
      columns={{ xs: 1, sm: 8, md: 12, xl: 12 }}
    >
      {countries.map((country, index) => {
        return (
          <Grid key={index} item xs={1} sm={4} md={4} xl={3}>
            <CountryItem country={country} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CountryList;
