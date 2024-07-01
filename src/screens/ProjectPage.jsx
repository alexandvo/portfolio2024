import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectPage = () => {
  const navigate = useNavigate();
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
      media: [
        "/images/split-product-page.png",
        "/images/split-dashboards.png",
        "/images/split-messages.png",
      ],
      link: "",
      tech: "React Native, Firebase, PostgreSQL, Express, JavaScript, NodeJS",
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
      media: ["/images/tabventure-product-page.png", "/videos/tabventure-demo.mp4"],
      link: "",
      tech: "React, Firebase, Python, ChromaDB, OpenAI, LangChain, JavaScript, NodeJS",
      nextProjectId: "capsy",
      prevProjectId: "split",
    },
    capsy: {
      type: "Web Development",
      title: "Capsy",
      subtitle: "Virtual Time Capsule",
      desc: "Capsy is a website application for creating and storing priceless digital memories for future retrieval. \
      Users can upload photos, set dates to be opened, and make personal notes. It allows individuals to evoke a sense of nostalgia \
      by looking into the past and relive cherished moments",
      media: [
        "/images/capsy-product-page.png",
        "/images/capsy-dash.png",
        "/images/capsy-create-content.png",
        "/images/capsy-capinfo.png",
        "/images/capsy-opened.png",
      ],
      link: "https://capsy.vercel.app",
      tech: "React, Firebase, JavaScript, Express, NodeJS, PostgreSQL",
      nextProjectId: "split",
      prevProjectId: "tabventure",
    },
  };

  const project = projectDetails[projectId];
  const {
    type,
    title,
    subtitle,
    desc,
    media,
    link,
    tech,
    nextProjectId,
    prevProjectId,
  } = project;

  const { isMediumScreen, isLargeScreen, isExLargeScreen } = theme.ss;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [projectId]);

  return (
    <>
      <Container sx={{pb: isMediumScreen ? 10 : 0}}>
        <Box sx={{ mt: 25, mb: 5, p: 0.1 }}>
          <Typography
            variant="h2"
            sx={{ color: "gray", fontSize: "1rem", mb: 1 }}
          >
            {type}
          </Typography>
          <Typography
            variant={isMediumScreen ? "h2" : "h4"}
            sx={{ maxWidth: "80%", mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant={"h5"}
            sx={{
              maxWidth: "80%",
              fontSize: !isMediumScreen ? "5.5vw" : "2.5rem",
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <Grid container sx={{ mb: 5 }}>
          <Grid item sm={12} md={6}>
            <Box sx={{ pr: isMediumScreen ? 10 : 0 }}>
              <Typography variant="body1" sx={{ color: "lightgrey" }}>
                {desc}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box
              sx={{ pr: isMediumScreen ? 10 : 0, mt: isMediumScreen ? 0 : 5 }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: "1rem", mb: 1, ml: isMediumScreen ? 1 : 0 }}
              >
                Technologies
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "lightgray", ml: isMediumScreen ? 1 : 0 }}
              >
                {tech}
              </Typography>
              <Button
                onClick={() => {
                  if (link !== "") {
                    window.open(link, "_blank");
                  }
                }}
                sx={{
                  textTransform: "none",
                  mt: 5,
                  p: isMediumScreen ? 1 : 0,
                  display: link !== "" ? "" : "none",
                }}
              >
                <Typography variant="h2" sx={{ fontSize: "1rem" }}>
                  Open Project
                </Typography>
                <ArrowForwardIcon sx={{ ml: 1, color: "white" }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
        {media.map((item, _) =>
          item.split("/")[1] === "images" ? (
            <img
              key={_}
              src={item}
              style={{ width: "100%", marginBottom: "20px" }}
            />
          ) : (
            <video
              key={_}
              src={item}
              loop
              muted
              autoPlay
              controls
              style={{ width: "100%", marginBottom: "20px" }}
            />
          )
        )}
      </Container>
      <Button
        onClick={() => {
          navigate(`/projects/${prevProjectId}`);
        }}
        sx={{
          borderRadius: "500px",
          position: "fixed",
          display: isExLargeScreen ? "block" : "none",
          left: 100,
          top: "50%",
          transform: "translate(-50%, -50%)",
          p: 2,
        }}
      >
        <ArrowBackIosNewIcon
          sx={{
            color: "white",
            fontSize: "2rem",
          }}
        />
      </Button>
      <Button
        onClick={() => {
          navigate(`/projects/${nextProjectId}`);
        }}
        sx={{
          borderRadius: "500px",
          position: "fixed",
          display: isExLargeScreen ? "block" : "none",
          right: 100,
          top: "50%",
          transform: "translate(+50%, -50%)",
          p: 2,
        }}
      >
        <ArrowForwardIosIcon
          sx={{
            color: "white",
            fontSize: "2rem",
          }}
        />
      </Button>
      <Box
        sx={{
          my: "1vw",
          justifyContent: "center",
          alignItems: "center",
          gap: "1vw",
          display: isExLargeScreen ? "none" : "flex",
          mb: 5
        }}
      >
        <Button
          onClick={() => {
            navigate(`/projects/${prevProjectId}`);
          }}
          sx={{ borderRadius: "500px", p: 2 }}
        >
          <ArrowBackIosNewIcon
            sx={{
              color: "white",
              fontSize: "4vw",
            }}
          />
        </Button>
        <Button
          onClick={() => {
            navigate(`/projects/${nextProjectId}`);
          }}
          sx={{ borderRadius: "500px", p: 2 }}
        >
          <ArrowForwardIosIcon
            sx={{
              color: "white",
              fontSize: "4vw",
            }}
          />
        </Button>
      </Box>
    </>
  );
};

export default ProjectPage;
