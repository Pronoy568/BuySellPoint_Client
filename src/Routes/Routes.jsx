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
import AdminHome from "../DashboardPages/Admin/AdminHome/AdminHome";
import ManageItem from "./../DashboardPages/Admin/ManageItem/ManageItem";
import ManageUser from "../DashboardPages/Admin/ManageUser/ManageUser";
import UserHome from "../DashboardPages/User/UserHome/UserHome";
import MyCart from "../DashboardPages/User/MyCart/MyCart";
import BuyItem from "../DashboardPages/User/BuyItem/BuyItem";
import PaymentHistory from "../DashboardPages/User/PaymentHistory/PaymentHistory";
import CashOrCard from "../DashboardPages/User/PaymentHistory/CashOrCard";
import CashPayment from "../DashboardPages/User/PaymentHistory/CashPayment";
import Payment from "../DashboardPages/User/PaymentHistory/Payment";

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
          fetch(
            `https://buy-sell-point-server.vercel.app/product/${params.id}`
          ),
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
            <UserHome></UserHome>
          </UserRoute>
        ),
      },
      {
        path: "myCart",
        element: (
          <UserRoute>
            <MyCart></MyCart>
          </UserRoute>
        ),
      },
      {
        path: "cashOrCard",
        element: (
          <UserRoute>
            <CashOrCard></CashOrCard>
          </UserRoute>
        ),
      },
      {
        path: "cashPayment",
        element: (
          <UserRoute>
            <CashPayment></CashPayment>
          </UserRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <UserRoute>
            <Payment></Payment>
          </UserRoute>
        ),
      },
      {
        path: "buyItem",
        element: (
          <UserRoute>
            <BuyItem></BuyItem>
          </UserRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        ),
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
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
