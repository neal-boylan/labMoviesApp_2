import React from "react";
import { useParams } from "react-router-dom";
import SeasonDetails from "../components/seasonDetails";
import PageTemplate from "../components/templateSeasonPage";
// import useSeries from "../hooks/useSeries";
import { getSeason, getSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { SeasonDetailsProps, SeriesDetailsProps } from "../types/interfaces";

const SeasonDetailsPage: React.FC = () => {
  const { seriesid, seasonNumber } = useParams();

  const {
    data: season,
    error,
    isLoading,
    isError,
  } = useQuery<SeasonDetailsProps, Error>(
    ["season", seriesid, seasonNumber],
    () => getSeason(seriesid || "", seasonNumber || "")
  );

  const { data: series } = useQuery<SeriesDetailsProps, Error>(
    ["series", seriesid],
    () => getSeries(seriesid || "")
  );
  // console.log(series)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {season ? (
        <>
          <PageTemplate seriesid={String(seriesid)} season={season}>
            <SeasonDetails {...season} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for season details</p>
      )}
    </>
  );
};

export default SeasonDetailsPage;
