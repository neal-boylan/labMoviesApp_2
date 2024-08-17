import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { EpisodeDetailsProps } from "../../types/interfaces";
// import { getEpisode } from "../../api/tmdb-api";
// import { useQuery } from "react-query";
// import NavigationIcon from "@mui/icons-material/Navigation";
// import Fab from "@mui/material/Fab";
// import Drawer from "@mui/material/Drawer";
// import SeriesReviews from "../seriesReviews";
// import { Link } from "react-router-dom";

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

const EpisodeDetails: React.FC<EpisodeDetailsProps> = (episode) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Name
      </Typography>
      <Typography variant="h6" component="p">
        {episode.name}
      </Typography>

      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {episode.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${episode.vote_average} (${episode.vote_count} votes)`}
        />
        <Chip label={`First Air Date: ${episode.air_date}`} />
        <Chip label={`Runtime: ${episode.runtime} minutes`} />
      </Paper>
    </>
  );
};
export default EpisodeDetails;
