import { Paper, Typography, useTheme } from "@mui/material";

const SkillCard = ({ name, icon, fontColor = "white", bgColor = "black" }) => {
    const theme = useTheme()
  return (
    <Paper sx={{ bgcolor: bgColor, display: "flex", p: 1 }} elevation={5}>
      {/* <img src={icon} style={{ height: "20px" }} alt="" /> */}
      <Typography variant="h5" fontFamily={theme.typography.primary} fontWeight='bold' color={fontColor} sx={{fontSize: { xs: "5vw", sm: "24px" }, }}>
        {name}
      </Typography>
    </Paper>
  );
};

export default SkillCard;
