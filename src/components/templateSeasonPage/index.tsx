import React from "react";
import SeasonHeader from "../headerSeason";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getSeasonImages } from "../../api/tmdb-api";
import { SeasonImage, SeasonDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: {
    width: 450,
    height: "100vh",
  },
};

interface TemplateSeasonPageProps {
  // series: BaseSeriesProps;
  seriesid: string;
  season: SeasonDetailsProps;
  children: React.ReactElement;
}

const TemplateSeasonPage: React.FC<TemplateSeasonPageProps> = ({
  seriesid,
  season,
  children,
}) => {
  const { data, error, isLoading, isError } = useQuery<SeasonImage[], Error>(
    ["images", seriesid, season],
    () =>
      getSeasonImages(
        String(seriesid) || "",
        String(season.season_number) || ""
      )
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data as SeasonImage[];

  return (
    <>
      <SeasonHeader {...season} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div>
            <ImageList cols={1}>
              {images.map((image: SeasonImage) => (
                <ImageListItem
                  key={image.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={"Image alternative"}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSeasonPage;
