import AppBar from "@mui/material/AppBar";
import { Element, Link, scroller } from "react-scroll";
import { Button, Toolbar, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const theme = useTheme();
  const sections = [
    "home",
    "expertise",
    "skills",
    "work",
    "experience",
    "contact",
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "rgba(20, 20, 20, 0.8)",
        zIndex: 10000,
        backdropFilter: "blur(30px)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
        {sections.map((section, _) => (
          <Button
          key={_}
            // onClick={() => scrollTo(section)}
            onClick={() => {navigate(`/#${section}`)}}
            sx={{ textTransform: "none" }}
          >
            <Typography
              color="white"
              sx={{ fontFamily: theme.typography.fontFamily, fontWeight: 600 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Typography>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
