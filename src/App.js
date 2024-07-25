import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";

const SearchContainer = lazy(() => import("./components/SearchContainer"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <WatchVideo />,
          },
          {
            path: "/results",
            element: (
              <Suspense
                fallback={<h1 className="text-center font-bold">Loading...</h1>}
              >
                <SearchContainer />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  const darkMode = useSelector((store) => store.app.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
