import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#081142'
    },
    secondary: {
      main: '#1e1e1e'
    },
    info: {
      light: '#f1f1f1',
      main: '#fff',
      contrastText: '#000',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '5rem',
          fontWeight: 600,
          '@media (max-width:768px)': {
            fontSize: '3.05rem',
          },'@media (max-width:425px)': {
            fontSize: '2.5rem',
          }
          
        },
        h2: {
          fontSize: '3.75rem',
          fontWeight: 400,
          '@media (max-width:768px)': {
            fontSize: '2.75rem',
          },'@media (max-width:425px)': {
            fontSize: '1rem',
          }
        
        },
        h3: {
          fontSize: '3rem',
          '@media (max-width:600px)': {
            fontSize: '2rem',
          }
        },
        h4: {
          fontSize: '2.5rem',
          '@media (max-width:600px)': {
            fontSize: '1.9rem',
          }
        },
        h5: {
          fontSize: '2rem',
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
          },
        h6: {
          fontSize: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '1rem',
          }
        },
        subtitle1: {
          fontSize: '1.125rem',
          fontWeight: 600,
          '@media (max-width:900px)': {
            fontSize: '1rem',
          },
          '@media (max-width:375px)': {
            fontSize: '0.875rem',
          }
          ,
          lineHeight: 'normal'
        },
        body1: {
          fontSize: '1rem',
          '@media (max-width:900px)': {
            fontSize: '0.9rem',
          },
          lineHeight: 'normal'
        },
        body2: {
          fontSize: '1rem',
          '@media (max-width:900px)': {
            fontSize: '0.9rem',
            fontWeight: 900
          },
          lineHeight: 'normal'
        },
    }}
  },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'medium',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 100,
          fontWeight:600,
          ":hover": {
            backgroundColor: '#f2f2f2',
            transition: 'all 0.3s ease-in-out',
            color: '#000'
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
}
);