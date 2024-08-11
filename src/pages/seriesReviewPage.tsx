import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateSeriesPage";
import SeriesReview from "../components/seriesReview";

const SeriesReviewPage: React.FC = () => {
  const {
    state: { series, review },
  } = useLocation();
  return (
    <PageTemplate series={series}>
      <SeriesReview {...review} />
    </PageTemplate>
  );
};

export default SeriesReviewPage;
