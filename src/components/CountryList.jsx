// Libraries
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

// Context
import { SearchContext } from '../context/SearchProvider';

// Components
import CountryItem from './CountryItem';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const { name, region, search } = useContext(SearchContext);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchByRegion = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    const fetchByName = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (region === '' && name === '') {
      fetchAllData();
    }

    if (name !== '') {
      fetchByName();
    }

    if (region !== '') {
      fetchByRegion();
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
            <CountryItem country={country}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CountryList;
