import React from "react";
import { useParams } from "react-router-dom";
import SeriesDetails from "../components/seriesDetails";
import PageTemplate from "../components/templateSeriesPage";
import useSeries from "../hooks/useSeries";

const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [series] = useSeries(id ?? "");

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
