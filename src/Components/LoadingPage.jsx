import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const LoadingPage = ({ children }) => {
  const { firstLoading } = useContext(AuthContext);
  if (firstLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Loading ......</h1>
      </div>
    );
  } else {
    return children;
  }
};

export default LoadingPage;
