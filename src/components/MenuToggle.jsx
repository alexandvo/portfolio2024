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
  import SectionDrawer from "../components/SectionDrawer";

const MenuToggle = ({setOpen}) => {
  return (
    <AppBar position="absolute" sx={{ bgcolor: "transparent" }} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon sx={{ color: "white", fontSize: "30px", m: 3 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
};

export default MenuToggle;
