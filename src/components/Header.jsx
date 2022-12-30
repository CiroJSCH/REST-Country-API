import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {LightMode, ModeNight} from '@mui/icons-material';

const Header = () => {
  const theme = useTheme();
  const gray = theme.palette.primary.main;

  const isDesktopScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor={gray} px={isDesktopScreen ? 10 : 2} py={isDesktopScreen ? 3 : 4} sx={{ boxShadow: 3 }}>
      <Typography fontWeight={800} variant={isDesktopScreen ? "h2" : "h4"}>Where in the world?</Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <ModeNight />
        <Typography variant="h4">Dark Mode</Typography>
      </Box>
    </Box>
  )
}

export default Header