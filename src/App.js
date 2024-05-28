import "./tailwind.css";
import Home from "./screens/Home";
import "./styles/global.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: '#ffffff',
    },
    accent: {
      main: "#700C0C",
    },
  },
  typography: {
    primary: ['Montserrat'].join(','),
    secondary: ['Open Sans'].join(','),

  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
