import createTheme from '@mui/material/styles/createTheme';
import { Color } from './Theme.types';

export const color: Color = {
  primary: {
    $60: '#FFCE4F',
    $80: '#FFB905',
    $100: '#E6A600',
  },
  secondary: {
    $20: '#F3F3F3',
    $40: '#E5E5E5',
    $60: '#A1A1A1',
    $80: '#656565',
    $100: '#3E3E3E',
    $120: '#333333',
    $140: '#262626',
  },
  gray: {
    $235: '#EBEBEB',
    $240: '#F0F0F0',
    $245: '#F5F5F5',
    $250: '#FAFAFA',
  },
  red: {
    $100: '#FF6B00',
    $120: '#CC0000',
  },
  green: {
    $100: '#78DC00',
  },
  lightRed: '#FF4500',
  highlight: '#FF6B00',
  box_bbg: '#F3F3F3',
  random: {
    $1: '#58B99E',
    $2: '#E96363',
    $3: '#EF8C34',
    $4: '#5296D5',
    $5: '#B152C6',
    $6: '#1C4252',
  },
};

const theme = createTheme({
  typography: {
    fontFamily: [
      'Noto Sans',
      '"Noto Sans TC"',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '1.75rem',
      lineHeight: 1.5,
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.25rem',
      lineHeight: 1.5,
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    h4: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '2.5rem',
      lineHeight: 1.3,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: '1.875rem',
      lineHeight: 1.3,
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.625rem',
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      main: color.primary.$100,
    },
    secondary: {
      main: color.secondary.$100,
    },
  },
  color,
});

export default theme;
