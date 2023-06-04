import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../home/Home";
import Menu from "../MenuPage/Menu";
import ShopOrder from "../ShopOrderPage/ShopOrder";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../AuthPage/Login";
import SingUp from "../AuthPage/SingUp";
import DashBoardLayout from "../Layout/DashBoardLayout";
import HomeDb from "../Dashboard/Page/home/HomeDb";
import CartsDb from "../Dashboard/Page/ManageCarts/CartsDb";
import AllUsersAdmin from "../Dashboard/Admin/AllUsersAdmin";
import PrivetRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import AddItem from "../Dashboard/Admin/AddItem";
import ManageItem from "../Dashboard/Admin/ManageItem";
import Payment from "../Components/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/our-shop/:title",
        element: <ShopOrder />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsersAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItem />
          </AdminRoute>
        ),
      },
      // admin route end
      {
        path: "home",
        element: <HomeDb />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "carts",
        element: <CartsDb />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sing-up",
        element: <SingUp />,
      },
    ],
  },
]);
export default router;
