import { Navigate } from "react-router-dom";
import useAdmin from "../hook/useAdmin";

const AdminRoute = ({ children }) => {
  const { adminUser } = useAdmin();
  console.log(adminUser);
  if (adminUser?.roll === "admin") {
    return children;
  }
  return <Navigate to={"/"} />;
};

export default AdminRoute;
