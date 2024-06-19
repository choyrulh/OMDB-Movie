import { useQuery } from "@tanstack/react-query";
import { getFetchMovie } from "../lib/function/fetchMovie";
import Card from "./../elements/Card";
import Spinner from "../components/Spinner";
import Container from "../fragments/Container";
import { useContext, useEffect, useState } from "react";
import { SearchFilterContext } from "../hooks/context/searchContext";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams<{ id: string }>();
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const {
    searchResults,
    handleSearch,
    searchQuery,
    searchQueryActive,
    handleClearSearch,
  } = useContext(SearchFilterContext);
  useEffect(() => {
    if (searchResults?.length > 0) {
      setCurrentPage(null);
    } else if (id) {
      setCurrentPage(Math.max(2, parseInt(id, 10)));
    } else {
      setCurrentPage(1);
    }
  }, [searchResults, id]);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allMovie", id],
    queryFn: async () => {
      return getFetchMovie(id);
    },
    refetchOnWindowFocus: false,
  });
  const allMovie = data?.Search;

  const results = searchResults?.length > 0 ? searchResults : allMovie;

  return (
    <>
      {isLoading && <Spinner />}
      <Container
        title={searchResults?.length > 0 ? `${searchQuery}` : "All Movies"}
        numberPages={currentPage}
        currentPages={currentPage}
      >
        <Card label={results} />
      </Container>
    </>
  );
}

export default Home;
