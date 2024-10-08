import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { SeriesDetailsProps } from "../../types/interfaces";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SeriesContext } from "../../contexts/seriesContext";

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

const SeriesHeader: React.FC<SeriesDetailsProps> = (series) => {
  const { favourites } = useContext(SeriesContext);

  const isFavourite = favourites.find((id) => id === series.id) ? true : false;
  return (
    <Paper component="div" sx={styles.root}>
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
        {series.name}
        {"   "}
        <a href={series.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
        <span>{`${series.tagline}`} </span>
      </Typography>
    </Paper>
  );
};

export default SeriesHeader;
