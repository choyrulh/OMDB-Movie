import { useQuery } from "@tanstack/react-query";
import { getDetailMovie } from "../lib/function/fetchMovie";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function MovieDetail() {
  const { id }: any = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["detailMovie"],
    queryFn: async () => {
      return getDetailMovie(id);
    },
    refetchOnWindowFocus: false,
  });
  console.log("data", data);

  return (
    <div className="flex flex-col items-center">
      {isLoading && <Spinner />}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        <div className="w-[60%] flex flex-col md:flex-row items-center md:gap-10 p-6 rounded shadow bg-[#212121]">
          <div className="w-full md:w-1/2 lg:w-fit h-full relative">
            <img
              src={data.Poster}
              alt={data.Title}
              className="object-cover w-auto h-auto rounded"
            />
          </div>
          <div className="flex flex-col mt-4 md:mt-0 md:w-1/2">
            <div className="text-white text-xl font-bold md:text-2xl hover:underline">
              {data.Title}
            </div>
            <p className="text-gray-200 text-base font-medium mb-2">
              {data.Year} | {data.Rated} | {data.Runtime}
            </p>
            <p className="text-gray-400 text-sm mb-2">{data.Type}</p>
            <div className="genres flex flex-wrap gap-2">
              {data.Genre.split(", ").map((item: string, index: number) => (
                <span
                  key={index}
                  className="text-gray-400 text-sm rounded-full px-2 py-1 bg-[#333333] hover:bg-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <span className="text-gray-200 text-base font-medium">
                Director:
              </span>
              <span className="text-gray-400 text-sm ml-2">
                {data.Director}
              </span>
            </div>
            <div className=" mt-2">
              <span className="text-gray-200 text-base font-medium">
                Actors:
              </span>
              <span className="text-gray-400 text-sm ml-2">{data.Actors}</span>
            </div>
            <div className=" mt-4">
              <span className="text-gray-200 text-base font-medium">Plot:</span>
              <p className="text-gray-400 text-sm mt-1">{data.Plot}</p>
            </div>
            <div className=" flex mt-4">
              <span className="text-gray-200 text-base font-medium">
                IMDb Rating:
              </span>
              <span className="text-gray-400 text-sm ml-2">
                {data.imdbRating}
              </span>
              <div className="ml-4">
                <span className="text-gray-200 text-base font-medium">
                  Votes:
                </span>
                <span className="text-gray-400 text-sm ml-2">
                  {data.imdbVotes}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
