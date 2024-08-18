import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { PersonDetailsProps } from "../../types/interfaces";

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

const PersonHeader: React.FC<PersonDetailsProps> = (person) => {
  return (
    <Paper component="div" sx={styles.root}>
      <Typography variant="h4" component="h3">
        {person.name}
        {"   "}
        <a href={person.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        <br />
      </Typography>
    </Paper>
  );
};

export default PersonHeader;
