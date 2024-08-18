import React, { useState } from "react";
import FilterCard from "../filterPeopleCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BasePersonProps } from "../../types/interfaces";

export const nameFilter = (person: BasePersonProps, value: string): boolean => {
  return person.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genderFilter = (person: BasePersonProps, value: string) => {
  const gender = String(person.gender);
  return gender.search(value) !== -1;
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

interface PersonFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  nameFilter: string;
  genderFilter: string;
}

const MovieFilterUI: React.FC<PersonFilterUIProps> = ({
  onFilterValuesChange,
  nameFilter,
  genderFilter,
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
          genderFilter={genderFilter}
        />
      </Drawer>
    </>
  );
};

export default MovieFilterUI;
