import "./tailwind.css";
import Home from "./screens/Home";
import "./styles/global.css";
import { Box, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./screens/ProjectPage";
import NavBar from "./components/NavBar";
import MenuToggle from "./components/MenuToggle";
import SectionDrawer from "./components/SectionDrawer";
import TopLevelNavBar from "./components/TopLevelNavBar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ScrollToTop from "./components/ScrollToTop";
import Page404 from "./screens/Page404";


function App() {
  const baseTheme = createTheme();

  const isExSmallScreen = useMediaQuery(baseTheme.breakpoints.up("xs"));
  const isSmallScreen = useMediaQuery(baseTheme.breakpoints.up("sm"));
  const isMediumScreen = useMediaQuery(baseTheme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(baseTheme.breakpoints.up("lg"));
  const isExLargeScreen = useMediaQuery(baseTheme.breakpoints.up('xl'));

  const theme = createTheme({
    ss: {
      isExSmallScreen,
      isSmallScreen,
      isMediumScreen,
      isLargeScreen,
      isExLargeScreen
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
      allVariants: {
        color: "#ffffff",
      },

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
        <TopLevelNavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <ScrollToTop />
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
