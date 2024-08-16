import React, { useContext, useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
// import ratings from "./ratingCategories";
import { CreateMovieProps } from "../../types/interfaces";

const CreateMovieForm: React.FC = () => {
  const defaultValues = {
    defaultValues: {
      title: "",
      overview: "",
      release_date: "",
      runtime: 0,
      genres: "",
      production_companies: "",
    },
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateMovieProps>(defaultValues);

  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  //const [rating, setRating] = useState(3);
  const [open, setOpen] = useState(false);

  /*const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };*/

  const handleSnackClose = () => {
    setOpen(false);
    navigate("/");
  };

  const onSubmit: SubmitHandler<CreateMovieProps> = (createMovie) => {
    context.addCreatedMovie(createMovie);
    setOpen(true);
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Create a Movie
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success" variant="filled" onClose={handleSnackClose}>
          <Typography variant="h4">
            Thank you for creating a Movie
          </Typography>
        </Alert>
      </Snackbar>
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="title"
              label="Movie Title"
              autoFocus
            />
          )}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}
        <Controller
          name="overview"
          control={control}
          rules={{
            required: "Overview cannot be empty.",
            minLength: { value: 10, message: "Overview is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Overview text"
              id="overview"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}
        <Controller
          name="release_date"
          control={control}
          rules={{
            required: "Release Date cannot be empty.",
            // minLength: { value: 10, message: "Overview is too short" },
          }}
          defaultValue="2025-01-01"
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={value}
              onChange={onChange}
              label="Release Date"
              id="release_date"
              autoFocus
            />
          )}
        />
        {errors.release_date && (
          <Typography variant="h6" component="p">
            {errors.release_date.message}
          </Typography>
        )}
        <Controller
          name="runtime"
          control={control}
          rules={{
            required: "Runtime cannot be empty.",
            // minLength: { value: 10, message: "Overview is too short" },
          }}
          // defaultValue = '100'
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={value}
              onChange={onChange}
              label="Runtime"
              id="runtime"
              autoFocus
            />
          )}
        />
        {errors.runtime && (
          <Typography variant="h6" component="p">
            {errors.runtime.message}
          </Typography>
        )}
        <Controller
          name="genres"
          control={control}
          rules={{
            required: "Genres cannot be empty.",
            // minLength: { value: 10, message: "Overview is too short" },
          }}
          // defaultValue = '100'
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={value}
              onChange={onChange}
              label="Genres"
              id="genres"
              autoFocus
            />
          )}
        />
        {errors.genres && (
          <Typography variant="h6" component="p">
            {errors.genres.message}
          </Typography>
        )}
        <Controller
          name="production_companies"
          control={control}
          rules={{
            required: "Production cannot be empty.",
            // minLength: { value: 10, message: "Overview is too short" },
          }}
          // defaultValue = '100'
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={value}
              onChange={onChange}
              label="Production Companies"
              id="production_companies"
              autoFocus
            />
          )}
        />
        {errors.production_companies && (
          <Typography variant="h6" component="p">
            {errors.production_companies.message}
          </Typography>
        )}

        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                title: "",
                overview: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateMovieForm;
