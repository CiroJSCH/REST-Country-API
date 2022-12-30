import { createTheme } from '@mui/material/styles';

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: 'hsl(209, 23%, 22%)',
            },
            text: {
              primary: 'hsl(0, 0%, 100%)',
            },
            background: {
              default: 'hsl(207, 26%, 17%)',
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: 'hsl(0, 0%, 100%)',
            },
            input: {
              primary: 'hsl(0, 0%, 52%)',
            },
            text: {
              primary: 'hsl(200, 15%, 8%)',
            },
            background: {
              default: 'hsl(0, 0%, 98%)',
            },
          }),
    },
  };
};
