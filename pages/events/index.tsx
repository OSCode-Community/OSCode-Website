import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import  EventCard from "../../components/EventCard";

const index = () => {
  return (
    <>
        <Container maxWidth="lg">
            <EventCard />
        </Container>
    </>
  )
}

export default index
