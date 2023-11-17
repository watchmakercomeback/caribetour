import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e75817",
    },
    secondary: {
      main: "#224e67",
    },
    tertiary: {
      main: "#cea637",
    },
    // Puedes añadir más colores según sea necesario.
  },
  spacing: 8, // Esto define el espaciado base, el cual puedes ajustar según tus necesidades.
  // Otros ajustes del tema, como typography, breakpoints, etc.
});

export default theme;