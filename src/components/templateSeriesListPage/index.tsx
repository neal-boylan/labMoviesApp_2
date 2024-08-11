import React, { useState } from "react";
import Header from "../headerSeriesList";
import FilterCard from "../filterSeriesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import SeriesList from "../seriesList";
import { SeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

const SeriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = ({
  series,
  title,
  selectFavourite,
}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedSeries = series
    .filter((s) => {
      return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids?.includes(genreId) : true;
    });

  const handleChange = (type: string, value: string) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <SeriesList
            series={displayedSeries}
            selectFavourite={selectFavourite}
          />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};
export default SeriesListPageTemplate;
