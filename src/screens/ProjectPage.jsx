import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { projectId } = useParams();
  const projectDetails = {
    split: {
      type: "Web Development",
      title: "Sp/it - Roommate App",
      desc: "Sp/lit is a quality-of-life mobile application that combines multiple cooperative \
      features into one place to help roommates have a better time staying with each other. \
      Useful features offered to users are messenging, shared calendars, finance trackers, location sharing, and multi-task management.",
      media: "",
      link: "https://capsy.vercel.app/",
      tech: "React, Firebase, PostgreSQL, Express, JavaScript, NodeJS",
      nextProjectId: "tabventure",
      prevProjectId: "capsy",
    },
  };

  const project = projectDetails[projectId];
  const { type, title, desc, meda, link, tech, nextProjectId, prevProjectId } =
    project;

  return (
    <Container>
      <Box sx={{mt: 25}}>
        <Typography>{type}</Typography>
        <Typography>{title}</Typography>
      </Box>

      <Box></Box>
    </Container>
  );
};

export default ProjectPage;
