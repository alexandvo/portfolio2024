import {
  Box,
  Collapse,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import pic from "../assets/images/computer.png";
import SkillCard from "./SkillCard";
import downArrow from "../assets/images/down-arrow.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const theme = useTheme();
  const [menuSelect, setMenuSelect] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;
  const collapsable = isSmallScreen;
  const variant = isSmallScreen ? "h4" : isMediumScreen ? "h2" : "h2";
  const skillsRef = useRef(null);
  const skills = [
      ["Firebase", "#FFA611", "white", new Set(["Backend", "Databases", "All"]), "https://firebase.google.com"],
      ["Python", "#3776AB", "white", new Set(["Languages", "All"]), "https://www.python.org"],
      ["C", "#A8B9CC", "white", new Set(["Languages", "All"]), "https://www.w3schools.com/c/c_intro.php"],
      ["C++", "#6495ED", "white", new Set(["Languages", "All"]), "https://cplusplus.com/"],
      ["Java", "#007396", "white", new Set(["Languages", "All"]), "https://www.java.com"],
      ["JavaScript", "#F0DB4F", "black", new Set(["Languages", "All"]), "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
      ["HTML", "#E34F26", "white", new Set(["Frontend", "All"]), "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["CSS", "#1572B6", "white", new Set(["Frontend", "All"]), "https://developer.mozilla.org/en-US/docs/Web/CSS"],
      ["Racket", "#8B0000", "white", new Set(["Languages", "All"]), "https://racket-lang.org/"],
      ["PostgreSQL", "#336791", "white", new Set(["Databases", "All"]), "https://www.postgresql.org/"],
      ["AWS", "#FF9900", "white", new Set(["Databases", "Backend", "All"]), "https://aws.amazon.com/"],
      ["React", "#61DAFB", "white", new Set(["Frontend", "All"]), "https://reactjs.org/"],
      ["React Native", "#61DAFB", "white", new Set(["Frontend", "All"]), "https://reactnative.dev/"],
      ["JavaFX", "#B22222", "white", new Set(["Frontend", "All"]), "https://openjfx.io/"],
      ["Node.js", "#68A063", "white", new Set(["Backend", "All"]), "https://nodejs.org/"],
      ["Express", "#000000", "white", new Set(["Backend", "All"]), "https://expressjs.com/"],
      ["Supabase", "#40514E", "white", new Set(["Databases", "Backend", "All"]), "https://supabase.io/"],
      ["Vercel", "#000000", "white", new Set(["Tools", "All"]), "https://vercel.com/"],
      ["Render.com", "#348F50", "white", new Set(["Tools", "All"]), "https://render.com/"],
      ["Git", "#F05032", "white", new Set(["Tools", "All"]), "https://git-scm.com/"],
      ["GitHub", "#181717", "white", new Set(["Tools", "All"]), "https://github.com/"],
      ["Yarn", "#2C8EBB", "white", new Set(["Tools", "All"]), "https://yarnpkg.com/"],
      ["NPM", "#CB3837", "white", new Set(["Tools", "All"]), "https://www.npmjs.com/"],
      ["Figma", "#9400D3", "white", new Set(["Tools", "All"]), "https://www.figma.com/"],
      ["OpenAI", "#00AFF0", "white", new Set(["Tools", "All"]), "https://openai.com/"],
      ["Microsoft Office", "#D83B01", "white", new Set(["Tools", "All"]), "https://www.microsoft.com/en-us/microsoft-365/get-started-with-office-2019"],
    
  ];

  const [shownSkills, setShownSkills] = useState([...skills]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < skills.length; i++) {
      if (skills[i][3].has(menuSelect)) {
        temp = [...temp, skills[i]];
      }
    }
    setShownSkills(temp);
  }, [menuSelect]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuItemClick = (text) => () => {
    setMenuSelect(text);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant={variant} sx={{ mb: 6 }}>
        Skills
      </Typography>
      <div>
        <Button
          sx={{
            textTransform: "none",
            bgcolor: "#2e2e2e",
            mb: 2,
            display: "flex",
          }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="contained"
          endIcon={<ArrowDropDownIcon color="primary" />}
        >
          <Typography
            variant="h5"
            fontFamily={theme.typography.secondary}
            color="primary"
          >
            {menuSelect}
          </Typography>
          {/* <img src={downArrow} alt="down arrow" /> */}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#2e2e2e", // Change this to your desired color
            },
            transform: 'translateY(10px)'
          }}
        >
          <MenuItem onClick={handleMenuItemClick("All")}>
            <Typography
              variant="h5"
              fontFamily={theme.typography.secondary}
              color="primary"
            >
              All
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick("Frontend")}>
            <Typography
              variant="h5"
              fontFamily={theme.typography.secondary}
              color="primary"
            >
              Frontend
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick("Backend")}>
            <Typography
              variant="h5"
              fontFamily={theme.typography.secondary}
              color="primary"
            >
              Backend
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick("Databases")}>
            <Typography
              variant="h5"
              fontFamily={theme.typography.secondary}
              color="primary"
            >
              Databases
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick("Tools")}>
            <Typography
              variant="h5"
              fontFamily={theme.typography.secondary}
              color="primary"
            >
              Tools
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleMenuItemClick("Languages")}>
            <Typography
              variant="h5"
              fontFamily={theme.typography.secondary}
              color="primary"
            >
              Languages
            </Typography>
          </MenuItem>
        </Menu>
      </div>
      <Box sx={{ position: "relative" }}>
        <Collapse in={showAll || !collapsable || menuSelect != "All"} collapsedSize={200}>
          <Box
            ref={skillsRef}
            sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            {shownSkills.map((skill, _) => (
              <SkillCard
                key={_}
                name={skill[0]}
                bgColor={skill[1]}
                fontColor={skill[2]}
                url={skill[4]}
              />
            ))}
          </Box>
        </Collapse>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50px",
            background:
              "linear-gradient(to bottom, rgba(21,21,21,0), rgba(21,21,21,1))",
            opacity: showAll || !collapsable || menuSelect != "All" ? 0 : 1,
            transition: "opacity 300ms",
          }}
        />
        {collapsable && menuSelect == "All" && (
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bottom: showAll ? -110 : -70,
              width: "100%",
            }}
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            <ExpandMoreIcon
              color="primary"
              sx={{
                fontSize: "2rem",
                rotate: "180deg",
                opacity: showAll ? 1 : 0,
              }}
              className="oscillate-animation"
            />

            <Typography
              variant="body1"
              fontFamily={theme.typography.secondary}
              color="white"
              align="center"
            >
              {!showAll ? "Show All" : "Show Less"}
            </Typography>
            <ExpandMoreIcon
              color="primary"
              sx={{ fontSize: "2rem", opacity: !showAll ? 1 : 0 }}
              className="oscillate-animation"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Skills;
