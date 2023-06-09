import { Link, NavLink, useLocation } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import ScrollToTop from "./ScrollToTop";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useCarts from "../hook/useCarts";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const { carts } = useCarts();
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="bg-black/70 flex justify-between w-full items-center py-4 text-white  md:px-24  fixed z-10 top-0  ">
      <ScrollToTop path={location.pathname} />
      <div className="flex-1">
        <div className=" ml-6 md:text-center w-fit">
          <p className="font-cinzel text-xl font-bold">BISTRO BOSS</p>
          <p className="font-cinzel font-semibold clear-left">Restaurant</p>
        </div>
      </div>
      {user && (
        <div className="flex md:order-2 items-center text-2xl gap-4 ">
          <Link to={"/dashboard/carts"} className="relative">
            <div className="rounded-full absolute -top-1 -right-1 grid place-items-center bg-orange-700 h-4 w-4  text-xs">
              {carts.length}
            </div>
            <HiShoppingCart />
          </Link>
          {/* user info  */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              data-theme="dark"
              className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user?.displayName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a
                  onClick={() =>
                    logOut()
                      .then(() => {})
                      .catch((err) => console.log(err))
                  }
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white hover:text-black" />

          {/* nav toggler */}
          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      )}

      {/* nav link  */}
      <div className="ml-auto mr-4">
        <div
          className={`md:flex navbar delay-300 absolute md:static bg-black/70 md:bg-transparent  w-full md:w-fit left-0 top-[5.25rem] flex-col md:flex-row md:ml-auto font-semibold items-center uppercase ${
            !isOpen ? "opacity-0 hidden md:opacity-100" : "opacity-100"
          }`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            CONTACT US
          </NavLink>

          <NavLink
            to={"/menu"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Our Menu
          </NavLink>

          <NavLink
            to={"/our-shop/salad"}
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
          >
            Our Shop
          </NavLink>

          {user ? (
            <NavLink
              to={"/dashboard/home"}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              DASHBOARD
            </NavLink>
          ) : (
            <>
              {location.pathname === "/auth/login" ? (
                <Link to={"/auth/Sing-up"} className="btn btn-success">
                  Sing Up
                </Link>
              ) : (
                <Link to={"/auth/login"} className="btn btn-primary">
                  Log in
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
