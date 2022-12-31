// Libraries
import { useState } from 'react';
import { CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

// Components
import Header from './components/Header';
import Search from './components/Search';
import CountryList from './components/CountryList';

// Theme config
import { themeSettings } from './theme';

const App = () => {

  const theme = useTheme();
  const background = theme.palette.background.default;

  const [mode, setMode] = useState("dark");

  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={createTheme(themeSettings(mode))}>
      <CssBaseline bgcolor={background}>
        <Header changeMode={changeMode}/>
        <Box width="90%" m="0 auto" display="flex" flexDirection="column" gap={7}>
          <Search />
          <CountryList />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
