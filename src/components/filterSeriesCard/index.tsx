import React, { ChangeEvent } from "react";
import { FilterOption, GenreData } from "../../types/interfaces";
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
import { getSeriesGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

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

interface FilterSeriesCardProps {
  onUserInput: (f: FilterOption, s: string) => void;
  nameFilter: string;
  genreFilter: string;
  yearFilter: string;
}

const FilterSeriesCard: React.FC<FilterSeriesCardProps> = ({
  nameFilter,
  genreFilter,
  yearFilter,
  onUserInput,
}) => {
  const { data, error, isLoading, isError } = useQuery<GenreData, Error>(
    "genres",
    getSeriesGenres
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }
  const genres = data?.genres || [];
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  function generateYearsBetween(startYear = 1900, endYear?: number) {
    const endDate = endYear || new Date().getFullYear();
    const years = [];

    for (let i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  const years = generateYearsBetween(1900);
  years.reverse();
  years.map(String);

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

  const handleGenreChange = (e: SelectChangeEvent) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleYearChange = (e: SelectChangeEvent) => {
    handleChange(e, "year", e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the series.
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
              value={genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={styles.formControl}>
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              id="year-select"
              value={yearFilter}
              onChange={handleYearChange}
            >
              {years.map((year) => {
                return (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the series.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FilterSeriesCard;
