import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";

const ExpertiseCard = ({ content, t, st, avatar = null }) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{ background: "transparent", border: "2px solid lightgray", p: 4, borderRadius: 0 }}
    >
      <CardHeader
        avatar={avatar ? <img src={avatar} style={{height: '50px', fill: "white", marginRight: '10px'}} alt="avatar" /> : null}
        title={
          <>
            {t}
            <br />
            {st}
          </>
        }
        titleTypographyProps={{
          variant: "h5",
          fontSize: {xs: "6vw", md: "24px"},
          color: "primary",
          fontFamily: theme.typography.primary,
          fontWeight: "bold",
        }}
      />
      <CardContent>
        <Typography
          color="primary"
          fontFamily={theme.typography.secondary}
          variant="body1"
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExpertiseCard;
