// Libraries
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LightMode, ModeNight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = ({ changeMode }) => {
  const theme = useTheme();
  const gray = theme.palette.primary.main;
  const navigate = useNavigate();
  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');
  const isXlDesktopScreen = useMediaQuery('(min-width: 1600px)');

  return (
    <Box
      bgcolor={gray}
      py={isDesktopScreen ? 3 : 4}
      sx={{ boxShadow: theme.shadow }}
    >
      <Box
        width={isXlDesktopScreen ? "80%" : "90%"}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        m='0 auto'
      >
        <Typography
          fontWeight={800}
          variant={isDesktopScreen ? 'h2' : 'h4'}
          onClick={() => navigate('/REST-Country-API/')}
          sx={{ cursor: 'pointer' }}
        >
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
