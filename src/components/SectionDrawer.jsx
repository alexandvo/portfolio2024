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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SectionDrawer = ({ scrollTo, setOpen, open }) => {
  const navigate = useNavigate()
  const sections = [
    "home",
    "expertise",
    "skills",
    "work",
    "experience",
    "contact",
  ];
  const theme = useTheme();

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <AppBar position="static" sx={{ bgcolor: "#f2f2f2" }} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(false)}
          >
            <CloseIcon sx={{ color: "black", fontSize: "30px", m: 3 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "85vw", height: "100vh", bgcolor: "#f2f2f2" }}>
        {sections.map((section, _) => (
          <Button
            key={_}
            sx={{
              width: "100%",
              textTransform: "none",
              justifyContent: "flex-start",
            }}
            onClick={() => {
              navigate(`/#${section}`)
              setOpen(false);
            }}
          >
            <Typography
              sx={{
                p: 1,
                px: 4,
                fontFamily: theme.typography.fontFamily,
                color: "black",
                fontWeight: 600,
                fontSize: "1.2rem",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Typography>
          </Button>
        ))}
      </Box>
    </Drawer>
  );
};

export default SectionDrawer;
