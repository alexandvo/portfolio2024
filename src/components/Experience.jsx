import { Box, Grid, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import tmp from "../assets/images/abstract-shape.png";
import { LocationOn, Outbound } from "@mui/icons-material";

const Experience = () => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState("panel1");

  const { isMediumScreen, isLargeScreen } = theme.ss;

  const variant = isLargeScreen ? "h2" : isMediumScreen ? "h2" : "h4";

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const lst = ["JavaScript", "Dart", "React", "NextJS"];

  return (
    <Box sx={{ mb: 20 }}>
      <Box
        sx={{ mb: 6, display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Typography variant={variant} align="center" sx={{ maxWidth: 800 }}>
          Professional Experience
        </Typography>
      </Box>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
        sx={{
          bgcolor: "transparent",
        }}
      >
        <AccordianSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            bgcolor: theme.palette.accent.main,
            px: 4,
            py: 1,
            borderRadius: 1,
          }}
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon sx={{ color: "white" }} />
            ) : (
              <AddIcon sx={{ color: "white" }} />
            )
          }
        >
          <Typography
            fontSize={14}
            fontFamily={theme.typography.primary}
            color="white"
            fontWeight={600}
          >
            Software Engineer Intern @ TPI Staffing Inc.
          </Typography>
        </AccordianSummary>
        <AccordianDetails
          sx={{
            bgcolor: theme.palette.accent.sup,
            mt: 2,
            py: 3,
            px: 4,
            borderRadius: 1,
          }}
        >
          <Grid container>
            <Grid item md={3} order={{ md: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  pb: !isLargeScreen && !isMediumScreen ? 3 : 0
                }}
              >
                <img src={tmp} style={{ width: 300 }} />
              </Box>
            </Grid>
            <Grid item md={9} order={{ md: 1 }}>
              <Box sx={{ display: "flex", mb: 1 }}>
                <LocationOn sx={{ color: "#9d1515", mr: 1 }} />
                <Typography color="#aeaeae" sx={{ mr: 2 }}>
                  Houston, Texas
                </Typography>
                <Outbound sx={{ color: "#9d1515", mr: 1 }} />
                <Typography color="#aeaeae">tpistaffing.com</Typography>
              </Box>
              <Typography
                sx={{ my: 1 }}
                color="#e8e5e5"
                fontFamily={theme.typography.secondary}
                fontWeight={500}
              >
                Contributed to 5 full-stack web projects involving database
                management...
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  width: "100%",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {lst.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ borderRadius: 200, bgcolor: "#520b0b" }}
                  >
                    <Typography
                      fontSize={14}
                      color="#aeaeae"
                      fontFamily={theme.typography.primary}
                      fontWeight={500}
                      sx={{ px: 2, py: 0.5 }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </AccordianDetails>
      </Accordion>
    </Box>
  );
};

export default Experience;
