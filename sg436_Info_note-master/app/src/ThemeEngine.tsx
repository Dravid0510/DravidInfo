import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

import AppController from './Router';
import './assets/css/main.min.css';

// const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const colorScheme = 'light';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#601e9e',
      main: '#8a2be2',
      light: '#a155e7',
    },
    secondary: pink,
    type: colorScheme,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

export default function ThemeEngine() {
  return (
    <ThemeProvider theme={theme}>
      <AppController />
    </ThemeProvider>
  );
}
