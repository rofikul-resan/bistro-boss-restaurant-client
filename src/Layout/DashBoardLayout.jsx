import { NavLink, Outlet } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { AiFillHome, AiOutlineMail } from "react-icons/ai";
import {
  BsBook,
  BsMenuAppFill,
  BsMenuButtonWideFill,
  BsShop,
} from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { HiHome, HiUserGroup } from "react-icons/hi";

const DashBoardLayout = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      {/* side bar  */}
      <div className="drawer drawer-mobile">
        <input
          onChange={(e) => setOpen(e.target.checked)}
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col  ">
          <div className="flex justify-between px-5  lg:hidden">
            <div className="block font-cinzel text-center w-fit -space-y-2">
              <p className="text-xl font-bold ">BISTRO BOSS</p>
              <p className="tracking-[4px]">Restaurant</p>
            </div>
            <label htmlFor="my-drawer-2" className="btn btn-ghost ">
              <Hamburger toggled={isOpen} />
            </label>
          </div>
          <div className="mt-20 w-10/12 mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side uppercase font-cinzel ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-[#D1A054]">
            <div className="block font-cinzel ml-5 mb-5 text-center w-fit -space-y-2">
              <p className="text-xl font-bold ">BISTRO BOSS</p>
              <p className="tracking-[4px]">Restaurant</p>
            </div>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"./home"}
              >
                <AiFillHome />
                User home
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/add-item"}
              >
                <ImSpoonKnife />
                add items
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/carts"}
              >
                <BsMenuButtonWideFill />
                manage items
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/booking"}
              >
                <BsBook />
                Manage bookings
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/all-user"}
              >
                <HiUserGroup />
                all users
              </NavLink>
            </li>

            <div className="w-full border-b border-white my-3"></div>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"./"}
              >
                <HiHome />
                Home
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/our-menu"}
              >
                <BsMenuAppFill />
                menu
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/our-shop/salad"}
              >
                <BsShop />
                Shop
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/"}
              >
                <AiOutlineMail />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
