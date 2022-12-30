import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { themeSettings } from './theme';

const App = () => {

  const theme = useTheme();
  const background = theme.palette.background.default;

  const [mode, setMode] = useState("dark");

  return (
    <ThemeProvider theme={createTheme(themeSettings(mode))}>
      <CssBaseline bgcolor={background}>App</CssBaseline>
    </ThemeProvider>
  );
};

export default App;
