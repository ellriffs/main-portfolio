import * as React from "react";
import { Route, createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

const Routes = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default Routes;
