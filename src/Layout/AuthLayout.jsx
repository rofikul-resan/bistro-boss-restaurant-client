import { Outlet } from "react-router-dom";
import authBg from "../assets/reservation/wood-grain-pattern-gray1x.png";

const AuthLayout = () => {
  return (
    <div
      style={{ background: `url("${authBg}")` }}
      className="flex py-20 min-h-screen"
    >
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
