import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review, CreateMovieProps } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  mustWatches: number[];
  myReviews: Review[];
  myCreatedMovies: CreateMovieProps[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addToMustWatch: (movie: BaseMovieProps) => void;
  removeFromMustWatch: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;
  addCreatedMovie: (movie: CreateMovieProps) => void;
}
const initialContextState: MovieContextInterface = {
  favourites: [],
  mustWatches: [],
  myReviews: [],
  myCreatedMovies: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addToMustWatch: () => {},
  removeFromMustWatch: () => {},
  addReview: (movie, review) => {
    movie.id, review;
  },
  addCreatedMovie: () => {},
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]);
  const [myCreatedMovies, setMyCreatedMovies] = useState<CreateMovieProps[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatches, setMustWatches] = useState<number[]>([]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        console.log([...prevFavourites, movie.id]);
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id)
    );
  }, []);

  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatches((prevMustWatches) => {
      if (!prevMustWatches.includes(movie.id)) {
        console.log([...prevMustWatches, movie.id]);
        return [...prevMustWatches, movie.id];
      }
      return prevMustWatches;
    });
  }, []);

  const removeFromMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatches((prevMustWatches) =>
      prevMustWatches.filter((mId) => mId !== movie.id)
    );
  }, []);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addCreatedMovie = (createdMovie: CreateMovieProps) => {
    setMyCreatedMovies({ ...myCreatedMovies, [createdMovie.title]: createdMovie });
  };

  return (
    <MoviesContext.Provider
      value={{
        myReviews,
        myCreatedMovies,
        favourites,
        mustWatches,
        addToFavourites,
        removeFromFavourites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
        addCreatedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
