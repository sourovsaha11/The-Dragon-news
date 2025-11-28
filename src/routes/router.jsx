import { createBrowserRouter } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import Home from "../Pages/Home";
import CatagoryData from "../component/Homelayout/CatagoryData";
import About from "../Pages/About";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

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
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: LoginPage,
      },
      {
        path: "/auth/register",
        Component: RegisterPage,
      },
    ],
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
