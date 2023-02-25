import React from "react";
import { useRoutes } from "react-router-dom";
import Register from "../Auth/Register";
import Signin from "../Auth/Signin";
import CheckOut from "../CheckOut/CheckOut";
import Home from "../Home/Home";
import SingleProduct from "../SingleProduct/SingleProduct";

const Routes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <SingleProduct />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return elements;
};

export default Routes;
