import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import computerIcon from "../assets/images/computer.png";
import backendIcon from "../assets/images/backend.png";
import frontendIcon from "../assets/images/frontend.png";
import databaseIcon from "../assets/images/database.png";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  const theme = useTheme();

  const {isExSmallScreen, isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;

  const variant = isLargeScreen ? "h2" : isMediumScreen ? "h2" : "h4";

  return (
    <Box sx={{mb: 20 }}>
      <Typography
        variant={variant}
        align="center"
        sx={{ mb: 6 ,
        }}
      >
        My Expertise
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: { xs: "1fr 1fr 1fr 1fr", md: "1fr 1fr" },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        <ExpertiseCard
          avatar={computerIcon}
          t="Software"
          st="Development"
          content="Knowledgeable in Object-Oriented Programming with C/C++, Python, Java, JavaScript, and Racket."
        />
        <ExpertiseCard
          avatar={frontendIcon}
          t="Frontend Dev"
          st="React"
          content="Skilled in UI/UX development with HTML, CSS, JS, React, and React Native."
        />
        <ExpertiseCard
          avatar={backendIcon}
          t="Backend Dev"
          st="Node, Express"
          content="Proficient in implementing secure APIs, complex server-side logic, and integrating with various third-party services."
        />
        <ExpertiseCard
          avatar={databaseIcon}
          t="Database"
          st="Management"
          content="Experienced with optimizing and managing industry-standard databases: PostgreSQL, AWS DynamoDB, Firebase Firestore."
        />
      </Box>
    </Box>
  );
};

export default Expertise;
