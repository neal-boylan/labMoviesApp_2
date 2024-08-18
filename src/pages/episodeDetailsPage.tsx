import React from "react";
import { useParams } from "react-router-dom";
import EpisodeDetails from "../components/episodeDetails";
import PageTemplate from "../components/templateEpisodePage";
// import useSeries from "../hooks/useSeries";
import { getEpisode } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { EpisodeDetailsProps } from "../types/interfaces";

const EpisodeDetailsPage: React.FC = () => {
  const { seriesid, seasonNumber, episodeNumber } = useParams();

  const {
    data: episode,
    error,
    isLoading,
    isError,
  } = useQuery<EpisodeDetailsProps, Error>(
    ["episode", seriesid, seasonNumber, episodeNumber],
    () => getEpisode(seriesid || "", seasonNumber || "", episodeNumber || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {episode ? (
        <>
          <PageTemplate
            seriesid={String(seriesid)}
            seasonNumber={String(seasonNumber)}
            episode={episode}
          >
            <EpisodeDetails {...episode} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for season details</p>
      )}
    </>
  );
};

export default EpisodeDetailsPage;
