import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
  yearFilter,
} from "../components/movieFilterUI";
import { DiscoverMovies, BaseMovieProps } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const yearFiltering = {
  name: "year",
  value: "",
  condition: yearFilter,
};

const TopRatedMoviesPage: React.FC = () => {
  // const [page, setPage ] = useState<String>("");
  const { pg } = useParams();
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    ["topRated",pg], () =>
      getTopRatedMovies(pg || "1")
    );
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
    yearFiltering,
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
        ? [changedFilter, filterValues[1], filterValues[2]]
        : type === "genre"
          ? [filterValues[0], changedFilter, filterValues[2]]
          : [filterValues[0], filterValues[1], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate
        title="Top Rated Movies"
        path="toprated"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => {
          return <AddToFavouritesIcon {...movie} />;
        }}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        yearFilter={filterValues[2].value}
      />
    </>
  );
};
export default TopRatedMoviesPage;
