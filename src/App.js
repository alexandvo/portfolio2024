import "./tailwind.css";
import Home from "./screens/Home";
import "./styles/global.css";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./screens/ProjectPage";
import NavBar from "./components/NavBar";

function App() {
  const baseTheme = createTheme();

  const isExSmallScreen = useMediaQuery(baseTheme.breakpoints.up("xs"));
  const isSmallScreen = useMediaQuery(baseTheme.breakpoints.up("sm"));
  const isMediumScreen = useMediaQuery(baseTheme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(baseTheme.breakpoints.up("lg"));

  const theme = createTheme({
    ss: {
      isExSmallScreen,
      isSmallScreen,
      isMediumScreen,
      isLargeScreen,
    },
    palette: {
      primary: {
        main: "#ffffff",
      },
      secondary: {
        main: "#151515",
      },
      accent: {
        main: "#700C0C",
        sup: "#2e0606",
      },
    },
    typography: {
      h2: {
        fontSize: "5rem",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        color: "white",
      },
      h4: {
        fontSize: "11vw",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        color: "white",
      },
      primary: ["Montserrat"].join(","),
      secondary: ["Open Sans"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
