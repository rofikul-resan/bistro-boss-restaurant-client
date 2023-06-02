import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();
  const {
    refetch,
    isLoading,
    data: adminUser = {},
  } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return { adminUser, refetch, isLoading };
};

export default useAdmin;
