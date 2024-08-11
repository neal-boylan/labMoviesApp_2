import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
// import useSeries from "../hooks/useSeries";
import { getSingleSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { SeriesDetailsProps } from "../types/interfaces";

const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  // const [series] = useSeries(id ?? "");
  const {
    data: series,
    error,
    isLoading,
    isError,
  } = useQuery<SeriesDetailsProps, Error>(["series", id], () =>
    getSingleSeries(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {series ? (
        <>
          <PageTemplate series={series}>
            <SeriesDetails {...series} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for series details</p>
      )}
    </>
  );
};

export default SeriesDetailsPage;
