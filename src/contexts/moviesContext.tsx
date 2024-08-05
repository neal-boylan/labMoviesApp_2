import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  mustWatches: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addToMustWatch: (movie: BaseMovieProps) => void;
  removeFromMustWatch: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void;
}
const initialContextState: MovieContextInterface = {
  favourites: [],
  mustWatches: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addToMustWatch: () => {},
  removeFromMustWatch: () => {},
  addReview: (movie, review) => {
    movie.id, review;
  },
};

export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatches, setMustWatches] = useState<number[]>([]);

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
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

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        mustWatches,
        addToFavourites,
        removeFromFavourites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
