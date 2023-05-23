import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
