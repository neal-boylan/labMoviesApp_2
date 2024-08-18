import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { getSeason } from "../../api/tmdb-api";
// import HomeIcon from "@mui/icons-material/Home";
import { EpisodeDetailsProps } from "../../types/interfaces";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SeasonDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const EpisodeHeader: React.FC<EpisodeDetailsProps> = (episode) => {
  const { seriesid, seasonNumber, episodeNumber } = useParams();

  const {
    data: season,
    error,
    isLoading,
    isError,
  } = useQuery<SeasonDetailsProps, Error>(
    ["season", seriesid, seasonNumber],
    () => getSeason(seriesid || "", seasonNumber || "")
  );

  const episodeCount = season.episodes.length;
  const thisEpisode = episodeNumber ? Number(episodeNumber) : 1;
  const [currentEpisode, setCurrentEpisode] = useState<number>(thisEpisode);
  let prevEpisode;
  let nextEpisode;

  currentEpisode == 1 ? (prevEpisode = 1) : (prevEpisode = currentEpisode - 1);
  currentEpisode == episodeCount
    ? (nextEpisode = episodeCount)
    : (nextEpisode = currentEpisode + 1);

  const isFavourite = false; //favourites.find((id) => id === series.id) ? true : false;
  return (
    <Paper component="div" sx={styles.root}>
      <Link
        to={`/series/${seriesid}/season/${seasonNumber}/episode/${prevEpisode}`}
      >
        <IconButton
          aria-label="go back"
          onClick={() => {
            currentEpisode != 1
              ? setCurrentEpisode(currentEpisode - 1)
              : setCurrentEpisode(1);
          }}
        >
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>

      <CardHeader
        avatar={
          isFavourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
      />

      <Typography variant="h4" component="h3">
        {episode.episode_number}: {episode.name}
        {"   "}
        <br />
        <p>Air Date: {episode.air_date}</p>
      </Typography>

      <Link
        to={`/series/${seriesid}/season/${seasonNumber}/episode/${nextEpisode}`}
      >
        <IconButton
          aria-label="go forward"
          onClick={() => {
            currentEpisode != episodeCount
              ? setCurrentEpisode(currentEpisode + 1)
              : setCurrentEpisode(episodeCount);
          }}
        >
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default EpisodeHeader;
