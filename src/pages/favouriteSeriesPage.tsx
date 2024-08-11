import React, { useContext } from "react";
import PageTemplate from "../components/templateSeriesListPage";
import { SeriesContext } from "../contexts/seriesContext";
import { useQueries } from "react-query";
import { getSingleSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import SeriesFilterUI, {
  nameFilter,
  genreFilter,
} from "../components/seriesFilterUI";
import RemoveFromSeriesFavourites from "../components/cardIcons/removeFromSeriesFavourites";

const titleFiltering = {
  name: "title",
  value: "",
  condition: nameFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const FavouriteSeriesPage: React.FC = () => {
  const { favourites: seriesIds } = useContext(SeriesContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  // Create an array of queries and run them in parallel.
  const favouriteSeriesQueries = useQueries(
    seriesIds.map((seriesId) => {
      return {
        queryKey: ["series", seriesId],
        queryFn: () => getSingleSeries(seriesId.toString()),
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteSeriesQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const allFavourites = favouriteSeriesQueries.map((q) => q.data);
  const displayedSeries = allFavourites ? filterFunction(allFavourites) : [];

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const toDo = () => true;

  return (
    <>
      <PageTemplate
        title="Favourite Series"
        series={displayedSeries}
        action={(series) => {
          return (
            <>
              <RemoveFromSeriesFavourites {...series} />
            </>
          );
        }}
      />
      <SeriesFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default FavouriteSeriesPage;
