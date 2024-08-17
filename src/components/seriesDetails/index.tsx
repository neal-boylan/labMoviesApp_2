import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { SeriesDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import SeriesReviews from "../seriesReviews";
import { Link } from "react-router-dom";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const SeriesDetails: React.FC<SeriesDetailsProps> = (series) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {series.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {series.genres.map((g) => (
          <li key={g.id}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${series.vote_average} (${series.vote_count} votes)`}
        />
        <Chip label={`First Air Date: ${series.first_air_date}`} />
        <Chip label={`Last Air Date: ${series.last_air_date}`} />
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Seasons" sx={styles.chipLabel} color="primary" />
        </li>
        {series.seasons.map((s) => (
          <li key={s.id}>
            <Link to={`/series/${series.id}/season/${s.season_number}`}>
              <Chip label={s.name} />
            </Link>
          </li>
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <SeriesReviews {...series} />
      </Drawer>
    </>
  );
};
export default SeriesDetails;
