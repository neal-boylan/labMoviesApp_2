import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import SeriesList from "../components/seriesList";
import { BaseSeriesListProps } from "../types/interfaces";

const styles = {
  root: {
    padding: "20px",
  },
};

const SeriesListPage: React.FC<BaseSeriesListProps> = ({ series }) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <SeriesList series={series}></SeriesList>
      </Grid>
    </Grid>
  );
};
export default SeriesListPage;
