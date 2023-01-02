// Libraries
import {
  Box,
  Button,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Fetch
import { fetchByName, fetchByCode } from '../data/fetch';
import styled from '@emotion/styled';

const StyledButton = styled(Button)({
  textTransform: 'capitalize',
  padding: '.5rem 2.5rem',
});

const StyledButtonCountry = styled(Button)({
  textTransform: 'capitalize',
  fontSize: '12px',
  width: '6rem',
  padding: '5px 2rem',
});

const ItemInfo = ({ name, value }) => {
  return (
    <Box display='flex' flexDirection='row'>
      <Typography variant='h4' fontWeight={600}>
        {name}:&nbsp;
      </Typography>
      <Typography variant='h4' fontWeight={300}>
        {value}
      </Typography>
    </Box>
  );
};

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isDesktopScreen = useMediaQuery('(min-width: 1300px)');

  useEffect(() => {
    fetchByCode(code).then((response) => {
      setCountry(response[0]);
      setLoading(false);
    })
    .catch((err) => console.log(err));
  }, [code, loading]);

  return (
    <>
      {!loading && (
        <Box mt={9}>
          <StyledButton
            variant='contained'
            startIcon={<KeyboardBackspace />}
            onClick={() => navigate(-1)}
          >
            Back
          </StyledButton>
          <Box
            display='flex'
            flexDirection={isDesktopScreen ? 'row' : 'column'}
            alignItems={isDesktopScreen ? 'center' : 'flex-start'}
            justifyContent={isDesktopScreen ? 'space-between' : 'flex-start'}
            gap={5}
            mt={2}

          >
            {/* FLAG */}
            <Box
              component='img'
              alt={country.name.common}
              src={country.flags.svg}
              width={isDesktopScreen ? '40%' : '100%'}
              display="flex"
              margin={!isDesktopScreen && `0 auto`}
              mt={8}
            />

            {/* COUNTRY INFO */}
            <Box mt={5} display='flex' flexDirection='column' gap={4} >
              {/* NAME */}
              <Typography variant='h1' fontWeight={800} fontSize={isDesktopScreen ? 30 : 24}>
                {country.name.common}
              </Typography>

              {/* LIST */}

              <Box
                display='flex'
                flexDirection={isDesktopScreen ? 'row' : 'column'}
                gap={isDesktopScreen ? 30 : 8}
              >
                {/* PRINCIPAL */}
                <Box display='flex' flexDirection='column' gap={2}>
                  <ItemInfo name={'Native name'} value={country.name.common} />
                  <ItemInfo name={'Population'} value={country.population.toLocaleString('en-US')} />
                  <ItemInfo name={'Region'} value={country.region} />
                  <ItemInfo name={'Sub Region'} value={country.subregion} />
                  <ItemInfo name={'Capital'} value={country.capital} />
                </Box>

                {/* SECONDARY */}
                <Box display='flex' flexDirection='column' gap={2}>
                  <ItemInfo name={'Top Level Domain'} value={country.tld} />
                  <ItemInfo
                    name={'Currencies'}
                    value={Object.values(country.currencies)
                      .map((currencie) => currencie.name)
                      .join(', ')}
                  />
                  <ItemInfo
                    name={'Languages'}
                    value={Object.values(country.languages).join(', ')}
                  />
                </Box>
              </Box>

              <Box
                display='flex'
                flexDirection={isDesktopScreen ? 'row' : 'column'}
                gap={2}
                alignItems={isDesktopScreen ? "center" : "flex-start"}
              >
                <Typography variant='h4' fontWeight={600}>
                  Border Countries:
                </Typography>
                <Box display='flex' gap={2} flexWrap='wrap' maxWidth={"35rem"}>
                  {country.borders?.map((border, index) => {
                    return (
                      <StyledButtonCountry key={index} variant='contained' onClick={() => navigate(`/${border}`)}>
                        {border}
                      </StyledButtonCountry>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>

  );
};

export default CountryDetail;
