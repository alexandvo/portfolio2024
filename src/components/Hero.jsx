import { Box, Typography, useTheme } from "@mui/material";
import abstract from "../assets/images/abstract-shape.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Hero = ({scrollTo}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        mb: 10,
      }}
    >
      <img
        src={abstract}
        alt="background abstract"
        className="absolute -z-10 max-w-[3000px] w-[2200px] -rotate-[40deg] opacity-30"
      />
      <Typography
        fontWeight="bold"
        fontFamily={theme.typography.primary}
        color="primary"
        sx={{ fontSize: { xs: "40px", md: "6vw" } }}
      >
        ALEXANDER VO
      </Typography>
      <Typography
        variant="h5"
        align="center"
        fontFamily={theme.typography.secondary}
        fontWeight={600}
        color="primary"
      >
        SOFTWARE ENGINEER, FULL STACK DEVELOPER.
      </Typography>
      <Box
        sx={{
          position: "absolute",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: "100px",
          bottom: 0,
          mb: 13,
          cursor: "pointer"
          
        }}
        onClick={() => scrollTo('expertise')}
      >
        <Typography color='primary' variant="body1" fontFamily={theme.typography.secondary}>Learn More</Typography>
        <ExpandMoreIcon color="primary" sx={{fontSize: '2rem'}} className="oscillate-animation"/>
      </Box>
    </Box>
  );
};

export default Hero;
