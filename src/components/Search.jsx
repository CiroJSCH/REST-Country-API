// Libraries
import { useContext } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Components
import StyledTextField from './SearchInput';
import SelectRegion from './SearchSelect';

// Context
import { SearchContext } from '../context/SearchProvider';

// Icons
import { Search as SearchIcon } from '@mui/icons-material';

const Search = () => {
  const theme = useTheme();
  const gray = theme.palette.primary.main;

  const isDesktopScreen = useMediaQuery('(min-width: 1000px)');

  const { name, setName, setSearch } = useContext(SearchContext);

  return (
    <Box
      display='flex'
      justifyContent={isDesktopScreen ? 'space-between' : 'flex-start'}
      flexDirection={isDesktopScreen ? 'row' : 'column'}
      mt={5}
      gap={5}
    >
      {/* SEARCH INPUT */}
      <Box
        display='flex'
        alignItems='center'
        bgcolor={gray}
        px={4}
        gap={3}
        width={isDesktopScreen ? '30%' : '100%'}
        boxShadow={theme.shadow}
        borderRadius={1}
        py={2}
      >
        <SearchIcon
          sx={{ cursor: 'pointer' }}
          onClick={() => setSearch(true)}
        />
        <StyledTextField
          placeholder='Search for a country...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setSearch(true)}
        />
      </Box>

      {/* FILTER BY REGION */}
      <SelectRegion />
    </Box>
  );
};

export default Search;
