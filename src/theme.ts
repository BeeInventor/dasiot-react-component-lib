import createTheme from '@mui/material/styles/createTheme';
import { Color, Text } from './Theme.types';

export const text: Text = {
  Head_20_Bold: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 1.35,
  },
  Head_20_Medium: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.35,
  },
  Head_Sub_18_Bold: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 1.33,
  },
  Subtitle_16_Med: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.5,
  },
  Subtitle_14_Reg: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.357,
  },
  Body_16_Reg: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 1.5,
  },
  Body_14_Reg: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 1.57,
  },
  Caption_12_Reg: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 2,
  },
};

export const color: Color = {
  primary: {
    $80: '#FFB905',
    $100: '#E6A600',
  },
  secondary: {
    $40: '#E5E5E5',
    $60: '#A1A1A1',
    $80: '#656565',
    $100: '#3E3E3E',
  },
  highlight: '#FF6B00',
  box_bbg: '#F3F3F3',
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
    h2: {
      fontSize: '1.75rem',
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
      fontSize: '0.88rem',
      lineHeight: 1.5,
      fontFamily: 'Montserrat',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '2.5rem',
      lineHeight: 1.2,
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.88rem',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.63rem',
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
  text,
});

export default theme;
