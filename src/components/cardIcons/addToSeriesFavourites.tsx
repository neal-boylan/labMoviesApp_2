import React, { MouseEvent, useContext } from "react";
import { SeriesContext } from "../../contexts/seriesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseSeriesProps } from "../../types/interfaces";

const AddToSeriesFavouritesIcon: React.FC<BaseSeriesProps> = (series) => {
  const context = useContext(SeriesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(series);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToSeriesFavouritesIcon;
