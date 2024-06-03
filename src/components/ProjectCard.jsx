import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import cpu from "../assets/images/sekiro.jpg";
import { useState } from "react";

const ProjectCard = ({ title, cover }) => {
    const [hovering, setHovering] = useState(false);
  return (
    <Card elevation={2} sx={{ bgcolor: "transparent"}}>
      <CardActionArea onMouseEnter={() => {setHovering(true)}} onMouseLeave={() => {setHovering(false)}}>
        <CardMedia component="img" image={cover} alt="computer"/>
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
            opacity: hovering ? 0.5 : 0
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
            sx={{ margin: 1 }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
