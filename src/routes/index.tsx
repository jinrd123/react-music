import { Navigate } from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("../application/Home"));
const Recommend = React.lazy(() => import("../application/Recommend"));
const Singers = React.lazy(() => import("../application/Singers"));
const Rank = React.lazy(() => import("../application/Rank"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/recommend",
    element: <Recommend />
  },
  {
    path: "/singers",
    element: <Singers />
  },
  {
    path: "/rank",
    element: <Rank />
  }
]

export default routes;