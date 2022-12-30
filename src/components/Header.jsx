import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LightMode, ModeNight } from '@mui/icons-material';

const Header = ({ changeMode }) => {
  const theme = useTheme();
  const gray = theme.palette.primary.main;

  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box bgcolor={gray} py={isDesktopScreen ? 3 : 4} sx={{ boxShadow: 3 }}>
      <Box
        width='90%'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        m="0 auto"
      >
        <Typography fontWeight={800} variant={isDesktopScreen ? 'h2' : 'h4'}>
          Where in the world?
        </Typography>
        <Box
          display='flex'
          alignItems='center'
          gap={1}
          onClick={changeMode}
          sx={{ cursor: 'pointer' }}
        >
          {theme.palette.mode === 'dark' ? (
            <LightMode />
          ) : (
            <ModeNight bgcolor={'red'} />
          )}
          <Typography variant='h4'>
            {theme.palette.mode === 'dark' ? 'Light' : 'Dark'} mode
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
