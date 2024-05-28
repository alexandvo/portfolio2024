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
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const theme = useTheme();
  const [showAll, setShowAll] = useState(false);
  const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;
  const collapsable = isSmallScreen;
  const variant = isSmallScreen ? "h4" : isMediumScreen ? "h2" : "h2";
  const skillsRef = useRef(null);
  const skills = [
    ["Firebase", "#FFA611", "white"],
    ["Python", "#3776AB", "white"],
    ["C", "#A8B9CC", "white"],
    ["C++", "#6495ED", "white"],
    ["Java", "#007396", "white"],
    ["JavaScript", "#F0DB4F", "black"],
    ["HTML", "#E34F26", "white"],
    ["CSS", "#1572B6", "white"],
    ["Racket", "#8B0000", "white"],
    ["PostgreSQL", "#336791", "white"],
    ["AWS", "#FF9900", "white"],
    ["React", "#61DAFB", "white"],
    ["React Native", "#61DAFB", "white"],
    ["JavaFX", "#B22222", "white"],
    ["Node.js", "#68A063", "white"],
    ["Express", "#000000", "white"],
    ["Supabase", "#40514E", "white"],
    ["Vercel", "#000000", "white"],
    ["Render.com", "#348F50", "white"],
    ["Git", "#F05032", "white"],
    ["GitHub", "#181717", "white"],
    ["Yarn", "#2C8EBB", "white"],
    ["NPM", "#CB3837", "white"],
    ["Figma", "#9400D3", "white"],
    ["OpenAI", "#00AFF0", "white"],
    ["Microsoft Office", "#D83B01", "white"],
  ];

  return (
    <Box sx={{ mb: 10 }}>
      <Typography variant={variant} sx={{ mb: 6 }}>
        Skills
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Collapse in={showAll || !collapsable} collapsedSize={200}>
          <Box
            ref={skillsRef}
            sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            {skills.map((skill, _) => (
              <SkillCard
                key={_}
                name={skill[0]}
                bgColor={skill[1]}
                fontColor={skill[2]}
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
            opacity: showAll || !collapsable ? 0 : 1,
            transition: "opacity 300ms",
          }}
        />
        {collapsable && (
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bottom: showAll ? -90 : -60,
              width: "100%",
            }}
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            <img
              src={downArrow}
              alt="down arrow"
              style={{
                width: "30px",
                rotate: "180deg",
                animation: "oscillate 1s ease-in-out infinite",
                opacity: showAll ? 1 : 0,
              }}
            />
            <Typography
              variant="body1"
              fontFamily={theme.typography.secondary}
              color="white"
              align="center"
              sx={{ mb: 1, mt: 1 }}
            >
              {!showAll ? "Show All" : "Hide"}
            </Typography>
            <img
              src={downArrow}
              alt="down arrow"
              style={{
                width: "30px",
                animation: "oscillate 1s ease-in-out infinite",
                opacity: !showAll ? 1 : 0,
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Skills;
