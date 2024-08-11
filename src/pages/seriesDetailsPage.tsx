import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import SeriesHeader from "../components/headerSeries/";
import SeriesDetails from "../components/seriesDetails";
// import Grid from "@mui/material/Grid";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
import { SeriesDetailsProps, /* SeriesImage*/ } from "../types/interfaces";
import { getSingleSeries/*, getSeriesImages */} from "../api/tmdb-api";
import PageTemplate from "../components/templateSeriesPage";

/*const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: "100%",
    height: "auto",
  },
};*/

const SeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [series, setSeries] = useState<SeriesDetailsProps>();
  // const [images, setImages] = useState<SeriesImage[]>([]);

  useEffect(() => {
    getSingleSeries(id ?? "").then((series) => {
      setSeries(series);
    });
  }, [id]);

  /* useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((series) => {
        setSeries(series);
      });
  }, [id]); */

  /* useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters)
      .then((images) => {
        setImages(images);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

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
