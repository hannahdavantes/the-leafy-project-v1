import { useQuery } from "@tanstack/react-query";
import { getProductsDetailed } from "../../services/apiProducts";

export function useProductsDetailed() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDetailed,
    retry: false,
  });

  return { isLoading, data, error };
}
