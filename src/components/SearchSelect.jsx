// Libraries
import { useState } from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

// Icons
import { KeyboardArrowDown } from '@mui/icons-material';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const StyledList = styled(List)(({ theme, display }) => ({
  width: "100%",
  display,
  borderRadius: 3,
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  top: '4.5rem',
 
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: "3px",
  paddingBottom: "3px",
  "&:hover": {
    cursor:"pointer",
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255, 0.1)" : "rgba(200,200,200, 0.3)",
  }
}));

const SelectRegion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const gray = theme.palette.primary.main;

  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <Box width={isDesktopScreen ? '20%' : '70%'} position="relative">
      <Box
        bgcolor={gray}
        boxShadow={theme.shadow}
        borderRadius={1}
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        px={3}
        py={2}
      >
        <Typography variant='h4'>Filter by Region</Typography>
        <KeyboardArrowDown
          sx={{ cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Box>
      <StyledList sx={{ backgroundColor: gray }} display={isOpen ? "block" : "none"}>
        {regions.map((region, index) => {
          return (
            <StyledListItem key={index}>
              <ListItemText
                primary={region}
                primaryTypographyProps={{
                  fontSize: theme.typography.h4.fontSize,
                }}
              />
            </StyledListItem>
          );
        })}
      </StyledList>
    </Box>
  );
};

export default SelectRegion;
