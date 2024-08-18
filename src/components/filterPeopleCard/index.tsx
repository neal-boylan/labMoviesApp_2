import React, { ChangeEvent } from "react";
import { FilterOption } from "../../types/interfaces";
import { SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterPeopleCardProps {
  onUserInput: (f: FilterOption, s: string) => void;
  nameFilter: string;
  genderFilter: string;
}

const FilterPeopleCard: React.FC<FilterPeopleCardProps> = ({
  nameFilter,
  genderFilter,
  onUserInput,
}) => {
  const genders = [
    { id: 0, gender: "Unspecified" },
    { id: 1, gender: "Female" },
    { id: 2, gender: "Male" },
    { id: 3, gender: "Non-binary" },
  ];

  const handleChange = (
    e: SelectChangeEvent,
    type: FilterOption,
    value: string
  ) => {
    e.preventDefault();
    onUserInput(type, value);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenderChange = (e: SelectChangeEvent) => {
    handleChange(e, "gender", e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter People.
          </Typography>
          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={nameFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl sx={styles.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={genderFilter}
              onChange={handleGenderChange}
            >
              {genders.map((gender) => {
                return <MenuItem key={gender.id}>{gender.gender}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the People.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FilterPeopleCard;
