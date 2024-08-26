import { Box, Typography, useTheme } from "@mui/material";

import { useState } from "react";
import tpi from "../assets/images/tpi_logo.png";
import keybyte from "../assets/images/keybyte-logo.png";

import JobAccordian from "./JobAccordian";

const Experience = () => {
  const theme = useTheme();
  const mdWidth = theme.breakpoints.values.md;

  const [expanded, setExpanded] = useState("panel1");

  const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;

  const variant = isLargeScreen ? "h2" : isMediumScreen ? "h2" : "h4";

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        mb: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ mb: 6, display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Typography variant={variant} align="center" sx={{ maxWidth: 800 }}>
          Professional Experience
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: mdWidth,
        }}
      >
        <JobAccordian
          expanded={expanded === "panel1"}
          changePanel={handleChange}
          lst={["JavaScript", "React", "Python", "AWS"]}
          cover={keybyte}
          title="Software Engineer Intern @ KeyByte LLC"
          desc="Benchmarked and integrated NoSQL distributed databases into the cloud optimizing service resulting in an
increase in client database performance by over 30%. Developed automated scripts to reduce the generation time of training data for genetic machine learning
models by over 50%."
          location="West Lafayette, Illinois"
          website="keybyte.xyz"
          date={2024}
          name="panel1"
        />
        {/* <JobAccordian
          expanded={expanded === "panel2"}
          changePanel={handleChange}
          lst={["JavaScript", "SQL", "React", "NodeJS", "Python"]}
          cover={tpi}
          title="Software Engineer Intern @ TPI Staffing Inc."
          desc="Contributed to over 5 functional projects in web deesign, software development, and database management."
          location="Houston, Texas"
          website="tpistaffing.com"
          date={2023}
          name="panel2"
        /> */}
      </Box>
    </Box>
  );
};

export default Experience;
