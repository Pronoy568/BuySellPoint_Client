import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["selectedProduct", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedProduct?email=${user?.email}`);
      return res.data;
    },
  });

  return [cart, refetch];
};
export default useCart;
