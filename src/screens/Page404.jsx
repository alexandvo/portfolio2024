import { Box, Container, Typography } from "@mui/material";

const Page404 = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" , height: '100vh', flexDirection: 'column'}}
    >
      <Typography variant="h2" sx={{mb: 3}}>404</Typography>
      <Typography variant="h5">Sorry, we couldn't find this page.</Typography>
    </Container>
  );
};

export default Page404;
