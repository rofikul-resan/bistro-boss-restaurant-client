import { NavLink, Outlet } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { AiFillHome, AiOutlineComment, AiOutlineMail } from "react-icons/ai";
import {
  BsBook,
  BsCalendar,
  BsCart2,
  BsMenuAppFill,
  BsShop,
  BsWallet,
} from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import useCarts from "../hook/useCarts";

const DashBoardLayout = () => {
  const [isOpen, setOpen] = useState(false);
  const { carts } = useCarts();
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
        <div className="drawer-content flex flex-col bg-base-200 ">
          <div className="flex justify-between px-5  lg:hidden">
            <div className="block font-cinzel text-center w-fit -space-y-2">
              <p className="text-xl font-bold ">BISTRO BOSS</p>
              <p className="tracking-[4px]">Restaurant</p>
            </div>
            <label htmlFor="my-drawer-2" className="btn btn-ghost ">
              <Hamburger toggled={isOpen} />
            </label>
          </div>
          <div className=" w-10/12 mx-auto ">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side uppercase font-cinzel ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-1 w-80 text-base-content bg-[#D1A054]">
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
                User Home
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/reservation"}
              >
                <BsCalendar />
                reservation
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/payment-history"}
              >
                <BsWallet />
                payment history
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/carts"}
              >
                <BsCart2 />
                my cart{" "}
                <span className="badge badge-primary">{carts.length}</span>
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/add-review"}
              >
                <AiOutlineComment />
                add review
              </NavLink>
            </li>

            <li className="font-semibold text-lg">
              <NavLink
                className={({ isActive }) => (isActive ? "text-white" : "")}
                to={"/dashboard/my-booking"}
              >
                <BsBook />
                my booking
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
