import { Box, Grid, Typography } from '@mui/material';
import { EmojiFlags } from '@mui/icons-material';


const NotFound = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <EmojiFlags sx={{fontSize: 200}}/>
      <Typography fontSize={35} fontWeight={800} textAlign="center">That country doesn't exist</Typography>
    </Box>
  )
}

export default NotFound