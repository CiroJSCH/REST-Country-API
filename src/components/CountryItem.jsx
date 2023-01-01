import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
  useMediaQuery,
} from '@mui/material';

const CountryItem = ({ country }) => {
  const theme = useTheme();
  const gray = theme.palette.primary.main;
  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');
  const isXlDesktopScreen = useMediaQuery('(min-width: 1600px)');

  return (
    <Card
      sx={{
        width: '100%',
        backgroundColor: gray,
        paddingBottom: '1.5rem',
        boxShadow: theme.shadow,
      }}
    >
      <CardMedia
        sx={{ height: 180 }}
        image={ country.flags.svg }
        title='green iguana'
      />
      <CardContent sx={{ padding: '1.5rem' }}>
        <Typography
          gutterBottom
          variant={isDesktopScreen ? 'h3' : 'h4'}
          component='div'
          fontWeight={600}
        >
          {country.name.common}
        </Typography>
        <Box display='flex' flexDirection='column' gap={1} mt={2}>
          <Box display='flex' gap={1}>
            <Typography
              variant={isDesktopScreen ? 'h4' : 'h5'}
              fontWeight={600}
            >
              Population:
            </Typography>

            <Typography variant={isDesktopScreen ? 'h4' : 'h5'}>
              {country.population}
            </Typography>
          </Box>

          <Box display='flex' gap={1}>
            <Typography
              variant={isDesktopScreen ? 'h4' : 'h5'}
              fontWeight={600}
            >
              Region:
            </Typography>

            <Typography variant={isDesktopScreen ? 'h4' : 'h5'}>
              {country.region}
            </Typography>
          </Box>

          <Box display='flex' gap={1}>
            <Typography
              variant={isDesktopScreen ? 'h4' : 'h5'}
              fontWeight={600}
            >
              Capital:
            </Typography>

            <Typography variant={isDesktopScreen ? 'h4' : 'h5'}>
              {country.capital}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryItem;
