import {
  fetchDetailMovie,
  fetchMovie,
  fetchSearchMovie,
  fetchSeries,
} from "../service/api";

export const getFetchMovie = async (page: string) => {
  try {
    const resp = await fetchMovie(page);
    return resp;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};

export const getDetailMovie = async (id: string) => {
  try {
    const resp = await fetchDetailMovie(id);
    return resp;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};

export const getSearchMovie = async (query: string) => {
  try {
    const resp = await fetchSearchMovie(query);
    return resp;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};

export const getFetchSeries = async () => {
  try {
    const resp = await fetchSeries();
    return resp;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
