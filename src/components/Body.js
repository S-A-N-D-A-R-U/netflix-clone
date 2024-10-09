import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import TVShows from "./TVShows";
import Home from "./Home";
import GptSearch from "./GptSearch";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "tvshows",
          element: <TVShows />,
        },
        {
          path: "gptsearch",
          element: <GptSearch/>
        }
      ]
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
