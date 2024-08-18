import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
// import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { SeasonDetailsProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
// import EpisodeDetails from "../episodeDetails";
// import NavigationIcon from "@mui/icons-material/Navigation";
// import Fab from "@mui/material/Fab";
// import Drawer from "@mui/material/Drawer";
// import SeriesReviews from "../seriesReviews";

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

const SeasonDetails: React.FC<SeasonDetailsProps> = (season) => {
  const { seriesid, seasonNumber } = useParams();
  // const [epNum, setEpNum] = useState<number>(1);

  console.log("series.id: ", seriesid);
  // console.log("epNum: ", epNum);

  return (
    <>
      <Typography variant="h5" component="h3">
        Season {seasonNumber}
      </Typography>

      <Typography variant="h6" component="p">
        {season.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Episodes" sx={styles.chipLabel} color="primary" />
        </li>
        {season.episodes.map((ep) => (
          <li key={ep.episode_number}>
            <Link
              to={`/series/${seriesid}/season/${seasonNumber}/episode/${ep.episode_number}`}
            >
              <Chip label={ep.episode_number + ": " + ep.name} />
            </Link>
          </li>
        ))}
      </Paper>
    </>
  );
};
export default SeasonDetails;
