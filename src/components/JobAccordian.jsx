import { LocationOn, Outbound } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Grid, Link, Typography, useTheme } from "@mui/material";

const JobAccordian = ({
  expanded,
  changePanel,
  lst,
  cover,
  title,
  desc,
  location,
  website,
  name,
  date,
}) => {
  const theme = useTheme();
  const mdWidth = theme.breakpoints.values.md;
  const { isSmallScreen, isMediumScreen, isLargeScreen } = theme.ss;

  return (
    <Accordion
      expanded={expanded}
      onChange={changePanel(name)}
      elevation={0}
      disableGutters
      sx={{
        bgcolor: "transparent",
        width: "100%",
        mb: 1,
      }}
    >
      <AccordianSummary
        aria-controls="panelxd-content"
        id="panelxd-header"
        sx={{
          bgcolor: theme.palette.accent.main,
          px: 4,
          py: 1,
          borderRadius: 1,
        }}
        expandIcon={
          expanded === name ? (
            <RemoveIcon sx={{ color: "white" }} />
          ) : (
            <AddIcon sx={{ color: "white" }} />
          )
        }
      >
        <Typography
          fontSize={16}
          fontFamily={theme.typography.primary}
          color="white"
          fontWeight={600}
        >
          {title}
        </Typography>
        <Typography
          fontSize={16}
          fontFamily={theme.typography.primary}
          color="white"
          fontWeight={600}
          sx={{
            position: "absolute",
            right: 80,
            opacity: !isSmallScreen ? 0 : 1,
          }}
        >
          {date}
        </Typography>
      </AccordianSummary>
      <AccordianDetails
        sx={{
          bgcolor: theme.palette.accent.sup,
          mt: 2,
          py: 3,
          px: 4,
          borderRadius: 1,
          mb: 1,
        }}
      >
        <Grid container>
          <Grid item md={3} order={{ md: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                pb: !isLargeScreen && !isMediumScreen ? 3 : 0,
              }}
            >
              <img src={cover} style={{ height: 90 }} />
            </Box>
          </Grid>
          <Grid item md={9} order={{ md: 1 }}>
            <Box
              sx={{
                display: "flex",
                mb: 1,
                flexDirection: !isSmallScreen ? "column" : "row",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOn
                  sx={{ color: "#9d1515", mr: 1, fontSize: "1.3rem" }}
                />
                <Typography color="#aeaeae" sx={{ mr: 2 }}>
                  {location}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Outbound
                  sx={{
                    color: "#9d1515",
                    mr: 1,
                    fontSize: "1.3rem",
                    alignItems: "center",
                  }}
                />
                <Typography >
                  <Link href={`http://www.${website}`} rel="noopener" target="_blank" sx={{textDecoration: 'none', color:"#aeaeae"}}>
                    {website}
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{ my: 1 }}
              color="#ffffff"
              fontFamily={theme.typography.secondary}
              fontWeight={500}
            >
              {desc}
            </Typography>
            <Box
              sx={{
                mt: 3,
                display: "flex",
                width: "100%",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {lst.map((item, index) => (
                <Box key={index} sx={{ borderRadius: 200, bgcolor: "#520b0b" }}>
                  <Typography
                    fontSize={14}
                    color="#aeaeae"
                    fontFamily={theme.typography.primary}
                    fontWeight={500}
                    sx={{ px: 2, py: 0.5 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </AccordianDetails>
    </Accordion>
  );
};

export default JobAccordian;
