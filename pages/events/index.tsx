import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import classes from "./events.module.css";
import EventCard from "../../components/EventCard";

const Events = () => {
  const events = [
    {
      title: "Bubble Wrestling",
      description: "This is the description of event 1",
      image: "/bubble.png",
    },
    {
      title: "Crack The Code",
      description: "This is the description of event 2",
      image: "/crack.png",
    },
    {
      title: "RC Car Racing",
      description: "This is the description of event 3",
      image: "/rc.png",
    },
  ];
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Events" />
      </Head>
      <Container
        maxWidth="lg"
        sx={{ color: "white", marginTop: { lg: "3rem", xs: "5rem" } }}
      >
        <Box>
          <Typography
            variant="h2"
            color="primary"
            sx={{ paddingLeft: { sx: "10rem" } }}
            className={classes.titleEvent}
          >
            Events
          </Typography>
          <Typography variant="h5" py="2rem" className={classes.manthanText}>
            Manthan 2022 Event List:
          </Typography>
          <Grid container spacing={2} sx={{ paddingTop: "2rem" }}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <EventCard
                  image={event.image}
                  title={event.title}
                  description={event.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Events;
