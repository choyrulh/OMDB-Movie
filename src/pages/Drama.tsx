import { useQuery } from "@tanstack/react-query";
import Container from "../fragments/Container";
import Spinner from "../components/Spinner";
import Card from "../elements/Card";
import { getFetchSeries } from "../lib/function/fetchMovie";

function Drama() {
  const { data, isLoading } = useQuery({
    queryKey: ["allDrama"],
    queryFn: async () => {
      return getFetchSeries();
    },
    refetchOnWindowFocus: false,
  });
  const allDrama = data?.Search;

  return (
    <>
      {isLoading && <Spinner />}
      <Container title="Drama">
        <Card label={allDrama} />
      </Container>
    </>
  );
}

export default Drama;
