import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/items",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);
