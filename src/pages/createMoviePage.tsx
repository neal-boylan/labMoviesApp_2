import React from "react";
import PageTemplate from "../components/templateMoviePage";
import CreateMovieForm from "../components/createMovieForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { BaseMovieProps, MovieDetailsProps } from "../types/interfaces";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: 450,
    height: "100vh",
  },
};

const CreateMoviePage: React.FC = () => {
 
  return (
    <>
      <CreateMovieForm />
    </>
  );
};

export default CreateMoviePage;
