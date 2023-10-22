import { Navigate } from "react-router-dom";
import React, { Suspense } from "react";

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
    element: <Suspense><Home /></Suspense>
  },
  {
    path: "/recommend",
    element: <Suspense><Recommend /></Suspense>
  },
  {
    path: "/singers",
    element: <Suspense><Singers /></Suspense>
  },
  {
    path: "/rank",
    element: <Suspense><Rank /></Suspense>
  }
]

export default routes;