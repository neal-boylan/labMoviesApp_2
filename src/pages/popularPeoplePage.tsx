import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../components/templatePersonListPage";
import { getPopularPeople } from "../api/tmdb-api";
import useFiltering from "../hooks/useFiltering";
import PersonFilterUI, {
  nameFilter,
  genderFilter,
} from "../components/personFilterUI";
import { DiscoverPeople } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};
const genderFiltering = {
  name: "gender",
  value: "",
  condition: genderFilter,
};

const PopularPeoplePage: React.FC = () => {
  const { pg } = useParams();
  const { data, error, isLoading, isError } = useQuery<DiscoverPeople, Error>(
    ["popularPeople", pg],
    () => getPopularPeople(pg || "1")
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    nameFiltering,
    genderFiltering,
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const people = data ? data.results : [];
  //const displayedPeople = filterFunction(people);
  const displayedPeople = people;
  return (
    <>
      <PageTemplate
        title="Popular People"
        path="popular"
        people={displayedPeople}
      />
      <PersonFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genderFilter={filterValues[1].value}
      />
    </>
  );
};
export default PopularPeoplePage;
