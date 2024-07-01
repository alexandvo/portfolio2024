import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import test from '../assets/images/capsy-product-page.png'

const ProjectPage = () => {
  const theme = useTheme();
  const { projectId } = useParams();
  const projectDetails = {
    split: {
      type: "App Development",
      title: "Sp/it",
      subtitle: "Roommate App",
      desc: "Sp/lit is a quality-of-life mobile application that combines multiple cooperative \
      features into one place to help roommates have a better time staying with each other. \
      Useful features offered to users are messenging, shared calendars, finance trackers, location sharing, and multi-task management.",
      media: ['/images/split-product-page.png'],
      link: "https://capsy.vercel.app/",
      tech: "React, Firebase, PostgreSQL, Express, JavaScript, NodeJS",
      nextProjectId: "tabventure",
      prevProjectId: "capsy",
    },
    tabventure: {
      type: "Web Development",
      title: "Tabventure",
      subtitle: "AI-Powered Trip Planner",
      desc: "Tabventure is a browser extension application that has the ability to summarize the content of the currently open tabs. \
      This is incredibly useful for someone who tends to open many tabs to look at multiple outlets of information regarding their trip. \
      When activated, the extension displays a window housing a virtualized AI assistant specifically designed to answer questions based \
      on the open browser tabs. This allows for online trip planning to become streamlined and alleviates the hassle of dealing with multiple open tabs yourself.",
      media: ['/images/tabventure-product-page.png'],
      link: "",
      tech: "React, Firebase, Python, ChromaDB, OpenAI, LangChain, JavaScript, NodeJS",
      nextProjectId: "capsy",
      prevProjectId: "split",
    },
    capsy: {
      type: "Web Development",
      title: "Capsy",
      subtitle: "Virtual Time Capsule",
      desc: "",
      media: ['/images/capsy-product-page.png'],
      link: "https://capsy.vercel.app",
      tech: "React, Firebase, JavaScript, Express, NodeJS, PostgreSQL",
      nextProjectId: "split",
      prevProjectId: "tabventure",
    }
  };

  const project = projectDetails[projectId];
  const { type, title, desc, media, link, tech, nextProjectId, prevProjectId } =
    project;
  console.log(media)
  
  const {isMediumScreen, isLargeScreen } = theme.ss;

  return (
    <Container>
      <Box sx={{ mt: 25, mb: 5, p: 0.1 }}>
        <Typography
          variant="h2"
          sx={{ color: "gray", fontSize: "1rem", mb: 1 }}
        >
          {type}
        </Typography>
        <Typography variant={isMediumScreen ? "h2" : "h4"} sx={{ maxWidth: "80%" }}>
          {title}
        </Typography>
      </Box>
      <Grid container sx={{mb: 5}}>
        <Grid item sm={12} md={6} >
          <Box sx={{ pr: isMediumScreen ? 10 : 0 }}>
            <Typography variant="body1" sx={{ color: "lightgrey" }}>
              {desc}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box sx={{ pr: isMediumScreen ? 10 : 0 , mt: isMediumScreen ? 0: 5 }}>
            <Typography variant="h2" sx={{ fontSize: "1rem", mb: 1, ml: isMediumScreen ? 1: 0  }}>
              Technologies
            </Typography>
            <Typography variant="body1" sx={{ color: "lightgray", ml: isMediumScreen ? 1: 0  }}>
              {tech}
            </Typography>
            <Button sx={{ textTransform: "none", mt: 5, p: isMediumScreen ? 1: 0}}>
              <Typography variant="h2" sx={{fontSize: '1rem' }}>Open Project</Typography>
              <ArrowForwardIcon sx={{ ml: 1, color: "white", }} />
            </Button>
          </Box>
        </Grid>
      </Grid>
      {media.map((item, _) => (
        <img key={_} src={item} style={{width: '100%', marginBottom: '20px'}}/>
      ))}

    </Container>
  );
};

export default ProjectPage;
