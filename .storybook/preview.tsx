import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#3E3E3E',
      },
      {
        name: 'light',
        value: '#EBEBEB',
      },
      {
        name: 'secondary80',
        value: '#656565',
      },
    ],
  },
};
export const tags = ['autodocs'];
