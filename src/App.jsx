// Libraries
import { useState } from 'react';
import { CssBaseline, Box, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

// Context
import SearchContextProvider from './context/SearchProvider';

// Theme config
import { themeSettings } from './theme';

const App = () => {
  const theme = useTheme();
  const background = theme.palette.background.default;
  const isXlDesktopScreen = useMediaQuery('(min-width: 1600px)');

  const [mode, setMode] = useState('dark');

  const changeMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={createTheme(themeSettings(mode))}>
        <CssBaseline bgcolor={background}>
          <Header changeMode={changeMode} />
          <Box
            width={isXlDesktopScreen ? "80%" : "90%"}
            m='0 auto'
            display='flex'
            flexDirection='column'
            gap={7}
          >
            <SearchContextProvider>
              <Routes>
                <Route
                  path='/REST-Country-API/'
                  element={
                    <>
                      <Search />
                      <CountryList />
                    </>
                  }
                />
                <Route path='/REST-Country-API/:code' element={<CountryDetail />} />
              </Routes>
            </SearchContextProvider>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
