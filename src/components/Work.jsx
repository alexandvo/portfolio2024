import { Box, Typography, useTheme, Grid, Item } from "@mui/material";
import ProjectCard from "./ProjectCard";
import sekiro from "../assets/images/sekiro.jpg";
import bg from "../assets/images/question4code.png";
import jap from "../assets/images/aveyn348soa81.jpg";

const Work = () => {
  const theme = useTheme();
  const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;

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
          <ProjectCard title="Capsy - Virtual Time Capsule" cover={sekiro} h={["45vw", "25vw", "25vw", 200]}/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <ProjectCard title="Testing" cover={bg} h={["45vw", "25vw", "25vw", 200]}/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProjectCard title="Japan" cover={jap} h={["45vw", "50vw", "50vw", 200]}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Work;
