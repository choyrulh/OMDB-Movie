export type typePage = {
  currentPage: number;
  numberPages: undefined | string | number;
};

export type cardProps = {
  label: {
    imdbID: string;
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
  }[];
};
