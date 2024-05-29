import { Box, Collapse, Container, Typography } from "@mui/material";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Home = () => {
  const open = false;
  return (
    <Container>
      <Hero />
      <Expertise />
      <Skills />
      <Work />
    </Container>
  );
};

export default Home;
