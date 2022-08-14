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
      light: '#fff',
      main: '#E5F5FF',
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
          backgroundColor: '#e5f5ff',
          height: 70,
          marginBottom:'1rem',
          boxShadow: '0px 11px 12px 0px hsl(206deg 100% 61% / 10%)',
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '3rem',
          fontWeight: 600,
          '@media (max-width:900px)': {
            fontSize: '2.5rem',
          },'@media (max-width:425px)': {
            fontSize: '2rem',
          }
          
        },
        h2: {
          fontSize: '3.5rem',
          fontWeight: 400,
          '@media (max-width:768px)': {
            fontSize: '1.5rem',
          },'@media (max-width:425px)': {
            fontSize: '1rem',
            lineHeight: '20px',
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
          fontSize: '1.9rem',
          '@media (max-width:768px)': {
            fontSize: '1.5rem',
            '@media (max-width:600px)': {
              fontSize: '1.3rem',
            }
          },
        h6: {
          fontSize: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '1.3rem',
          }
        },'@media (width:300px)': {
          fontSize: '0.8rem',
        },
        subtitle1: {
          fontSize: '1.3rem',
          fontWeight: 600,
          '@media (max-width:900px)': {
            fontSize: '1rem',
          },
          '@media (max-width:375px)': {
            fontSize: '0.7rem',
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
          borderRadius: 8,
          fontWeight:600,
          ":hover": {
            backgroundColor: '#9747FF',

            color: '#fff'
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
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          paddingLeft: '0px'
        }
      }
  }
}
}
);