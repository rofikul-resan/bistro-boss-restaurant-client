import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center my-20">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
