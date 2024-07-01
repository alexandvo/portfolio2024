import { Box, Container, useTheme } from "@mui/material";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { Element, scroller } from "react-scroll";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import SectionDrawer from "../components/SectionDrawer";
import MenuToggle from "../components/MenuToggle";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuad",
      offset:
        section === "contact"
          ? -300
          : section === "home"
          ? 0
          : isMediumScreen
          ? -100
          : -30,
    });
  };
  useEffect(() => {
    const hashValue = location.hash;
    if (hashValue !== "") {
      const sectionId = hashValue.substring(1);
      scrollTo(sectionId);
    }
  }, [location.hash]);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { isExSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } =
    theme.ss;

  return (
    <Container>
      {isMediumScreen ? (
        <NavBar />
      ) : (
        <>
          <MenuToggle setOpen={setOpen} />
          <SectionDrawer setOpen={setOpen} open={open} />
        </>
      )}
      
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
