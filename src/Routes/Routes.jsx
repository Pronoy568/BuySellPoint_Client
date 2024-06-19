import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import OrderItem from "../pages/OrderItem/OrderItem";
import Login from "../pages/Auth/Login/Login";
import Registration from "../pages/Auth/Registration/Registration";
import NotFound from "../pages/Shared/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import AddItem from "../DashboardPages/Seller/AddItem/AddItem";
import MyItem from "../DashboardPages/Seller/MyItem/MyItem";
import SellerHome from "./../DashboardPages/Seller/SellerHome/SellerHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
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
      {
        path: "/order/:category",
        element: <OrderItem></OrderItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: (
          <UserRoute>
            <h1>User Home</h1>
          </UserRoute>
        ),
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <h1>Admin home</h1>
          </AdminRoute>
        ),
      },
      // seller routes
      {
        path: "sellerHome",
        element: (
          <SellerRoute>
            <SellerHome></SellerHome>
          </SellerRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <SellerRoute>
            <AddItem></AddItem>
          </SellerRoute>
        ),
      },
      {
        path: "myItem",
        element: (
          <SellerRoute>
            <MyItem></MyItem>
          </SellerRoute>
        ),
      },
    ],
  },
]);
