import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const {
    data: product = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/product");
      return res.json();
    },
  });

  return [product, loading, refetch];
};

export default useProduct;
