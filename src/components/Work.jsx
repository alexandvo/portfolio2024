import { Box, Typography, useTheme, Grid} from "@mui/material";
import ProjectCard from "./ProjectCard";
import splitCover from "../assets/images/split-product-page.png"
import capsyCover from "../assets/images/capsy-product-page.png"
import tabventureCover from "../assets/images/tabventure-product-page.png"


const Work = () => {
  const theme = useTheme();
  const {isMediumScreen, isLargeScreen } = theme.ss;

  const variant = isLargeScreen ? "h2" : isMediumScreen ? "h2" : "h4";

  return (
    <Box sx={{ mb: 15 }}>
      <Typography variant={variant} sx={{ mb: 6 }}> 
        <>
        {"My"}
        <br/>
        {"Work"}
        </>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard title="Sp/it - Roommate App" cover={splitCover} h={["45vw", "25vw", "25vw", 200]}/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard title="Tabventure (Hackathon)" cover={tabventureCover} h={["45vw", "25vw", "25vw", 200]}/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProjectCard title="Capsy - Virtual Time Capsule" cover={capsyCover} h={["45vw", "50vw", "50vw", 200]}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Work;
