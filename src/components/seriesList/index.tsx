import React from "react";
import Series from "../seriesCard/";
import Grid from "@mui/material/Grid";
import { BaseSeriesListProps } from "../../types/interfaces";

const SeriesList: React.FC<BaseSeriesListProps> = ({ series }) => {
  let seriesCards = series.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Series key={m.id} {...m} />
    </Grid>
  ));
  return seriesCards;
};

export default SeriesList;
