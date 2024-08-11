import React from "react";
import PageTemplate from "../components/templateSeriesListPage";

const FavouriteSeriesPage: React.FC = () => {
  const toDo = () => true;
  // Get series from local storage.
  const series = JSON.parse(localStorage.getItem("favourites") || "[]");

  return (
    <PageTemplate
      title="Favourite Series"
      series={series}
      selectFavourite={toDo}
    />
  );
};

export default FavouriteSeriesPage;
