import { Box, Typography, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import sekiro from "../assets/images/sekiro.jpg"
import bg from "../assets/images/question4code.png"
import jap from "../assets/images/aveyn348soa81.jpg"


const Work = () => {
    const theme = useTheme();
    
    const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;
    
    const variant = isSmallScreen ? "h4" : isMediumScreen ? "h2" : "h2";
    
  
   
    return (
      <Box sx={{ mb: 10 }}>
        <Typography variant={variant} sx={{ mb: 6 }}>
          Work
        </Typography>
        <Box sx={{display: "grid", gridTemplateColumns: '1fr 1fr', gridTemplateRows: "1fr 1fr", gap: 4}}>
          <ProjectCard title="Capsy - Virtual Time Capsule" cover={sekiro}/>
          <ProjectCard title="Testing" cover={bg}/>
          <ProjectCard title="Japan" cover={jap}/>
        </Box>
      </Box>
    )
};

export default Work;
