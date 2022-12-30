// Libraries
import styled from '@emotion/styled';

const StyledTextField = styled('input')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h4.fontSize,

  '&::placeholder': {
    color: theme.palette.text.primary,
  },
}));

export default StyledTextField;
