import createTheme from '@material-ui/core/styles/createTheme';
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
};

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          fontFamily: [
            'Noto Sans',
            '"Noto Sans TC"',
            'Roboto',
            'Helvetica',
            'Arial',
            'sans-serif',
          ].join(','),
        },
        '@media screen and (-webkit-min-device-pixel-ratio:0)': {
          'input[type="password"]:not(:placeholder-shown)': {
            '-webkit-text-stroke-width': '0.4em',
            letterSpacing: '-0.2em',
            fontSize: '1.25rem',
          },
        },
        '@media screen and (min--moz-device-pixel-ratio:0)': {
          'input[type="password"]:not(:placeholder-shown)': {
            '-webkit-text-stroke-width': '0.1em',
            letterSpacing: '0.2em',
            fontSize: '1rem',
          },
        },
      },
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
