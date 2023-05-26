import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../home/Home";
import Menu from "../MenuPage/Menu";
import ShopOrder from "../ShopOrderPage/ShopOrder";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../AuthPage/Login";
import SingUp from "../AuthPage/SingUp";

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
