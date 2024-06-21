import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const {
    data: product = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(
        "https://buy-sell-point-server.vercel.app/product"
      );
      return res.json();
    },
  });

  return [product, loading, refetch];
};

export default useProduct;
