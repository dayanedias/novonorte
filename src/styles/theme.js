// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4814', // Exact orange from the website
      light: '#ff6b42',
      dark: '#e53e12',
    },
    secondary: {
      main: '#2c3e50', // Dark blue
      light: '#34495e',
      dark: '#1c2833',
    },
    background: {
      default: '#e7e7e7',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, Verdana, sans-serif;',
    h1: {
      fontWeight: 500,
      fontSize: '3.33rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (max-width: 768px)': {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: '20px',
        },
      },
    },
  },
});