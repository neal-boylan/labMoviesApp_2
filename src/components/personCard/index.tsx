import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { BasePersonProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface PersonCardProps {
  person: BasePersonProps;
}

const MovieCard: React.FC<PersonCardProps> = ({ person }) => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {person.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          person.known_for[0].poster_path
            ? `https://image.tmdb.org/t/p/w500/${person.known_for[0].poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <b>Popularity:</b> {person.popularity}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/people/${person.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
