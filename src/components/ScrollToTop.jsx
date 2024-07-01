import { Box, useTheme, } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
  const [showUpScroll, setShowUpScroll] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
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
        opacity: showUpScroll ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
      }}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowUpwardIcon sx={{ color: theme.palette.accent.main }} />
    </Box>
  );
};

export default ScrollToTop;
