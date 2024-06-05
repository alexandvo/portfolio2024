import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const ProjectCard = ({ title, cover, h = ["auto", "auto", "auto", "auto"] }) => {
  const [hovering, setHovering] = useState(false);
  const theme = useTheme();
  const {isExSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;
  return (
    <Card elevation={2} sx={{ bgcolor: "transparent" }}>
      <CardActionArea
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
      >
        <Box
          sx={{
            height: isLargeScreen ? h[3] : isMediumScreen ? h[2] : isSmallScreen ? h[1] : h[0],
            overflow: "hidden",
          }}
        >
          <CardMedia component="img" image={cover} alt="computer" />
        </Box>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#151515",
            position: "absolute",
            top: 0,
            zIndex: 1,
            opacity: 0,
            transition: "opacity 0.3s ease-in-out",
            opacity: hovering ? 0.5 : 0,
          }}
        ></div>
        <CardContent
          sx={{
            bgcolor: "#202020",
            zIndex: 1000,
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color="white"
            fontSize="1.5rem"
            sx={{ margin: 1, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
