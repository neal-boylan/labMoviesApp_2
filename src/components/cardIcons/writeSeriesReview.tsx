import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { BaseSeriesProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const WriteReviewIcon: React.FC<BaseSeriesProps> = (series) => {
  return (
    <Link
      to={"/series/reviews/form"}
      state={{
        seriesId: series.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;
