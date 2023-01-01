// Libraries
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

// Components
import CountryItem from './CountryItem';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
