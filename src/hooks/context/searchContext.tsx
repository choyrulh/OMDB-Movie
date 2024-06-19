import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  ChangeEvent,
  startTransition,
} from "react";
import { getSearchMovie } from "../../lib/function/fetchMovie";

interface SearchFilterContextProps {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  searchResults: unknown[];
  searchQueryActive: boolean;
  setSearchQueryActive: (value: boolean) => void;
  handleClearSearch: () => void;
}

const SearchFilterContext = createContext<SearchFilterContextProps | undefined>(
  undefined
);

interface SearchFilterProviderProps {
  children: ReactNode;
}

const SearchFilterProvider: React.FC<SearchFilterProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<unknown[]>([]);
  const [searchQueryActive, setSearchQueryActive] = useState<boolean>(false);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    startTransition(() => {
      setSearchQuery(event.target.value);
      setSearchQueryActive(true);
    });
    setSearchQueryActive(true);
  };

  const handleClearSearch = (): void => {
    setSearchQuery("");
    setSearchQueryActive(false);
  };

  useEffect(() => {
    if (searchQuery.length > 4) {
      getSearchMovie(searchQuery)
        .then((data) => {
          setSearchResults(data.Search);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearchResults([]);
    }
    if (searchQuery === "") {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <SearchFilterContext.Provider
      value={{
        handleSearch,
        searchQuery,
        searchResults,
        searchQueryActive,
        setSearchQueryActive,
        handleClearSearch,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export { SearchFilterContext, SearchFilterProvider };
