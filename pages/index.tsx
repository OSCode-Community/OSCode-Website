import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "./home.module.css";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";

const Home = () => {
  return (
    <Box my={20} px={10}>
      <Typography
        variant="h2"
        component="h1"
        className={classes.heroText}
        sx={{ marginTop: { xs: "-6rem", lg: "0rem" }, fontSize: { xs: "3rem", sm: "5.2rem" }, paddingRight: { lg: "10rem" } }}
        gutterBottom
      >
        A community of Open Source
        developers
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        sx={{ paddingRight: { sm: "1.5rem" }, fontSize: {xs: "1.2rem", sm: "1.8rem", lg: "1.5rem"} ,fontWeight: "lighter" }}
        color="white"
        gutterBottom
      >
        Join the community and help us build the next generation of open source
        tools.
      </Typography>
      <Link href="/events">
        <Button className={classes.button} sx= {{paddingX: {xs: "3rem" ,sm: "6rem"}, paddingY: {sm: "1rem"}}}>Explore Events</Button>
      </Link>
    </Box>
  );
};

export default Home;
