import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import classes from "./events.module.css"

const Events = () => {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events" />
      </Head>
      <Container maxWidth="lg" sx={{ color: "white", marginTop: {lg: "3rem"} }} >
        <Box>
            <Typography variant="h2" color="primary" sx={{  }} className={classes.titleEvent}>
                Events
            </Typography>
            <Typography variant="h5" py="2rem" className={classes.manthanText}>
                Manthan 2022 Events
            </Typography>

        </Box>
      </Container>
    </>
  );
};

export default Events;
