import React from 'react';

export interface CountryCodeData {
  src: string;
  name: string;
  code: string;
}

export interface Text {
  Head_20_Bold: React.CSSProperties;
  Head_20_Medium: React.CSSProperties;
  Head_Sub_18_Bold: React.CSSProperties;
  Subtitle_16_Med: React.CSSProperties;
  Subtitle_14_Reg: React.CSSProperties;
  Body_16_Reg: React.CSSProperties;
  Body_14_Reg: React.CSSProperties;
  Caption_12_Reg: React.CSSProperties;
}

export interface Color {
  primary: {
    $80: string;
    $100: string;
  };
  secondary: {
    $40: string;
    $60: string;
    $80: string;
    $100: string;
  };
  highlight: string;
  box_bbg: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    color: Color;
    text: Text;
  }
  interface ThemeOptions {
    color?: Color;
    text: Text;
  }
}
