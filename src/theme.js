
import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0060EF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    white: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI","Roboto","Helvetica","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"],
    h2: {
      fontWeight: 'bold',
      fontSize: 24
    },
    h3: {
      fontWeight: 'bold',
      fontSize: 22,
      color: '#2e3c42'
    },
    h4: {
      fontWeight: 'bold',
      fontSize: 19,
      color: '#2e3c42'
    },
    h5: {
      fontWeight: 'bold',
      fontSize: 17
    }
  }
});

export default theme;