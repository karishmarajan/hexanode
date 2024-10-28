import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
    red: {
        main: '#dd0735'
    },
    white: {
        main: '#ffff',
    },
    black : {
      main: '#00000',
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});