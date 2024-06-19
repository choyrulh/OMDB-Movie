import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./pages/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
import { SearchFilterProvider } from "./hooks/context/searchContext";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import Genre from "./pages/Genre";

const Home = lazy(() => import("./pages/Home"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const Drama = lazy(() => import("./pages/Drama"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/page/:id", element: <Home /> },
        { path: "/detail/:id", element: <MovieDetail /> },
        { path: "/drama", element: <Drama /> },
        { path: "/genre", element: <Genre /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchFilterProvider>
          <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
          </Suspense>
        </SearchFilterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
