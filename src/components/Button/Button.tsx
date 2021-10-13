import MuiButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  ...theme.text.Subtitle_16_Med,
  padding: '4px 32px',
  borderRadius: 90000,
  textTransform: 'none',
  minHeight: 32,
  '&.MuiButton-contained': {
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    '&:active': {
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    '&:disabled': {
      color: '#FFFFFF',
    },
  },
  '&.MuiButton-containedPrimary': {
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: theme.color.primary.$80,
    },
    '&:active': {
      backgroundColor: theme.color.primary.$100,
    },
    '&:disabled': {
      backgroundColor: '#E6D2A1',
    },
  },
  '&.MuiButton-containedSecondary': {
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: theme.color.secondary.$80,
    },
    '&:active': {
      backgroundColor: theme.color.secondary.$80,
    },
    '&:disabled': {
      backgroundColor: '#B3B3B3',
    },
  },
}));

export default StyledButton;
