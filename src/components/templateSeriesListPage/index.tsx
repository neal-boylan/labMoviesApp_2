import React /*, { useState }*/ from "react";
import Header from "../headerSeriesList";
// import FilterCard from "../filterSeriesCard";
import Grid from "@mui/material/Grid";
// import Fab from "@mui/material/Fab";
// import Drawer from "@mui/material/Drawer";
import SeriesList from "../seriesList";
import { SeriesListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};
/*
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
}; */

const SeriesListPageTemplate: React.FC<SeriesListPageTemplateProps> = ({
  series,
  title,
  action,
}) => {
  /*const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedSeries = series
    .filter((s) => {
      return s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids?.includes(genreId) : true;
    });

  const handleChange = (type: string, value: string) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  }; */

  return (
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <SeriesList series={series /*displayedSeries*/} action={action} />
        </Grid>
      </Grid>
    </>
  );
};
export default SeriesListPageTemplate;
