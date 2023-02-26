import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../About/About";
import Register from "../Auth/Register";
import Signin from "../Auth/Signin";
import CheckOut from "../CheckOut/CheckOut";
import Home from "../Home/Home";
import ProductPage from "../ProductPage/ProductPage";
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
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/allproducts",
      element: <ProductPage />,
    },
  ]);
  return elements;
};

export default Routes;
