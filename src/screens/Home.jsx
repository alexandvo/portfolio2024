import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import AppBar from "@mui/material/AppBar";
import { Element, Link, scroller } from "react-scroll";
import NavBar from "../components/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import SectionDrawer from "../components/SectionDrawer";
import MenuToggle from "../components/MenuToggle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Home = () => {
  const [showUpScroll, setShowUpScroll] = useState(false);
  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuad",
      offset: section === "contact" ? -300 : section === "home" ? 0 : isMediumScreen ? -100 : -30,
    });
  };
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { isExSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } =
    theme.ss;

  useEffect(() => {
    const handleScroll = () => {
      // Adjust 200 to your desired scroll threshold
      if (window.scrollY > 400) {
        setShowUpScroll(true);
      } else {
        setShowUpScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      {isMediumScreen ? (
        <NavBar scrollTo={scrollTo} />
      ) : (
        <>
          <MenuToggle setOpen={setOpen} />
          <SectionDrawer scrollTo={scrollTo} setOpen={setOpen} open={open} />
        </>
      )}
      <Box

        sx={{
          position: "fixed",
          zIndex: 5000,
          width: 50,
          height: 50,
          bgcolor: "white",
          bottom: 20,
          right: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: showUpScroll && !isMediumScreen ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)'
        }}
        onClick={() => scrollTo("home")}
      >
        <ArrowUpwardIcon sx={{ color: theme.palette.accent.main }} />
      </Box>
      <Element name="home">
        <Hero scrollTo={scrollTo} />
      </Element>
      <Element name="expertise">
        <Expertise />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </Container>
  );
};

export default Home;
