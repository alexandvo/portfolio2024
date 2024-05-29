import { Box, Collapse, Container, Typography } from "@mui/material";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Skills from "../components/Skills";

const Home = () => {
  const open = false;
  return (
    <Container>
      <Hero />
      <Expertise />
      <Skills />
    </Container>
  );
};

export default Home;
