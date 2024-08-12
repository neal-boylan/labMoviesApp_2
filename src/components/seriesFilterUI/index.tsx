import React, { useState } from "react";
import FilterCard from "../filterSeriesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseSeriesProps } from "../../types/interfaces";

export const nameFilter = (series: BaseSeriesProps, value: string): boolean => {
  return series.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = (series: BaseSeriesProps, value: string) => {
  const genreId = Number(value);
  const genreIds = series.genre_ids;
  return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

export const yearFilter = (series: BaseSeriesProps, value: string) => {
  return series.first_air_date.substring(0, 4).search(value) !== -1;
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface SeriesFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  nameFilter: string;
  genreFilter: string;
  yearFilter: string;
}

const SeriesFilterUI: React.FC<SeriesFilterUIProps> = ({
  onFilterValuesChange,
  nameFilter,
  genreFilter,
  yearFilter,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
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
          onUserInput={onFilterValuesChange}
          nameFilter={nameFilter}
          genreFilter={genreFilter}
          yearFilter={yearFilter}
        />
      </Drawer>
    </>
  );
};

export default SeriesFilterUI;
