import { Box, Typography, useTheme } from "@mui/material";

const Work = () => {
    const theme = useTheme();
    
    const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;
    
    const variant = isSmallScreen ? "h4" : isMediumScreen ? "h2" : "h2";
    
  
   
    return (
      <Box sx={{ mb: 10 }}>
        <Typography variant={variant} sx={{ mb: 6 }}>
          Work
        </Typography>
      </Box>
    )
};

export default Work;
