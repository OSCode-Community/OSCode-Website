import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "./home.module.css";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";

const Home = () => {
  return (
    <Box my={20} ml={15}>
      <Typography
        variant="h2"
        component="h1"
        className={classes.heroText}
        sx={{ marginLeft: {} }}
        gutterBottom
      >
        A community of Open Source <br></br>
        developers
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ marginLeft: {}, fontWeight: "lighter" }}
        color="white"
        gutterBottom
      >
        Join the community and help us build the next generation of open source
        tools.
      </Typography>
      <Link href="/events">
        <Button className={classes.button}>Explore Events</Button>
      </Link>
    </Box>
  );
};

export default Home;
