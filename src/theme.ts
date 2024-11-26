import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F1F1F1',
    },
    secondary: {
      main: '#2D2D2D',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  custom: {
    buttonTheme: {
      color: '#fff',
      backroundcolor: '#000',
      css: '',
    },
    defaultButton: {
      backroundcolor: '',
      color: '',
      css: '',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  custom: {
    buttonTheme: {
      backroundcolor: '#000',
      color: '',
      css: '',
    },
    defaultButton: {
      backroundcolor: '',
      color: '',
      css: '',
    },
  },
});
