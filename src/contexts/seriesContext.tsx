import React, { useState, useCallback } from "react";
import { BaseSeriesProps } from "../types/interfaces";

interface SeriesContextInterface {
  favourites: number[];
  addToFavourites: (series: BaseSeriesProps) => void;
  removeFromFavourites: (series: BaseSeriesProps) => void;
}
const initialContextState: SeriesContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
};

export const SeriesContext =
  React.createContext<SeriesContextInterface>(initialContextState);

const SeriesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const addToFavourites = useCallback((series: BaseSeriesProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(series.id)) {
        return [...prevFavourites, series.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((series: BaseSeriesProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== series.id)
    );
  }, []);

  return (
    <SeriesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;
