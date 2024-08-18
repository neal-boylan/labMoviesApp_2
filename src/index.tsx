import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import SeriesPage from "./pages/seriesPage";
import SeriesDetailsPage from "./pages/seriesDetailsPage";
import SeasonDetailsPage from "./pages/seasonDetailsPage";
import EpisodeDetailsPage from "./pages/episodeDetailsPage";
import MoviePage from "./pages/movieDetailsPage";
import DiscoverMoviesPage from "./pages/discoverMoviesPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import FavouriteSeriesPage from "./pages/favouriteSeriesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import PopularPeoplePage from "./pages/popularPeoplePage";
import PersonDetailsPage from "./pages/personDetailsPage";
import UpcomingSeriesPage from "./pages/upcomingSeriesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import SeriesReviewPage from "./pages/seriesReviewPage";
import AddSeriesReviewPage from "./pages/addMovieReviewPage";
import CreateMoviePage from "./pages/createMoviePage";
import SiteHeader from "./components/siteHeader";
import MoviesContextProvider from "./contexts/moviesContext";
import SeriesContextProvider from "./contexts/seriesContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <SeriesContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/people/popular/:pg"
                element={<PopularPeoplePage />}
              />
              <Route path="/people/:id" element={<PersonDetailsPage />} />
              <Route path="/series/discover/:pg" element={<SeriesPage />} />
              <Route path="/series/:id" element={<SeriesDetailsPage />} />
              <Route
                path="/series/:seriesid/season/:seasonNumber"
                element={<SeasonDetailsPage />}
              />
              <Route
                path="/series/:seriesid/season/:seasonNumber/episode/:episodeNumber"
                element={<EpisodeDetailsPage />}
              />
              <Route
                path="/movies/discover/:pg"
                element={<DiscoverMoviesPage />}
              />
              <Route
                path="/movies/upcoming/:pg"
                element={<UpcomingMoviesPage />}
              />
              <Route
                path="/movies/toprated/:pg"
                element={<TopRatedMoviesPage />}
              />
              <Route path="/series/upcoming" element={<UpcomingSeriesPage />} />
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route
                path="/series/favourites"
                element={<FavouriteSeriesPage />}
              />
              <Route
                path="/movies/mustwatch"
                element={<MustWatchMoviesPage />}
              />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/reviews/:id" element={<MovieReviewPage />} />
              <Route
                path="/movies/reviews/form"
                element={<AddMovieReviewPage />}
              />
              <Route
                path="/series/reviews/:id"
                element={<SeriesReviewPage />}
              />
              <Route
                path="/series/reviews/form"
                element={<AddSeriesReviewPage />}
              />
              <Route path="/movies/create" element={<CreateMoviePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </SeriesContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
