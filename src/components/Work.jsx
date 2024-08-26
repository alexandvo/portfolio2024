import { Box, Typography, useTheme, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import splitCover from "../assets/images/split-product-page.png";
import capsyCover from "../assets/images/capsy-product-page.png";
import tabventureCover from "../assets/images/tabventure-product-page.png";
import wordunoCover from "../assets/images/worduno-product-page.png"

const Work = () => {
  const theme = useTheme();
  const { isMediumScreen, isLargeScreen } = theme.ss;

  const variant = isLargeScreen ? "h2" : isMediumScreen ? "h2" : "h4";

  return (
    <Box sx={{ mb: 15 }}>
      <Typography variant={variant} sx={{ mb: 6 }}>
        <>
          {"My"}
          <br />
          {"Work"}
        </>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <ProjectCard
            title="Worduno - Text Simplifier"
            cover={wordunoCover}
            id={"worduno"}
            h={["45vw", "50vw", "50vw", 300]}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <ProjectCard
            title="Sp/it - Roommate App"
            cover={splitCover}
            id={"split"}
            h={["45vw", "25vw", "25vw", 300]}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <ProjectCard
            title="Capsy - Virtual Time Capsule"
            cover={capsyCover}
            id={"capsy"}
            h={["45vw", "25vw", "25vw", 300]}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <ProjectCard
            title="Tabventure (Hackathon)"
            cover={tabventureCover}
            id={"tabventure"}
            h={["45vw", "50vw", "50vw", 300]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Work;
