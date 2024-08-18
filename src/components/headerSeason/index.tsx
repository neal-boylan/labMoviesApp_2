import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { getSingleSeries } from "../../api/tmdb-api";
import { SeasonDetailsProps } from "../../types/interfaces";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { SeriesDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";

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

const SeasonHeader: React.FC<SeasonDetailsProps> = (season) => {
  const { seriesid, seasonNumber } = useParams();

  const {
    data: series,
    error,
    isLoading,
    isError,
  } = useQuery<SeriesDetailsProps, Error>(["series", seriesid], () =>
    getSingleSeries(seriesid || "")
  );

  const seasonCount = series.number_of_seasons;
  const thisSeason = seasonNumber ? Number(seasonNumber) : 1;
  const [currentSeason, setCurrentSeason] = useState<number>(thisSeason);
  let prevSeason;
  let nextSeason;

  currentSeason == 1 ? (prevSeason = 1) : (prevSeason = currentSeason - 1);
  currentSeason == seasonCount
    ? (nextSeason = seasonCount)
    : (nextSeason = currentSeason + 1);
  // const { favourites } = useContext(SeriesContext);

  const isFavourite = false; //favourites.find((id) => id === series.id) ? true : false;
  return (
    <Paper component="div" sx={styles.root}>
      <Link to={`/series/${seriesid}/season/${prevSeason}`}>
        <IconButton
          aria-label="go back"
          onClick={() => {
            currentSeason != 1
              ? setCurrentSeason(currentSeason - 1)
              : setCurrentSeason(1);
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
        {season.name}
        {"   "}
        <br />
        <p>Air Date: {season.air_date}</p>
      </Typography>

      <Link to={`/series/${seriesid}/season/${nextSeason}`}>
        <IconButton
          aria-label="go forward"
          onClick={() => {
            currentSeason != seasonCount
              ? setCurrentSeason(currentSeason + 1)
              : setCurrentSeason(seasonCount);
          }}
        >
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default SeasonHeader;
