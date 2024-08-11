import React from "react";
import PageTemplate from "../components/templateSeriesListPage";
import { getSeries } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import SeriesFilterUI, {
  nameFilter,
  genreFilter,
} from "../components/seriesFilterUI";
import { DiscoverSeries, BaseSeriesProps } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToSeriesFavouritesIcon from "../components/cardIcons/addToSeriesFavourites";

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

const SeriesListPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverSeries, Error>(
    "discoverSeries",
    getSeries
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const series = data ? data.results : [];
  const displayedSeries = filterFunction(series);

  return (
    <>
      <PageTemplate
        title="Discover Series"
        series={displayedSeries}
        action={(series: BaseSeriesProps) => {
          return <AddToSeriesFavouritesIcon {...series} />;
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
export default SeriesListPage;
