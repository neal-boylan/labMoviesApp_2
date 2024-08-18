import React from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import { getPerson } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { PersonDetailsProps } from "../types/interfaces";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const {
    data: person,
    error,
    isLoading,
    isError,
  } = useQuery<PersonDetailsProps, Error>(["person", id], () =>
    getPerson(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails {...person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
