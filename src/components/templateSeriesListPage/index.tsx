import React from "react";
import Header from "../headerSeriesList";
import Grid from "@mui/material/Grid";
import SeriesList from "../seriesList";
import { SeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const SeriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = ({
  series,
  title,
  action,
  path
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} path={path}/>
      </Grid>
      <Grid item container spacing={5}>
        <SeriesList series={series} action={action} />
      </Grid>
    </Grid>
  );
};
export default SeriesListPageTemplate;
