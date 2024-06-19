import axios from "axios";

//www.omdbapi.com/?s=avenger&sort=release_date&page=1&r=json&apikey=e6b2a375

const api_key: string = "e6b2a375";

export const fetchMovie = async (page: string) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=avenger&sort=release_date&page=${page}&r=json&apikey=${api_key}&plot=full`
  );

  return response.data;
};

export const fetchDetailMovie = async (id: string) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${api_key}`
  );
  return response.data;
};

export const fetchSearchMovie = async (query: string) => {
  const response = await axios.get(
    `https://www.omdbapi.com/?s=${query}&sort=release_date&page=1&r=json&apikey=${api_key}&plot=full`
  );
  return response.data;
};

export const fetchSeries = async () => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${api_key}&type=series&s=all`
  );
  return response.data;
};
