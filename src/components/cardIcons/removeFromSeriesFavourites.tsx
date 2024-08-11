import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { SeriesContext } from "../../contexts/seriesContext";
import { BaseSeriesProps } from "../../types/interfaces";

const RemoveFromSeriesFavouritesIcon: React.FC<BaseSeriesProps> = (series) => {
  const context = useContext(SeriesContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.removeFromFavourites(series);
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={onUserRequest}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromSeriesFavouritesIcon;
