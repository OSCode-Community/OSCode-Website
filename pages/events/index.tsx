import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import EventCard from "../../components/EventCard";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const index = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item><EventCard /></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><EventCard /></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><EventCard /></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><EventCard /></Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default index;

