import React from "react";
import Header from "../headerPersonList";
import Grid from "@mui/material/Grid";
import PersonList from "../personList";
import { PersonListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
};

const PersonListPageTemplate: React.FC<PersonListPageTemplateProps> = ({
  people,
  title,
  path,
}) => {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} path={path} />
      </Grid>
      <Grid item container spacing={5}>
        <PersonList people={people} />
      </Grid>
    </Grid>
  );
};
export default PersonListPageTemplate;
