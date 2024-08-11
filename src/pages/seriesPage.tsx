import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateSeriesListPage";
import { BaseSeriesProps } from "../types/interfaces";
// import { getSeries } from "../api/tmdb-api";

const SeriesListPage: React.FC = () => {
  const [series, setSeries] = useState<BaseSeriesProps[]>([]);

  const favourites = series.filter(s => s.favourite);

  localStorage.setItem("favourites", JSON.stringify(favourites));
  
  const addToFavourites = (seriesId: number) => {
    const updatedSeries = series.map((s: BaseSeriesProps) =>
      s.id === seriesId ? { ...s, favourite: true } : s
    );
    setSeries(updatedSeries);
  };

  /* useEffect(() => {
    getSeries().then(series => {
      setSeries(series);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .then((series) => {
        setSeries(series);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title="Discover TV Series"
      series={series}
      selectFavourite={addToFavourites}
    />
  );
};
export default SeriesListPage;
