// Libraries
import { Box, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Components
import CountryItem from './CountryItem';

const CountryList = () => {
  const theme = useTheme();
  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Grid
      container
      spacing={{ xs: 5, md: 4, xl: 8 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
    >
      <Grid item xs={1} sm={4} md={3}>
        <CountryItem />
      </Grid>
      <Grid item xs={1} sm={4} md={3}>
        <CountryItem />
      </Grid>
      <Grid item xs={1} sm={4} md={3}>
        <CountryItem />
      </Grid>
      <Grid item xs={1} sm={4} md={3}>
        <CountryItem />
      </Grid>
    </Grid>
  );
};

export default CountryList;
