import { Box, Typography } from "@mui/material";
import abstract from '../assets/images/abstract-shape.png';

const Hero = () => {
  return (
    <Box sx={{ height: '100vh', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <img src={abstract} alt="background abstract" className="absolute -z-10"/>
            <Typography>ALEXANDER VO</Typography>
            <Typography>SOFTWARE ENGINEER, FULL STACK DEVELOPER</Typography>

    </Box>
  );
};

export default Hero;
