import { Box, Link, Typography, useTheme } from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const accColor = theme.palette.accent.main;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: 12,
      }}
    >
      <Typography
        fontFamily={theme.typography.primary}
        fontSize="1.6rem"
        fontWeight={600}
        color="white"
        sx={{ mb: 3, px: 1, boxShadow: `inset 0 -15px 0 0 ${theme.palette.accent.main}`}}
      >
        <Link href="mailto:alexthevo04@gmail.com" sx={{textDecoration: 'none'}}>alexthevo04@gmail.com</Link>
      </Typography>
      <Typography
        fontFamily={theme.typography.primary}
        fontSize="1.2rem"
        fontWeight={600}
        sx={{mb: "5px"}}
      >
        <Link
          href="https://www.linkedin.com/in/alexandvo"
          rel="noopener"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          LinkedIn
        </Link>
      </Typography>
      <Typography
        fontFamily={theme.typography.primary}
        fontSize="1.2rem"
        fontWeight={600}
      >
        <Link
          href="https://www.github.com/alexandvo"
          rel="noopener"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          GitHub
        </Link>
      </Typography>
    </Box>
  );
};

export default Contact;
