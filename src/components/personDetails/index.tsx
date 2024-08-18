import React from "react";
import Typography from "@mui/material/Typography";
import { PersonDetailsProps } from "../../types/interfaces";

const PersonDetails: React.FC<PersonDetailsProps> = (person) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <Typography variant="h6" component="p">
        Birthplace: {person.place_of_birth}
      </Typography>
      <Typography variant="h6" component="p">
        Birthday: {person.birthday}
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
    </>
  );
};
export default PersonDetails;
