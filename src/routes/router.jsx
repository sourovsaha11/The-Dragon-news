import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "../Pages/Home";
import CatagoryData from "../component/Homelayout/CatagoryData";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/Home",
        Component: Home,
      },
      {
        path: "/CatagoryData/:id",
        Component: CatagoryData,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },

  {
    path: "/*",
    element: <h2>This is an error page (404)</h2>,
  },
]);

export default router;
