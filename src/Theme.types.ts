export interface CountryCodeData {
  src: string;
  name: string;
  code: string;
}

export interface Color {
  primary: {
    $60: string;
    $80: string;
    $100: string;
  };
  secondary: {
    $20: string;
    $40: string;
    $60: string;
    $80: string;
    $100: string;
    $120: string;
    $140: string;
  };
  gray: {
    $235: string;
    $240: string;
    $245: string;
    $250: string;
  };
  red: {
    $100: string;
    $120: string;
  };
  green: {
    $100: string;
  };
  lightRed: string;
  highlight: string;
  box_bbg: string;
  random: {
    $1: string;
    $2: string;
    $3: string;
    $4: string;
    $5: string;
    $6: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    color: Color;
  }

  interface ThemeOptions {
    color?: Partial<Color>;
  }
}
