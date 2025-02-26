import { useQuery } from "@tanstack/react-query";
import { getProductsDetailed } from "../../services/apiProducts";

export function useProductsDetailed() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products", "products_detailed"],
    queryFn: getProductsDetailed,
  });

  return { isLoading, data, error };
}
