import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import classes from "./EventCard.module.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function EventCard(props: {
  image: string | undefined;
  title:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  description:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <Card
      sx={{ minWidth: 345, minHeight: 500 }}
      className={classes.eventCardBg}
    >
      <CardMedia
        component="img"
        alt="event image"
        height="350"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
      <CardActions sx={{paddingTop: "2rem"}}>
        <Button size="small" className={classes.btn}>Register</Button>
        <Button size="small" className={classes.btn}>Rules</Button>
      </CardActions>
    </Card>
  );
}
